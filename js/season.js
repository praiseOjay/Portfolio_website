/* ==========================================================================
   Seasons: the page follows the time of year in the visitor's hemisphere.
     spring  blossom petals tumbling on a light breeze
     summer  fireflies and sun motes rising in warm light
     autumn  maple and oak leaves blown about in gusts
     winter  snow in three depths, with crystals up close
   Scrolling stirs the wind and moves the particles with depth (parallax); a mouse
   pushes them aside. A picker in the navigation previews any season, with a colour
   wipe between them. The season is chosen in <head> (window.portfolioSeason) so the
   right colours paint first. With reduced motion everything is still: the particles
   are drawn once and the tapes, letters and scene do not move.
   ========================================================================== */
(function () {
    'use strict';

    const root = document.documentElement;
    const info = window.portfolioSeason || { order: ['spring', 'summer', 'autumn', 'winter'], auto: 'autumn', chosen: null, south: false };
    const ORDER = info.order;
    const reduceQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reduce = reduceQuery.matches;

    const LABEL = { spring: 'Spring', summer: 'Summer', autumn: 'Autumn', winter: 'Winter' };
    const MONTHS = info.south
        ? { spring: 'September to November', summer: 'December to February', autumn: 'March to May', winter: 'June to August' }
        : { spring: 'March to May', summer: 'June to August', autumn: 'September to November', winter: 'December to February' };

    const MAPLE_D = 'M12 1.5l1.9 3.9 2.4-1.1-.7 4.7 4-1.8-.9 3.1 3.3 1-3.6 2.7.8 2.1-5-.8L12 17l-2.2-1.7-5 .8.8-2.1L2 11.3l3.3-1-.9-3.1 4 1.8-.7-4.7 2.4 1.1z M11.4 16h1.2v6.5h-1.2z';
    const PETAL_D = 'M12 11.5C9.6 10 8.6 6.4 10.3 3.3L12 4.6l1.7-1.3c1.7 3.1.7 6.7-1.7 8.2z';
    const GLYPHS = {
        spring: '<g fill="currentColor">' + [0, 72, 144, 216, 288].map((a) => `<path transform="rotate(${a} 12 12)" d="${PETAL_D}"/>`).join('') + '</g>',
        summer: '<circle cx="12" cy="12" r="4.6" fill="currentColor"/><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M12 1.8v2.6M12 19.6v2.6M1.8 12h2.6M19.6 12h2.6M4.8 4.8l1.8 1.8M17.4 17.4l1.8 1.8M4.8 19.2l1.8-1.8M17.4 6.6l1.8-1.8"/>',
        autumn: `<path fill="currentColor" d="${MAPLE_D}"/>`,
        winter: '<g fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' +
            [0, 60, 120, 180, 240, 300].map((a) => `<path transform="rotate(${a} 12 12)" d="M12 12V2.4M9.7 4.1 12 6.2l2.3-2.1M10.3 7.9 12 9.4l1.7-1.5"/>`).join('') + '</g>'
    };

    const current = () => root.getAttribute('data-season') || info.auto;

    /** Winter crosses the new year, so it is labelled 2026/27. */
    function seasonYear(season) {
        const now = new Date();
        const y = now.getFullYear();
        const m = now.getMonth();
        if (season === (info.south ? 'summer' : 'winter')) {
            const start = m <= 1 ? y - 1 : y;
            return start + '/' + String((start + 1) % 100).padStart(2, '0');
        }
        return String(y);
    }

    /* ---- glyphs: one SVG sprite, every <use data-season-glyph> follows the season ---- */
    function injectGlyphs() {
        const holder = document.createElement('div');
        holder.setAttribute('aria-hidden', 'true');
        holder.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
        holder.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg"><defs>' +
            ORDER.map((s) => `<symbol id="glyph-${s}" viewBox="0 0 24 24">${GLYPHS[s]}</symbol>`).join('') +
            '</defs></svg>';
        document.body.prepend(holder);
    }
    function glyph(season, cls) {
        return `<svg class="${cls || ''}" viewBox="0 0 24 24" aria-hidden="true"><use data-season-glyph href="#glyph-${season}"></use></svg>`;
    }
    function setGlyphs(season) {
        document.querySelectorAll('use[data-season-glyph]').forEach((u) => u.setAttribute('href', '#glyph-' + season));
    }

    /* ---- kinetic type: the greeting and name rise in letter by letter ---- */
    function splitLetters(el, index) {
        const text = el.textContent.replace(/\s+/g, ' ').trim();
        if (!text) return index;
        el.textContent = '';
        const spoken = document.createElement('span');
        spoken.className = 'sr-only';
        spoken.textContent = text;
        el.appendChild(spoken);
        const words = text.split(' ');
        words.forEach((w, wi) => {
            const word = document.createElement('span');
            word.className = 'kt-word';
            word.setAttribute('aria-hidden', 'true');
            Array.from(w).forEach((ch) => {
                const c = document.createElement('span');
                c.className = 'kt-char';
                c.textContent = ch;
                c.style.setProperty('--i', index++);
                word.appendChild(c);
            });
            el.appendChild(word);
            if (wi < words.length - 1) el.appendChild(document.createTextNode(' '));
        });
        return index;
    }
    function initKineticTitle() {
        if (reduce) return;
        const title = document.querySelector('.hero-title');
        const greet = document.getElementById('hero-greet');
        const name = document.getElementById('profile-name');
        if (!title || !greet || !name) return;
        splitLetters(name, splitLetters(greet, 0));
        title.classList.add('kt-ready');
    }

    /* ---- section headers: a turning glyph by the tag, a swoosh that draws under the title ---- */
    function initSectionHeaders() {
        const headers = document.querySelectorAll('.section-header');
        headers.forEach((header) => {
            const tag = header.querySelector('.section-tag');
            if (tag) tag.insertAdjacentHTML('beforeend', glyph(current(), 'tag-glyph'));
            const title = header.querySelector('.section-title');
            if (title) title.insertAdjacentHTML('afterend', '<svg class="title-swoosh" viewBox="0 0 300 14" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d="M2 10C50 2 100 13 150 7S250 2 298 8"/></svg>');
        });
        if (reduce || !('IntersectionObserver' in window)) {
            headers.forEach((h) => h.classList.add('drawn'));
            return;
        }
        const io = new IntersectionObserver((entries) => entries.forEach((e) => {
            if (!e.isIntersecting) return;
            e.target.classList.add('drawn');
            io.unobserve(e.target);
        }), { threshold: 0.5 });
        headers.forEach((h) => io.observe(h));
    }

    /* ---- crossed tapes: skills on the front, the season and status on the back ---- */
    function tapeItems(words, season) {
        return words.map((w) => `<span class="tape-item"><span></span>${glyph(season)}</span>`).join('');
    }
    function fillTape(track, words, season) {
        if (!track || !words.length) return;
        track.innerHTML = tapeItems(words, season);
        Array.from(track.querySelectorAll('.tape-item > span')).forEach((s, i) => { s.textContent = words[i]; });
        // repeat the set until one copy is wider than the screen, then double it so -50% loops seamlessly
        const one = track.innerHTML;
        let copies = 1;
        while (track.scrollWidth < window.innerWidth * 1.15 && copies < 8) {
            track.insertAdjacentHTML('beforeend', one);
            copies++;
        }
        const width = track.scrollWidth;
        track.insertAdjacentHTML('beforeend', track.innerHTML);
        track.style.setProperty('--tape-dur', Math.max(20, width / 70).toFixed(1) + 's');
    }
    function skillWords() {
        const cfg = config();
        const names = (cfg.skills || []).map((s) => decode(s.name)).filter(Boolean);
        const unique = Array.from(new Set(names)).slice(0, 16);
        return unique.length ? unique : ['Python', 'SQL', 'PySpark', 'AWS', 'Power BI', 'Java', 'PHP', 'Flutter'];
    }
    function seasonWords(season) {
        const cfg = config();
        const status = decode((cfg.profile && cfg.profile.status) || '').split('•').map((s) => s.trim()).filter(Boolean);
        return [`${LABEL[season]} ${seasonYear(season)} edition`, ...status, 'Data engineering', 'Software engineering'];
    }
    // config.js declares `const portfolioConfig`: a global, but not a property of window
    function config() {
        return typeof portfolioConfig !== 'undefined' ? portfolioConfig : {};
    }
    // the CV text was HTML-escaped by main.js; the tapes use textContent, so turn entities back
    function decode(s) {
        return String(s || '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&amp;/g, '&');
    }
    function buildTapes(season) {
        fillTape(document.getElementById('tape-front'), skillWords(), season);
        fillTape(document.getElementById('tape-back'), seasonWords(season), season);
    }

    /* ---- the particle canvas ---- */
    const Particles = (function () {
        const canvas = document.getElementById('season-canvas');
        const ctx = canvas && canvas.getContext ? canvas.getContext('2d') : null;
        if (!ctx || typeof Path2D === 'undefined') return { setSeason() {}, recolor() {}, motion() {} };

        const KIND = { spring: 'petal', summer: 'mote', autumn: 'leaf', winter: 'snow' };
        const DENSITY = { petal: 17000, mote: 18000, leaf: 26000, snow: 9000 };   // screen pixels per particle
        const LIMITS = { petal: [14, 60], mote: [14, 60], leaf: [10, 40], snow: [28, 130] };
        const lowPower = (navigator.connection && navigator.connection.saveData) || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2);
        const finePointer = window.matchMedia('(pointer: fine)').matches;
        const PETAL = new Path2D(PETAL_D);
        const MAPLE = new Path2D(MAPLE_D);
        const GLINT = new Path2D('M12 1C12.7 9 15 11.3 23 12 15 12.7 12.7 15 12 23 11.3 15 9 12.7 1 12 9 11.3 11.3 9 12 1z');
        const OAK = new Path2D('M12 2.5C17 6.5 17.6 13.5 12 21.5 6.4 13.5 7 6.5 12 2.5z');

        let W = 0, H = 0, dpr = 1, kind = 'leaf';
        let list = [], sprites = { main: [], alt: [] };
        let raf = 0, last = 0, t = 0;
        let wind = 0, scrollWind = 0, scrollShift = 0, lastScroll = window.scrollY;
        const pointer = { x: -9999, y: -9999, on: false };

        const cssVar = (n) => getComputedStyle(root).getPropertyValue(n).trim();
        const dark = () => root.getAttribute('data-theme') === 'dark';
        function rgba(hex, a) {
            const m = /^#?([0-9a-f]{6})$/i.exec(hex || '');
            if (!m) return `rgba(255,255,255,${a})`;
            const n = parseInt(m[1], 16);
            return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${a})`;
        }
        function sprite(px, draw) {
            const c = document.createElement('canvas');
            const s = Math.max(2, Math.ceil(px * dpr));
            c.width = c.height = s;
            const g = c.getContext('2d');
            g.scale(s / 24, s / 24);
            draw(g);
            return c;
        }

        function buildSprites() {
            const colors = ['--p1', '--p2', '--p3'].map(cssVar).filter(Boolean);
            const main = [], alt = [];
            colors.forEach((col) => {
                if (kind === 'petal') {
                    // single petals, plus whole five-petal blossoms that spin as they fall
                    const petal = (g) => {
                        const grad = g.createLinearGradient(12, 11.5, 12, 3.3);
                        grad.addColorStop(0, col); grad.addColorStop(1, rgba('#ffffff', dark() ? 0.85 : 0.65));
                        g.fillStyle = col; g.fill(PETAL);
                        g.save(); g.globalAlpha = 0.6; g.fillStyle = grad; g.fill(PETAL); g.restore();
                        if (!dark()) { g.strokeStyle = 'rgba(160, 30, 80, .32)'; g.lineWidth = 0.35; g.stroke(PETAL); }
                    };
                    main.push(sprite(36, (g) => { g.translate(12, 12); g.scale(2.3, 2.3); g.translate(-12, -7.4); petal(g); }));
                    alt.push(sprite(40, (g) => {
                        g.translate(12, 12); g.scale(1.12, 1.12);
                        for (let k = 0; k < 5; k++) { g.save(); g.rotate((k * 2 * Math.PI) / 5); g.translate(-12, -12); petal(g); g.restore(); }
                        g.fillStyle = dark() ? '#ffe08a' : '#e0a21a';
                        for (let k = 0; k < 5; k++) { const a = (k * 2 * Math.PI) / 5 + 0.6; g.beginPath(); g.arc(Math.sin(a) * 2.6, -Math.cos(a) * 2.6, 0.75, 0, Math.PI * 2); g.fill(); }
                        g.fillStyle = rgba(cssVar('--p2') || col, 1); g.beginPath(); g.arc(0, 0, 1.5, 0, Math.PI * 2); g.fill();
                    }));
                } else if (kind === 'leaf') {
                    const veins = (g, pts) => {
                        g.strokeStyle = 'rgba(0,0,0,.25)'; g.lineWidth = 0.55; g.lineCap = 'round'; g.beginPath();
                        pts.forEach(([a, b, c, d]) => { g.moveTo(a, b); g.lineTo(c, d); }); g.stroke();
                    };
                    main.push(sprite(36, (g) => {
                        g.fillStyle = col; g.fill(MAPLE);
                        veins(g, [[12, 16.5, 12, 4], [12, 13, 18.6, 8.2], [12, 13, 5.4, 8.2], [12, 15.4, 17.6, 14.6], [12, 15.4, 6.4, 14.6]]);
                    }));
                    alt.push(sprite(32, (g) => {
                        g.fillStyle = col; g.fill(OAK);
                        veins(g, [[12, 4, 12, 21], [12, 9, 15, 7], [12, 9, 9, 7], [12, 13, 15.6, 11], [12, 13, 8.4, 11], [12, 17, 14.6, 15.4], [12, 17, 9.4, 15.4]]);
                    }));
                } else if (kind === 'snow') {
                    // on light paper white snow needs a cold blue rim to be seen
                    const frost = dark() ? null : 'rgba(70, 105, 160, .5)';
                    main.push(sprite(20, (g) => {
                        const r = g.createRadialGradient(12, 12, 0, 12, 12, 12);
                        r.addColorStop(0, rgba(col, 1)); r.addColorStop(0.45, rgba(col, 0.95));
                        if (frost) { r.addColorStop(0.62, 'rgba(110, 140, 190, .55)'); r.addColorStop(1, 'rgba(110, 140, 190, 0)'); }
                        else r.addColorStop(1, rgba(col, 0));
                        g.fillStyle = r; g.fillRect(0, 0, 24, 24);
                    }));
                    alt.push(sprite(34, (g) => {
                        const arms = (width, colour) => {
                            g.save(); g.translate(12, 12); g.strokeStyle = colour; g.lineWidth = width; g.lineCap = 'round'; g.lineJoin = 'round';
                            for (let k = 0; k < 6; k++) {
                                g.beginPath(); g.moveTo(0, 0); g.lineTo(0, -10.2);
                                g.moveTo(-2.8, -8); g.lineTo(0, -5.6); g.lineTo(2.8, -8);
                                g.moveTo(-1.8, -4.4); g.lineTo(0, -3); g.lineTo(1.8, -4.4);
                                g.stroke(); g.rotate(Math.PI / 3);
                            }
                            g.restore();
                        };
                        if (frost) arms(3, frost);
                        else { g.shadowColor = rgba(col, 0.9); g.shadowBlur = 3; }
                        arms(1.4, col);
                    }));
                } else {
                    // fireflies and sun motes, plus four-point glints of sunlight that twinkle
                    const core = dark() ? '#fffbe6' : (cssVar('--p3') || col);
                    main.push(sprite(32, (g) => {
                        const r = g.createRadialGradient(12, 12, 0, 12, 12, 12);
                        r.addColorStop(0, rgba(core, 1)); r.addColorStop(0.22, rgba(col, dark() ? 0.9 : 1));
                        r.addColorStop(0.5, rgba(col, dark() ? 0.25 : 0.4)); r.addColorStop(1, rgba(col, 0));
                        g.fillStyle = r; g.fillRect(0, 0, 24, 24);
                    }));
                    alt.push(sprite(36, (g) => {
                        const halo = g.createRadialGradient(12, 12, 0, 12, 12, 9);
                        halo.addColorStop(0, rgba(col, dark() ? 0.55 : 0.4)); halo.addColorStop(1, rgba(col, 0));
                        g.fillStyle = halo; g.fillRect(0, 0, 24, 24);
                        const r = g.createRadialGradient(12, 12, 0, 12, 12, 11);
                        r.addColorStop(0, dark() ? '#ffffff' : rgba(core, 1)); r.addColorStop(0.35, rgba(col, 1)); r.addColorStop(1, rgba(col, 0.6));
                        g.fillStyle = r; g.fill(GLINT);
                    }));
                }
            });
            sprites = { main, alt };
        }

        const rnd = (a, b) => a + Math.random() * (b - a);
        function spawn(p, anywhere) {
            const z = rnd(0.35, 1);          // depth: far particles are smaller, slower and fainter
            p.z = z; p.si = (Math.random() * 3) | 0; p.alt = false;
            p.rot = rnd(0, Math.PI * 2); p.flip = rnd(0, Math.PI * 2); p.seed = rnd(0, 1000);
            p.px = 0; p.py = 0; p.flipSpeed = 0; p.vr = 0; p.tw = 0;
            if (kind === 'petal') {
                p.alt = Math.random() < 0.22;
                p.size = (p.alt ? rnd(20, 32) : rnd(14, 26)) * (0.45 + z * 0.55); p.vy = rnd(0.35, 0.8) * z; p.vx = rnd(0.15, 0.5) * z;
                p.vr = p.alt ? rnd(-0.03, 0.03) : rnd(-0.015, 0.015); p.flipSpeed = p.alt ? rnd(0.008, 0.02) : rnd(0.02, 0.05); p.sway = rnd(8, 22); p.swayF = rnd(0.012, 0.025); p.alpha = 0.5 + z * 0.45;
            } else if (kind === 'leaf') {
                p.alt = Math.random() < 0.4;
                p.size = rnd(20, 34) * (0.45 + z * 0.55); p.vy = rnd(0.55, 1.2) * z; p.vx = rnd(-0.2, 0.2);
                p.vr = rnd(-0.03, 0.03); p.flipSpeed = rnd(0.01, 0.04); p.sway = rnd(14, 34); p.swayF = rnd(0.008, 0.018); p.alpha = 0.55 + z * 0.4;
            } else if (kind === 'snow') {
                p.alt = z > 0.7 && Math.random() < 0.4;
                p.size = p.alt ? rnd(15, 26) * z : rnd(4, 10) * z; p.vy = rnd(0.45, 1.05) * z * 1.3; p.vx = 0;
                p.vr = p.alt ? rnd(-0.01, 0.01) : 0; p.sway = rnd(4, 14); p.swayF = rnd(0.006, 0.014); p.alpha = 0.45 + z * 0.55;
            } else {
                p.alt = Math.random() < 0.35;
                p.size = (p.alt ? rnd(16, 30) : rnd(10, 26)) * z; p.vy = -rnd(0.08, 0.32) * z; p.vx = rnd(-0.12, 0.12);
                p.sway = rnd(10, 30); p.swayF = rnd(0.004, 0.012); p.alpha = 0.45 + z * 0.55; p.tw = rnd(0.02, 0.06);
                if (p.alt) { p.vr = rnd(-0.006, 0.006); p.vy *= 0.5; p.alpha = 0.75 + z * 0.25; }
            }
            const m = p.size + 30;
            p.x = rnd(0, W);
            p.y = anywhere ? rnd(0, H) : (kind === 'mote' ? H + m * 0.5 : -m * 0.5);
            return p;
        }

        function target() {
            const [lo, hi] = LIMITS[kind];
            let n = Math.max(lo, Math.min(hi, Math.round((W * H) / DENSITY[kind])));
            if (lowPower) n = Math.round(n * 0.5);
            return n;
        }
        function populate() {
            buildSprites();
            list = Array.from({ length: target() }, () => spawn({}, true));
        }

        function draw(f) {
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = kind === 'mote' && dark() ? 'lighter' : 'source-over';
            const shift = scrollShift; scrollShift = 0;
            const R = 110, R2 = R * R, decay = Math.pow(0.92, f);
            for (let i = 0; i < list.length; i++) {
                const p = list[i];
                p.rot += p.vr * f; p.flip += p.flipSpeed * f;
                p.x += (p.vx + wind * p.z) * f;
                p.y += p.vy * f - shift * 0.3 * p.z;
                const sx = p.x + Math.sin(t * p.swayF + p.seed) * p.sway;
                if (pointer.on) {
                    const dx = sx + p.px - pointer.x, dy = p.y + p.py - pointer.y, d2 = dx * dx + dy * dy;
                    if (d2 < R2) {
                        const d = Math.sqrt(d2) || 1, push = (1 - d / R) * 3.2 * f;
                        p.px += (dx / d) * push; p.py += (dy / d) * push;
                        p.vr += (dx > 0 ? 0.002 : -0.002) * f;
                    }
                }
                p.px *= decay; p.py *= decay;
                if (p.vr > 0.05 || p.vr < -0.05) p.vr *= 0.98;
                const m = p.size + 30;
                if (p.y > H + m) { if (kind === 'mote') p.y -= H + 2 * m; else spawn(p, false); }
                else if (p.y < -m) { if (kind === 'mote') spawn(p, false); else p.y += H + 2 * m; }
                if (p.x < -m - 40) p.x += W + 2 * m + 80; else if (p.x > W + m + 40) p.x -= W + 2 * m + 80;

                const pool = p.alt && sprites.alt.length ? sprites.alt : sprites.main;
                const img = pool[p.si % pool.length];
                if (!img) continue;
                let a = p.alpha, size = p.size;
                if (p.tw) {
                    const wave = 0.5 + 0.5 * Math.sin(t * p.tw + p.seed);
                    if (kind === 'mote' && p.alt) size *= 0.35 + 0.65 * wave * wave;   // glints flare and fade
                    else a *= 0.45 + 0.55 * wave;
                }
                let fy = 1;
                if (p.flipSpeed) { fy = Math.cos(p.flip); if (Math.abs(fy) < 0.12) fy = fy < 0 ? -0.12 : 0.12; }
                const c = Math.cos(p.rot) * dpr, s = Math.sin(p.rot) * dpr, half = size / 2;
                ctx.setTransform(c, s, -s * fy, c * fy, (sx + p.px) * dpr, (p.y + p.py) * dpr);
                ctx.globalAlpha = a;
                ctx.drawImage(img, -half, -half, size, size);
            }
            ctx.globalAlpha = 1;
        }

        function gust() {
            if (kind === 'leaf') return Math.sin(t * 0.004) * 0.7 + Math.sin(t * 0.0117 + 1) * 0.35;
            if (kind === 'petal') return 0.2 + Math.sin(t * 0.003) * 0.3;
            if (kind === 'snow') return Math.sin(t * 0.002) * 0.3;
            return Math.sin(t * 0.0015) * 0.12;
        }
        function frame(now) {
            raf = requestAnimationFrame(frame);
            const f = Math.min(3, (now - last) / 16.667 || 1);
            last = now; t += f;
            scrollWind *= Math.pow(0.95, f);
            wind += (gust() + scrollWind - wind) * 0.04 * f;
            draw(f);
        }
        function start() {
            if (raf || reduce || document.hidden) return;
            last = performance.now();
            raf = requestAnimationFrame(frame);
        }
        function stop() { cancelAnimationFrame(raf); raf = 0; }
        function still() { stop(); scrollShift = 0; draw(0); }   // one calm frame for reduced motion

        function resize() {
            const w = window.innerWidth, h = window.innerHeight;
            const nd = Math.min(window.devicePixelRatio || 1, 2);
            const rebuild = !W || Math.abs(w - W) > 60 || nd !== dpr;   // a phone's address bar only changes height
            W = w; H = h; dpr = nd;
            canvas.width = Math.round(W * dpr);
            canvas.height = Math.round(H * dpr);
            if (rebuild) populate();
            if (reduce) still();
        }

        let fadeTimer = 0;
        function setSeason(season, animate) {
            const next = KIND[season] || 'leaf';
            if (next === kind && list.length) return;
            clearTimeout(fadeTimer);
            if (!animate || !list.length) { kind = next; if (W) populate(); if (reduce) still(); return; }
            canvas.classList.add('is-fading');
            fadeTimer = setTimeout(() => {
                kind = next; populate();
                if (reduce) still();
                canvas.classList.remove('is-fading');
            }, 600);
        }
        function recolor() { buildSprites(); if (reduce) still(); }
        function motion(on) { if (on) start(); else still(); }

        window.addEventListener('resize', resize);
        window.addEventListener('scroll', () => {
            const y = window.scrollY, d = y - lastScroll;
            lastScroll = y;
            scrollShift += d;
            scrollWind = Math.max(-4, Math.min(4, scrollWind + d * 0.012));
        }, { passive: true });
        if (finePointer) {
            window.addEventListener('pointermove', (e) => { pointer.x = e.clientX; pointer.y = e.clientY; pointer.on = true; }, { passive: true });
            document.addEventListener('mouseout', (e) => { if (!e.relatedTarget) pointer.on = false; });
        }
        document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else start(); });

        kind = KIND[current()] || 'leaf';
        resize();
        start();
        return { setSeason, recolor, motion };
    })();

    /* ---- applying a season to everything that shows it ---- */
    const live = document.createElement('div');
    live.className = 'sr-only';
    live.setAttribute('aria-live', 'polite');

    function themeColor() {
        const meta = document.querySelector('meta[name="theme-color"]');
        const paper = getComputedStyle(root).getPropertyValue('--paper').trim();
        if (meta && paper) meta.setAttribute('content', paper);
    }

    function applySeason(season, animate) {
        root.setAttribute('data-season', season);
        setGlyphs(season);
        const ring = document.getElementById('ring-text');
        if (ring) ring.textContent = `${LABEL[season]} ${seasonYear(season)} edition • Data engineering • Software engineering •`;
        const note = document.getElementById('season-note');
        if (note) {
            note.innerHTML = glyph(season) + '<span></span>';
            note.lastChild.textContent = info.chosen
                ? `${LABEL[season]} edition (preview). The page normally follows the seasons.`
                : `${LABEL[season]} edition. This page changes with the seasons.`;
        }
        const back = document.getElementById('tape-back');
        if (back && back.childElementCount) fillTape(back, seasonWords(season), season);
        updatePicker();
        themeColor();
        Particles.setSeason(season, animate);
    }

    /* ---- the picker ---- */
    const picker = document.getElementById('season-picker');
    const button = document.getElementById('season-btn');
    const menu = document.getElementById('season-menu');

    function updatePicker() {
        if (!menu) return;
        const value = info.chosen || 'auto';
        menu.querySelectorAll('.season-option').forEach((o) => o.setAttribute('aria-checked', String(o.dataset.value === value)));
        const autoNote = menu.querySelector('[data-value="auto"] small');
        if (autoNote) autoNote.textContent = `Now: ${LABEL[info.auto]} (${info.south ? 'southern' : 'northern'} hemisphere)`;
        if (button) button.setAttribute('aria-label', `Season: ${LABEL[current()]}${info.chosen ? '' : ', following the calendar'}. Change season`);
    }

    function buildPicker() {
        if (!picker || !button || !menu) return;
        menu.innerHTML = '<div class="season-menu-title" aria-hidden="true">Season</div>' +
            '<button type="button" class="season-option" role="menuitemradio" data-value="auto"><span class="auto-dot" aria-hidden="true">A</span><span>Follow the calendar<small></small></span></button>' +
            ORDER.map((s) => `<button type="button" class="season-option" role="menuitemradio" data-value="${s}" data-season="${s}">${glyph(s)}<span>${LABEL[s]}<small>${MONTHS[s]}</small></span></button>`).join('');
        // these icons show their own season, not the current one
        menu.querySelectorAll('use[data-season-glyph]').forEach((u) => u.removeAttribute('data-season-glyph'));
        picker.hidden = false;

        const options = () => Array.from(menu.querySelectorAll('.season-option'));
        const open = (focusChecked) => {
            menu.classList.add('open');
            button.setAttribute('aria-expanded', 'true');
            if (focusChecked) (menu.querySelector('[aria-checked="true"]') || options()[0]).focus();
        };
        const close = (focusButton) => {
            menu.classList.remove('open');
            button.setAttribute('aria-expanded', 'false');
            if (focusButton) button.focus();
        };
        button.addEventListener('click', () => (menu.classList.contains('open') ? close(false) : open(true)));
        button.addEventListener('keydown', (e) => { if (e.key === 'ArrowDown') { e.preventDefault(); open(true); } });
        menu.addEventListener('keydown', (e) => {
            const list = options();
            const i = list.indexOf(document.activeElement);
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                e.preventDefault();
                list[(i + (e.key === 'ArrowDown' ? 1 : -1) + list.length) % list.length].focus();
            } else if (e.key === 'Home' || e.key === 'End') {
                e.preventDefault();
                list[e.key === 'Home' ? 0 : list.length - 1].focus();
            } else if (e.key === 'Escape' || e.key === 'Tab') {
                close(e.key === 'Escape');
            }
        });
        document.addEventListener('click', (e) => { if (!picker.contains(e.target)) close(false); });
        menu.addEventListener('click', (e) => {
            const opt = e.target.closest('.season-option');
            if (!opt) return;
            choose(opt.dataset.value);
            close(true);
        });
    }

    function choose(value) {
        info.chosen = value === 'auto' ? null : value;
        try {
            if (info.chosen) sessionStorage.setItem('portfolio-season', info.chosen);
            else sessionStorage.removeItem('portfolio-season');
            const url = new URL(location.href);
            if (url.searchParams.has('season')) { url.searchParams.delete('season'); history.replaceState(null, '', url); }
        } catch (e) { /* private mode: the choice just lasts until reload */ }
        const next = info.chosen || info.auto;
        live.textContent = `${LABEL[next]} theme`;
        if (next === current()) { applySeason(next, false); return; }
        transitionTo(next);
    }

    /** A circle of the new season's colour grows from the picker, the page changes underneath, the circle fades. */
    function transitionTo(season) {
        if (reduce) { applySeason(season, false); return; }
        const r = (button || document.body).getBoundingClientRect();
        const x = r.left + r.width / 2, y = r.top + r.height / 2;
        const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y)) + 24;
        const wipe = document.createElement('div');
        wipe.className = 'season-wipe';
        wipe.setAttribute('data-season', season);
        wipe.setAttribute('aria-hidden', 'true');
        wipe.style.setProperty('--wx', x + 'px');
        wipe.style.setProperty('--wy', y + 'px');
        wipe.style.setProperty('--wr', radius + 'px');
        wipe.innerHTML = `<svg viewBox="0 0 24 24"><use href="#glyph-${season}"></use></svg><span></span>`;
        wipe.lastChild.textContent = LABEL[season];
        document.body.appendChild(wipe);
        wipe.getBoundingClientRect();
        requestAnimationFrame(() => wipe.classList.add('grow'));
        setTimeout(() => {
            applySeason(season, true);
            setTimeout(() => {
                wipe.classList.add('fade');
                setTimeout(() => wipe.remove(), 600);
            }, 380);
        }, 820);
    }

    /* ---- start ---- */
    function init() {
        injectGlyphs();
        document.body.appendChild(live);
        initKineticTitle();
        initSectionHeaders();
        buildPicker();
        buildTapes(current());
        applySeason(current(), false);

        // re-measure the tapes once the web fonts arrive, and when the width changes a lot
        let width = window.innerWidth, timer = 0;
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => buildTapes(current()));
        window.addEventListener('resize', () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                if (Math.abs(window.innerWidth - width) < 80) return;
                width = window.innerWidth;
                buildTapes(current());
            }, 250);
        });

        // light/dark changes the particle colours and the browser bar
        new MutationObserver(() => { Particles.recolor(); themeColor(); }).observe(root, { attributes: true, attributeFilter: ['data-theme'] });
        reduceQuery.addEventListener('change', (e) => { reduce = e.matches; Particles.motion(!reduce); });
    }

    // main.js renders the page on DOMContentLoaded; this file loads after it, so it runs second
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
