/* ==========================================================================
   Praise Ojerinola Portfolio - Main Script Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Canvas Particle Background
    initCanvasBg();

    // 2. Load Configuration Data & Render Components
    renderProfileData();
    renderEducation();
    renderCertifications();
    renderSkills('all');
    renderProjects('all');
    renderExperience();

    // 3. Setup Navigation & Interaction Listeners
    initScrollListeners();
    initThemeToggle();
    initFilterTabs();
    initContactForm();
    initModal();
    initTypingEffect();
});

/* --------------------------------------------------------------------------
   1. Interactive Canvas Particle Background
   -------------------------------------------------------------------------- */
function initCanvasBg() {
    const canvas = document.getElementById('canvas-bg');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = Math.min(Math.floor(width / 18), 65);

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.6;
            this.vy = (Math.random() - 0.5) * 0.6;
            this.radius = Math.random() * 2 + 1;
            this.color = Math.random() > 0.5 ? '#00f2fe' : '#7f53ac';
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    let mouseX = -1000;
    let mouseY = -1000;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            const p1 = particles[i];
            p1.update();
            p1.draw();

            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(0, 242, 254, ${1 - dist / 120 * 0.85})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }

            const mdx = p1.x - mouseX;
            const mdy = p1.y - mouseY;
            const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
            if (mdist < 140) {
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(mouseX, mouseY);
                ctx.strokeStyle = `rgba(127, 83, 172, ${1 - mdist / 140 * 0.9})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
        requestAnimationFrame(animate);
    }
    animate();
}

/* --------------------------------------------------------------------------
   2. Render Dynamic Profile Data
   -------------------------------------------------------------------------- */
function renderProfileData() {
    const p = portfolioConfig.profile;

    const nameEl = document.getElementById('profile-name');
    const taglineEl = document.getElementById('profile-tagline');
    const bioEl = document.getElementById('profile-bio');
    const locationEl = document.getElementById('profile-location');
    const avatarEl = document.getElementById('profile-avatar');
    const emailText = document.getElementById('email-text');
    const statusText = document.getElementById('status-text');

    if (nameEl) nameEl.textContent = p.name;
    if (taglineEl) taglineEl.textContent = p.tagline;
    if (bioEl) bioEl.textContent = p.bio;
    if (locationEl) locationEl.textContent = p.location;
    if (avatarEl) avatarEl.src = p.avatar;
    if (emailText) emailText.textContent = p.socials.email;
    if (statusText) statusText.textContent = p.status;

    const statsContainer = document.getElementById('hero-stats-container');
    if (statsContainer) {
        statsContainer.innerHTML = p.stats.map(s => `
            <div class="stat-item">
                <div class="stat-header">
                    <i class="${s.icon || 'fas fa-star'} stat-icon"></i>
                    <span class="stat-number">${s.value}</span>
                </div>
                <span class="stat-label">${s.label}</span>
            </div>
        `).join('');
    }
}

/* --------------------------------------------------------------------------
   3. Typing Effect in Hero
   -------------------------------------------------------------------------- */
function initTypingEffect() {
    const typingEl = document.getElementById('typing-text');
    if (!typingEl) return;

    const titles = [
        "AWS Certified Data Engineer",
        "Software Engineering Master's Graduate",
        "Full-Stack & Cloud Developer",
        "Data Science & AI Specialist"
    ];
    let titleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function type() {
        const currentTitle = titles[titleIdx];
        if (isDeleting) {
            typingEl.textContent = currentTitle.substring(0, charIdx - 1);
            charIdx--;
        } else {
            typingEl.textContent = currentTitle.substring(0, charIdx + 1);
            charIdx++;
        }

        let speed = isDeleting ? 40 : 80;

        if (!isDeleting && charIdx === currentTitle.length) {
            speed = 2200;
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            titleIdx = (titleIdx + 1) % titles.length;
            speed = 400;
        }

        setTimeout(type, speed);
    }
    type();
}

/* --------------------------------------------------------------------------
   4. Render Education & Certifications
   -------------------------------------------------------------------------- */
function renderEducation() {
    const container = document.getElementById('education-grid');
    if (!container) return;

    container.innerHTML = portfolioConfig.education.map(item => `
        <div class="about-card" style="padding: 28px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px; flex-wrap: wrap; gap: 8px;">
                <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary);">${item.degree}</h4>
                <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent-primary); background: rgba(0, 242, 254, 0.1); padding: 4px 10px; border-radius: 99px;">${item.period}</span>
            </div>
            <div style="color: var(--accent-secondary); font-weight: 600; font-size: 0.95rem; margin-bottom: 12px;">${item.institution}</div>
            <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6;">${item.details}</p>
        </div>
    `).join('');
}

function renderCertifications() {
    const container = document.getElementById('certifications-grid');
    if (!container) return;

    container.innerHTML = portfolioConfig.certifications.map(cert => `
        <div class="skill-card" style="padding: 20px;">
            <div class="skill-header">
                <i class="fas fa-certificate skill-icon" style="color: var(--accent-primary);"></i>
                <div>
                    <div style="font-weight: 700; font-size: 0.95rem;">${cert.name}</div>
                    <div style="font-size: 0.8rem; color: var(--text-muted);">${cert.issuer} • ${cert.date}</div>
                </div>
            </div>
            <a href="${cert.link}" target="_blank" class="project-link-btn" style="font-size: 0.8rem; margin-top: 6px;">
                Verify Badge <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    `).join('');
}

/* --------------------------------------------------------------------------
   5. Render Skills
   -------------------------------------------------------------------------- */
function renderSkills(categoryFilter = 'all') {
    const container = document.getElementById('skills-grid');
    if (!container) return;

    const filtered = categoryFilter === 'all'
        ? portfolioConfig.skills
        : portfolioConfig.skills.filter(s => s.category === categoryFilter);

    container.innerHTML = filtered.map(skill => `
        <div class="skill-card">
            <div class="skill-header">
                <i class="${skill.icon} skill-icon"></i>
                <span class="skill-name">${skill.name}</span>
            </div>
            <div class="skill-bar-wrapper">
                <div class="skill-info">
                    <span>Proficiency</span>
                    <span>${skill.level}%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-progress" style="width: ${skill.level}%"></div>
                </div>
            </div>
            ${skill.details ? `
            <div style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 12px; line-height: 1.45; font-family: var(--font-mono); background: rgba(255, 255, 255, 0.03); padding: 8px 12px; border-radius: 6px; border: 1px solid rgba(255, 255, 255, 0.05);">
                <i class="fas fa-microchip" style="color: var(--accent-primary); margin-right: 6px;"></i> ${skill.details}
            </div>` : ''}
        </div>
    `).join('');
}

/* --------------------------------------------------------------------------
   6. Render Projects & Category Filter
   -------------------------------------------------------------------------- */
function renderProjects(categoryFilter = 'all') {
    const container = document.getElementById('projects-grid');
    if (!container) return;

    const filtered = categoryFilter === 'all'
        ? portfolioConfig.projects
        : portfolioConfig.projects.filter(p => p.category === categoryFilter);

    container.innerHTML = filtered.map(project => {
        const hasGithub = project.githubUrl && project.githubUrl.trim() !== "";
        const hasLive = project.liveUrl && project.liveUrl.trim() !== "" && project.liveUrl !== project.githubUrl;
        const mainLink = hasGithub ? project.githubUrl : (project.liveUrl || "#");

        return `
        <div class="project-card">
            <div class="project-image-wrapper">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-overlay">
                    <button class="overlay-btn view-project-btn" data-id="${project.id}" title="View Details">
                        <i class="fas fa-expand-alt"></i>
                    </button>
                    ${hasGithub ? `
                    <a href="${project.githubUrl}" target="_blank" class="overlay-btn" title="View Source Code">
                        <i class="fab fa-github"></i>
                    </a>` : ''}
                    ${hasLive ? `
                    <a href="${project.liveUrl}" target="_blank" class="overlay-btn" title="Visit Live Site">
                        <i class="fas fa-external-link-alt"></i>
                    </a>` : ''}
                </div>
            </div>
            <div class="project-content">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-wrap: wrap; gap: 6px;">
                    <span style="font-size: 0.78rem; font-family: var(--font-mono); color: var(--accent-primary); background: rgba(0, 242, 254, 0.08); padding: 3px 8px; border-radius: 4px; font-weight: 600;">
                        ${project.role || 'Developer'}
                    </span>
                    <span style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">
                        ${project.period || ''}
                    </span>
                </div>
                <div class="project-tags">
                    ${project.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-summary">${project.summary}</p>
                <div class="project-footer">
                    <button class="project-link-btn view-project-btn" data-id="${project.id}">
                        Details & Architecture <i class="fas fa-arrow-right"></i>
                    </button>
                    ${hasGithub ? `
                    <a href="${project.githubUrl}" target="_blank" class="project-link-btn">
                        Repository <i class="fab fa-github"></i>
                    </a>` : (hasLive ? `
                    <a href="${project.liveUrl}" target="_blank" class="project-link-btn">
                        Visit Site <i class="fas fa-external-link-alt"></i>
                    </a>` : '')}
                </div>
            </div>
        </div>
        `;
    }).join('');

    document.querySelectorAll('.view-project-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const projId = btn.getAttribute('data-id');
            openProjectModal(projId);
        });
    });
}

function initFilterTabs() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetCategory = btn.getAttribute('data-filter');
            const parent = btn.parentElement;
            parent.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (parent.id === 'skills-filter-container') {
                renderSkills(targetCategory);
            } else {
                renderProjects(targetCategory);
            }
        });
    });
}

/* --------------------------------------------------------------------------
   7. Modal Window Trigger
   -------------------------------------------------------------------------- */
function initModal() {
    const modalOverlay = document.getElementById('project-modal');
    const closeBtn = document.getElementById('modal-close-btn');

    if (closeBtn && modalOverlay) {
        closeBtn.addEventListener('click', () => {
            modalOverlay.classList.remove('active');
        });
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
            }
        });
    }
}

function openProjectModal(projectId) {
    const project = portfolioConfig.projects.find(p => p.id === projectId);
    if (!project) return;

    const modalOverlay = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body-content');

    if (!modalOverlay || !modalBody) return;

    const hasGithub = project.githubUrl && project.githubUrl.trim() !== "";
    const hasLive = project.liveUrl && project.liveUrl.trim() !== "" && project.liveUrl !== project.githubUrl;

    modalBody.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="modal-image">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
            <span style="font-size: 0.85rem; font-family: var(--font-mono); color: var(--accent-primary); background: rgba(0, 242, 254, 0.1); padding: 4px 10px; border-radius: 6px; font-weight: 600;">
                <i class="fas fa-user-tag" style="margin-right: 6px;"></i> ${project.role || 'Developer'}
            </span>
            <span style="font-size: 0.8rem; color: var(--text-muted); font-family: var(--font-mono);">
                <i class="fas fa-calendar-alt" style="margin-right: 4px;"></i> ${project.period || ''} • ${project.location || 'Salford, UK'}
            </span>
        </div>
        <div class="project-tags" style="margin-bottom: 12px;">
            ${project.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        <h2 style="font-size: 1.8rem; margin-bottom: 12px;">${project.title}</h2>
        <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 24px;">${project.fullDescription}</p>

        <div style="margin-bottom: 24px;">
            <h4 style="margin-bottom: 12px; color: var(--accent-primary);">Key Architectural Features</h4>
            <ul style="list-style: none;">
                ${project.keyFeatures.map(f => `
                    <li style="padding-left: 20px; position: relative; margin-bottom: 8px; color: var(--text-secondary);">
                        <span style="position: absolute; left:0; color: var(--accent-primary);">✓</span> ${f}
                    </li>
                `).join('')}
            </ul>
        </div>

        <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 28px;">
            ${project.metrics.map(m => `
                <div style="padding: 8px 16px; background: rgba(0, 242, 254, 0.08); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 8px; font-size: 0.85rem; font-weight: 600; color: var(--accent-primary);">
                    ⚡ ${m}
                </div>
            `).join('')}
        </div>

        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
            ${hasGithub ? `
            <a href="${project.githubUrl}" target="_blank" class="btn btn-primary">
                <i class="fab fa-github"></i> View GitHub Repository
            </a>` : ''}
            ${hasLive ? `
            <a href="${project.liveUrl}" target="_blank" class="btn ${hasGithub ? 'btn-secondary' : 'btn-primary'}">
                <i class="fas fa-external-link-alt"></i> Visit Live Website
            </a>` : ''}
        </div>
    `;

    modalOverlay.classList.add('active');
}

/* --------------------------------------------------------------------------
   8. Render Experience
   -------------------------------------------------------------------------- */
function renderExperience() {
    const container = document.getElementById('experience-timeline');
    if (!container) return;

    container.innerHTML = portfolioConfig.experience.map(item => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-card">
                <div class="timeline-header">
                    <div>
                        <div class="timeline-role">${item.role}</div>
                        <div class="timeline-company">${item.company} • ${item.location}</div>
                    </div>
                    <div class="timeline-period">${item.period}</div>
                </div>
                <p class="timeline-desc">${item.description}</p>
                <ul class="timeline-achievements">
                    ${item.achievements.map(a => `<li>${a}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

/* --------------------------------------------------------------------------
   9. Navigation, Scroll & Theme Switcher
   -------------------------------------------------------------------------- */
function initScrollListeners() {
    const navbar = document.getElementById('navbar');
    const progressBar = document.getElementById('scroll-progress');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolledPct = (window.scrollY / windowHeight) * 100;
        if (progressBar) progressBar.style.width = `${scrolledPct}%`;

        const sections = document.querySelectorAll('section[id]');
        sections.forEach(sec => {
            const top = sec.offsetTop - 100;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');
            if (window.scrollY >= top && window.scrollY < top + height) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        document.querySelectorAll('.nav-link').forEach(l => {
            l.addEventListener('click', () => navLinks.classList.remove('active'));
        });
    }
}

function initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (!toggleBtn) return;

    const currentTheme = localStorage.getItem('portfolio-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    toggleBtn.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);
        updateThemeIcon(theme);
    });
}

function updateThemeIcon(theme) {
    const icon = document.getElementById('theme-icon');
    if (!icon) return;
    if (theme === 'light') {
        icon.className = 'fas fa-moon';
    } else {
        icon.className = 'fas fa-sun';
    }
}

/* --------------------------------------------------------------------------
   10. Contact Form Validation & Toast Notification
   -------------------------------------------------------------------------- */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const copyEmailBtn = document.getElementById('copy-email-btn');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;

            if (name && email) {
                showToast(`Thank you, ${name}! Your message has been sent successfully.`);
                form.reset();
            }
        });
    }

    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            const email = portfolioConfig.profile.socials.email;
            navigator.clipboard.writeText(email).then(() => {
                showToast(`Copied ${email} to clipboard!`);
            });
        });
    }
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');

    if (toast && toastMsg) {
        toastMsg.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }
}
