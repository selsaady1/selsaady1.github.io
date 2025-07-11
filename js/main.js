// ===== MAIN JS FOR PORTFOLIO INTERACTIVITY =====

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initLoadingScreen();
    initNavigation();
    initProjectFiltering();
    initAnimations();
    initBackToTop();
    initImageHandling();
    initThemePersistence();
    initAccessibility();
    initPerformanceOptimizations();
});

// ===== LOADING SCREEN =====
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        // Remove loading screen after a short delay
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                // Trigger initial animations after loading
                triggerInitialAnimations();
            }, 400);
        }, 800);
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

    // Mobile navigation toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close mobile menu when clicking on links
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Smooth scrolling for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ===== PROJECT FILTERING =====
function initProjectFiltering() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectsGrid = document.getElementById('projects-grid');

    if (filterBtns && projectsGrid) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');
                const projects = projectsGrid.querySelectorAll('.project-card');

                projects.forEach(card => {
                    if (filter === 'all' || card.classList.contains(filter)) {
                        card.style.display = '';
                        card.style.opacity = '0';
                        setTimeout(() => {
                            card.style.opacity = '1';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });

                // Update URL hash for bookmarking
                if (filter !== 'all') {
                    history.replaceState(null, null, `#${filter}`);
                } else {
                    history.replaceState(null, null, window.location.pathname);
                }
            });
        });

        // Check URL hash on page load
        const hash = window.location.hash.slice(1);
        if (hash && ['hardware', 'software', 'research'].includes(hash)) {
            const targetBtn = document.querySelector(`[data-filter="${hash}"]`);
            if (targetBtn) {
                targetBtn.click();
            }
        }
    }
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
            window.scrollTo({ 
                top: 0, 
                behavior: 'smooth' 
            });
        });
    }
}

// ===== IMAGE HANDLING =====
function initImageHandling() {
    const images = document.querySelectorAll('.project-card img, .project-image');
    
    images.forEach(img => {
        // Add loading class
        img.classList.add('loading');
        
        img.addEventListener('load', function() {
            this.classList.remove('loading');
            this.classList.add('loaded');
        });
        
        img.addEventListener('error', function() {
            this.style.display = 'none';
            console.log('Image failed to load:', this.src);
            
            // Create fallback element for project images
            if (this.classList.contains('project-image')) {
                const fallback = document.createElement('div');
                fallback.className = 'image-fallback';
                fallback.innerHTML = '<i class="fas fa-image"></i><span>Image not available</span>';
                fallback.style.cssText = `
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 150px;
                    background: var(--bg-section);
                    border-radius: 8px;
                    color: var(--text-muted);
                    font-size: 0.9rem;
                    gap: 0.5rem;
                    border: 2px dashed var(--divider);
                    max-width: 300px;
                    width: 100%;
                `;
                
                this.parentNode.insertBefore(fallback, this);
            }
        });
    });

    // Global error handler for images
    window.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG') {
            console.log('Image failed to load:', e.target.src);
            e.target.style.display = 'none';
        }
    }, true);
}

// ===== THEME PERSISTENCE =====
function initThemePersistence() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
}

// ===== ACCESSIBILITY =====
function initAccessibility() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add main landmark
    const main = document.querySelector('main') || document.querySelector('.hero');
    if (main) {
        main.id = 'main';
    }

    // Keyboard navigation for project filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach((btn, index) => {
        btn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Announce filter changes to screen readers
    const announceFilter = (filter) => {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.style.cssText = 'position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden;';
        announcement.textContent = `Showing ${filter} projects`;
        document.body.appendChild(announcement);
        setTimeout(() => document.body.removeChild(announcement), 1000);
    };
}

// ===== PERFORMANCE OPTIMIZATIONS =====
function initPerformanceOptimizations() {
    // Lazy load images that are not in viewport
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(() => {
            // Handle scroll-based functionality here
        }, 16); // ~60fps
    });

    // Preload critical resources
    const criticalImages = [
        './Headshot.jpg',
        './LinkedINbanner.png'
    ];

    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// ===== UTILITY FUNCTIONS =====

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

// Throttle function for scroll events
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

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You could send this to an error tracking service
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    // You could send this to an error tracking service
});

// ===== SERVICE WORKER SUPPORT =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
} 