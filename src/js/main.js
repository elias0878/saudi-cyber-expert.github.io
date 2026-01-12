/**
 * Saudi CyberDefense Portal - Main JavaScript
 * Author: MiniMax Agent
 * Version: 1.0
 */

(function() {
    'use strict';

    /**
     * DOM Elements
     */
    const header = document.querySelector('.header');
    const mobileToggle = document.getElementById('mobileToggle');
    const nav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-link');

    /**
     * Initialize when DOM is ready
     */
    document.addEventListener('DOMContentLoaded', function() {
        initMobileMenu();
        initScrollEffects();
        initSmoothScroll();
        initActiveNavLink();
    });

    /**
     * Mobile Menu Toggle
     */
    function initMobileMenu() {
        if (!mobileToggle || !nav) return;

        mobileToggle.addEventListener('click', function() {
            mobileToggle.classList.toggle('active');
            nav.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (nav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking on a link
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                closeMobileMenu();
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !mobileToggle.contains(e.target)) {
                closeMobileMenu();
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && nav.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    }

    /**
     * Close mobile menu
     */
    function closeMobileMenu() {
        if (mobileToggle) {
            mobileToggle.classList.remove('active');
        }
        if (nav) {
            nav.classList.remove('active');
        }
        document.body.style.overflow = '';
    }

    /**
     * Scroll Effects
     */
    function initScrollEffects() {
        if (!header) return;

        let lastScrollY = window.scrollY;
        let ticking = false;

        function updateHeader() {
            const currentScrollY = window.scrollY;

            // Add/remove scrolled class
            if (currentScrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            lastScrollY = currentScrollY;
            ticking = false;
        }

        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(updateHeader);
                ticking = true;
            }
        }, { passive: true });
    }

    /**
     * Smooth Scroll for anchor links
     */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                if (href === '#') return;

                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    
                    const headerHeight = header ? header.offsetHeight : 0;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    /**
     * Active Navigation Link based on scroll position
     */
    function initActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        
        function highlightNavLink() {
            const scrollY = window.pageYOffset;

            sections.forEach(function(section) {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute('id');
                const navLink = document.querySelector('.nav-link[href="#' + sectionId + '"]');

                if (navLink) {
                    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                        navLinks.forEach(function(link) {
                            link.classList.remove('active');
                        });
                        navLink.classList.add('active');
                    }
                }
            });
        }

        window.addEventListener('scroll', function() {
            highlightNavLink();
        }, { passive: true });
    }

    /**
     * Counter Animation for statistics
     */
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number[data-target]');

        counters.forEach(function(counter) {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            function updateCounter() {
                current += step;
                
                if (current < target) {
                    counter.textContent = Math.floor(current) + '+';
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target + '+';
                }
            }

            // Start animation when element is in viewport
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        updateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            observer.observe(counter);
        });
    }

    /**
     * Intersection Observer for fade-in animations
     */
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.service-card, .stat-item, .footer-section');

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(function(el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    /**
     * Handle window resize
     */
    function handleResize() {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    }

    window.addEventListener('resize', handleResize);

    /**
     * Expose functions for external use if needed
     */
    window.SaudiCyberDefense = {
        closeMobileMenu: closeMobileMenu
    };

})();
