// ===== ANIMATIONS JS FOR SCROLL EFFECTS =====

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initScrollAnimations();
    initParallaxEffects();
    initTypingEffects();
    initProgressAnimations();
    initHoverEffects();
});

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .section-title');
    
    if (animatedElements.length === 0) return;

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
                
                // Trigger additional animations for specific elements
                if (entry.target.classList.contains('section-title')) {
                    animateSectionTitle(entry.target);
                }
                
                if (entry.target.classList.contains('skill-item')) {
                    animateSkillLevel(entry.target);
                }
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
}

// ===== SECTION TITLE ANIMATIONS =====
function animateSectionTitle(element) {
    const afterElement = element.querySelector('::after') || element;
    
    // Animate the underline
    setTimeout(() => {
        element.classList.add('title-animated');
    }, 300);
}

// ===== SKILL LEVEL ANIMATIONS =====
function animateSkillLevel(element) {
    const skillLevel = element.querySelector('.skill-level');
    if (!skillLevel) return;
    
    const level = skillLevel.getAttribute('data-level') || 0;
    
    // Animate the skill level bar
    setTimeout(() => {
        skillLevel.style.setProperty('--skill-level', `${level}%`);
        skillLevel.classList.add('animated');
    }, 200);
}

// ===== PARALLAX EFFECTS =====
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.hero, .about-banner');
    
    if (parallaxElements.length === 0) return;
    
    window.addEventListener('scroll', throttle(() => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }, 16));
}

// ===== TYPING EFFECTS =====
function initTypingEffects() {
    const typingElements = document.querySelectorAll('.typing-effect');
    
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        element.style.borderRight = '2px solid var(--primary-color)';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                element.style.borderRight = 'none';
            }
        };
        
        // Start typing when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(element);
    });
}

// ===== PROGRESS ANIMATIONS =====
function initProgressAnimations() {
    const progressElements = document.querySelectorAll('.skill-level');
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const level = element.getAttribute('data-level') || 0;
                
                // Animate the progress bar
                element.style.setProperty('--skill-level', '0%');
                
                setTimeout(() => {
                    element.style.setProperty('--skill-level', `${level}%`);
                    element.classList.add('animated');
                }, 100);
                
                progressObserver.unobserve(element);
            }
        });
    });
    
    progressElements.forEach(el => progressObserver.observe(el));
}

// ===== HOVER EFFECTS =====
function initHoverEffects() {
    // Add hover effects to interactive elements
    const hoverElements = document.querySelectorAll('.project-card, .skill-item, .timeline-content, .contact-item');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = 'var(--shadow-heavy)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--shadow-light)';
        });
    });
    
    // Special hover effects for buttons
    const buttons = document.querySelectorAll('.btn, .filter-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// ===== PERFORMANCE OPTIMIZED THROTTLE =====
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== SMOOTH SCROLLING =====
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== LOADING ANIMATIONS =====
function initLoadingAnimations() {
    // Animate elements when they come into view
    const elementsToAnimate = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                animationObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elementsToAnimate.forEach(el => animationObserver.observe(el));
}

// ===== MOBILE OPTIMIZATIONS =====
function initMobileOptimizations() {
    // Disable hover effects on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        const hoverElements = document.querySelectorAll('.project-card, .skill-item, .timeline-content, .contact-item');
        hoverElements.forEach(element => {
            element.style.pointerEvents = 'none';
        });
    }
    
    // Optimize animations for mobile
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        document.documentElement.style.setProperty('--transition-normal', '0.01ms');
        document.documentElement.style.setProperty('--transition-fast', '0.01ms');
        document.documentElement.style.setProperty('--transition-slow', '0.01ms');
    }
}

// ===== ANIMATION UTILITIES =====

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all animation features
    initScrollAnimations();
    initParallaxEffects();
    initTypingEffects();
    initProgressAnimations();
    initHoverEffects();
    initSmoothScrolling();
    initLoadingAnimations();
    initMobileOptimizations();
    
    // Trigger initial animations for elements already in viewport
    const initialElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    initialElements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        }
    });
});

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    if (e.message.includes('animation')) {
        console.warn('Animation error:', e.message);
        // Disable animations gracefully
        document.documentElement.style.setProperty('--transition-normal', '0ms');
        document.documentElement.style.setProperty('--transition-fast', '0ms');
        document.documentElement.style.setProperty('--transition-slow', '0ms');
    }
}); 