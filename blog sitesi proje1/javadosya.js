
//  Navbar - Mobil Menü Toggle (Hamburger ↔ X)
// =============================================
const toggle = document.getElementById('navbar-toggle');
const links = document.getElementById('navbar-links');

if (toggle && links) {
    toggle.addEventListener('click', () => {
        const isOpen = links.classList.toggle('open');
        toggle.classList.toggle('open');
        toggle.setAttribute('aria-expanded', isOpen.toString());
    });
}


//  Tema Toggle (Gece / Gündüz)
// =============================================
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    const savedTheme = localStorage.getItem('theme') || 'dark';

    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', () => {
        document.body.classList.toggle('light-mode');
        const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
    });
}



//  Hero - Fareyi Takip Eden Glow Efekti
// =============================================
const heroSection = document.getElementById('hero');
const heroGlow = document.getElementById('hero-glow');

if (heroSection && heroGlow) {
    heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        heroGlow.style.left = x + 'px';
        heroGlow.style.top = y + 'px';
    });

    heroSection.addEventListener('mouseleave', () => {
        heroGlow.style.left = '50%';
        heroGlow.style.top = '50%';
    });
}



//  İstatistik Sayaç Animasyonu
// =============================================
const statNumbers = document.querySelectorAll('.stat-number');

if (statNumbers.length > 0) {
    const animateCount = (el) => {
        const target = parseInt(el.getAttribute('data-target'));
        const duration = 1500;
        const start = performance.now();

        const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            el.textContent = Math.floor(eased * target);
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = target;
            }
        };
        requestAnimationFrame(step);
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                statNumbers.forEach(animateCount);
                statsObserver.disconnect();
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.getElementById('stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
}



//  Beceri Çubukları (Skill Bars) Yönetimi
// =============================================
const skillProgressBars = document.querySelectorAll('.skill-progress');

if (skillProgressBars.length > 0) {
    skillProgressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        if (progress) {
            bar.style.setProperty('--target', progress + '%');
            bar.style.width = progress + '%';
        }
    });
}


