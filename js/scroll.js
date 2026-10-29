/* ==========================================================================
   Scroll-triggered page: content reveals as it enters the screen, the hero drifts with
   the scroll, numbers count up, the experience line draws itself and a side rail shows
   where you are. Everything stays visible (no motion) for people who ask for reduced
   motion, and if this file fails to run.
   ========================================================================== */
(function () {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return;

    const root = document.documentElement;

    // [selector, direction]. Direction "side" alternates left and right down the page.
    const REVEALS = [
        ['.section-header', 'up'],
        ['.about-card', 'up'],
        ['.highlight-item', 'right'],
        ['.education-card', 'up'],
        ['#certifications-grid .skill-card', 'scale'],
        ['.skills-filter', 'up'],
        ['#skills-grid .skill-card', 'scale'],
        ['.project-card', 'up'],
        ['.timeline-item', 'side'],
        ['.contact-info-card', 'left'],
        ['.contact-form', 'right']
    ];

    const reveal = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            reveal.unobserve(el);
            el.classList.add('in');
            // once it has settled, hand the element back to its own hover and transition styles
            const delay = parseFloat(getComputedStyle(el).getPropertyValue('--fx-delay')) || 0;
            setTimeout(() => {
                el.classList.remove('fx', 'in');
                delete el.dataset.fx;
            }, 900 + delay);
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    function register(scope) {
        REVEALS.forEach(([selector, kind]) => {
            const found = (scope || document).querySelectorAll(selector);
            found.forEach((el, index) => {
                if (el.dataset.fx || el.classList.contains('fx')) return;
                let direction = kind;
                if (kind === 'side') direction = index % 2 === 0 ? 'left' : 'right';
                const siblings = Array.from(el.parentElement.children).filter((c) => c.matches(selector));
                el.dataset.fx = direction;
                el.style.setProperty('--fx-delay', Math.min(siblings.indexOf(el), 8) * 70 + 'ms');
                el.classList.add('fx');
                reveal.observe(el);
            });
        });
    }

    /* ---- numbers count up when they come into view ---- */
    const counter = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            counter.unobserve(el);
            const match = /^(\d+)(.*)$/.exec(el.dataset.count || '');
            if (!match) return;
            const target = parseInt(match[1], 10);
            const start = performance.now();
            const step = (now) => {
                const t = Math.min(1, (now - start) / 1300);
                el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3))) + match[2];
                if (t < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        });
    }, { threshold: 0.6 });

    function registerCounters() {
        document.querySelectorAll('.stat-number').forEach((el) => {
            if (el.dataset.count || !/^\d+/.test(el.textContent.trim())) return;
            el.dataset.count = el.textContent.trim();
            el.textContent = '0' + el.dataset.count.replace(/^\d+/, '');
            counter.observe(el);
        });
    }

    /* ---- side rail: where am I on the page ---- */
    const LABELS = { hero: 'Intro', about: 'About', education: 'Education', certifications: 'Credentials', skills: 'Skills', projects: 'Projects', experience: 'Experience', contact: 'Contact' };
    let rail = null;
    let railDots = [];
    let sections = [];

    function buildRail() {
        sections = Array.from(document.querySelectorAll('main section[id]'));
        if (!sections.length) return;
        rail = document.createElement('nav');
        rail.className = 'section-rail';
        rail.setAttribute('aria-label', 'Page sections');
        railDots = sections.map((section) => {
            const dot = document.createElement('a');
            dot.href = '#' + section.id;
            dot.className = 'rail-dot';
            dot.setAttribute('aria-label', LABELS[section.id] || section.id);
            dot.dataset.label = LABELS[section.id] || section.id;
            rail.appendChild(dot);
            return dot;
        });
        document.body.appendChild(rail);
    }

    function buildCue() {
        const hero = document.getElementById('hero');
        if (!hero) return null;
        const cue = document.createElement('a');
        cue.href = '#about';
        cue.className = 'scroll-cue';
        cue.setAttribute('aria-label', 'Scroll to the next section');
        cue.innerHTML = '<span class="scroll-cue-mouse"><span></span></span><span class="scroll-cue-text">Scroll</span>';
        hero.appendChild(cue);
        return cue;
    }

    /* ---- one scroll handler: parallax, timeline, rail, cue ---- */
    let cue = null;
    let ticking = false;

    function onScroll() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            ticking = false;
            const y = window.scrollY;
            const h = window.innerHeight;
            root.style.setProperty('--sy', String(Math.min(y, h * 1.5)));

            const timeline = document.getElementById('experience-timeline');
            if (timeline) {
                const rect = timeline.getBoundingClientRect();
                const progress = Math.min(1, Math.max(0, (h * 0.7 - rect.top) / Math.max(rect.height, 1)));
                timeline.style.setProperty('--tl', progress.toFixed(3));
            }

            if (railDots.length) {
                let current = 0;
                sections.forEach((section, i) => { if (section.getBoundingClientRect().top <= h * 0.45) current = i; });
                railDots.forEach((dot, i) => dot.classList.toggle('active', i === current));
                rail.classList.toggle('visible', y > h * 0.4);
            }
            if (cue) cue.classList.toggle('gone', y > 80);
        });
    }

    function init() {
        root.classList.add('scroll-fx');
        register();
        registerCounters();
        buildRail();
        cue = buildCue();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        onScroll();

        // filters and the CV overlay re-render these lists: reveal the new cards too
        ['skills-grid', 'projects-grid'].forEach((id) => {
            const target = document.getElementById(id);
            if (target) new MutationObserver(() => register(target)).observe(target, { childList: true });
        });
    }

    // main.js renders the page on DOMContentLoaded; this file loads after it, so its listener runs second
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
