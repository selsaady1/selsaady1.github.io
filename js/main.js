// ===== MAIN JS - DARK CINEMATIC PORTFOLIO =====

document.addEventListener('DOMContentLoaded', function() {
    initLoadingScreen();
    initNavigation();
    initAnimations();
    initBackToTop();
    initImageHandling();
    initAccessibility();
    initProjectNavigation();
});

// ===== LOADING SCREEN =====
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                triggerInitialAnimations();
            }, 400);
        }, 600);
    }
}

// ===== NAVIGATION =====
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky navbar
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 20) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        });
    }

    // Mobile toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
            }
        });
    });
}

// ===== PROJECT NAVIGATION =====
function initProjectNavigation() {
    document.querySelectorAll('.project-nav-link').forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const y = target.getBoundingClientRect().top + window.pageYOffset - 80;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }
        });
    });
}

// ===== ANIMATIONS =====
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .section-title');
    animatedElements.forEach(el => observer.observe(el));

    // Stagger project items on scroll
    const projectItems = document.querySelectorAll('.project-item');
    const staggerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 80);
                staggerObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    projectItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(16px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        staggerObserver.observe(item);
    });
}

function triggerInitialAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .section-title');
    animatedElements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('visible');
        }
    });
}

// ===== BACK TO TOP =====
function initBackToTop() {
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// ===== IMAGE HANDLING =====
function initImageHandling() {
    const images = document.querySelectorAll('.project-image');

    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });

        img.addEventListener('error', function() {
            this.style.display = 'none';
        });

        if (img.complete && img.naturalHeight > 0) {
            img.classList.add('loaded');
        }
    });

    window.addEventListener('error', function(e) {
        if (e.target && e.target.tagName === 'IMG') {
            e.target.style.display = 'none';
        }
    }, true);
}

// ===== ACCESSIBILITY =====
function initAccessibility() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = 'position:absolute;top:-40px;left:6px;background:var(--accent);color:var(--bg);padding:8px;text-decoration:none;border-radius:4px;z-index:10000;transition:top 0.3s;font-weight:600;';

    skipLink.addEventListener('focus', function() { this.style.top = '6px'; });
    skipLink.addEventListener('blur', function() { this.style.top = '-40px'; });

    document.body.insertBefore(skipLink, document.body.firstChild);

    const main = document.querySelector('.hero');
    if (main) main.id = 'main';
}
