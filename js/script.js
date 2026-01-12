/**
 * Saudi CyberDefense Portal - Main JavaScript
 * Author: MiniMax Agent
 * Version: 1.0
 */

(function() {
    'use strict';

    // DOM Elements
    const header = document.querySelector('.header');
    const mobileToggle = document.getElementById('mobileToggle');
    const nav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-link');
    const faqItems = document.querySelectorAll('.faq-item');
    const contactForm = document.getElementById('contact-form');

    // Initialize when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        initMobileMenu();
        initScrollEffects();
        initActiveNavLink();
        initFAQ();
        initContactForm();
        initCounters();
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
            const currentScrollY = window.pageYOffset;

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
                const navLink = document.querySelector('.nav-link[href*="' + sectionId + '"]');

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
     * FAQ Accordion
     */
    function initFAQ() {
        faqItems.forEach(function(item) {
            const question = item.querySelector('.faq-question');
            
            if (question) {
                question.addEventListener('click', function() {
                    const isActive = item.classList.contains('active');
                    
                    // Close all other items
                    faqItems.forEach(function(otherItem) {
                        otherItem.classList.remove('active');
                    });
                    
                    // Toggle current item
                    if (!isActive) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }

    /**
     * Contact Form
     */
    function initContactForm() {
        if (!contactForm) return;

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach(function(value, key) {
                data[key] = value;
            });

            // Basic validation
            let isValid = true;
            const requiredFields = ['name', 'email', 'message'];
            
            requiredFields.forEach(function(field) {
                const input = contactForm.querySelector('[name="' + field + '"]');
                if (!data[field] || data[field].trim() === '') {
                    isValid = false;
                    if (input) {
                        input.style.borderColor = '#ef4444';
                    }
                } else {
                    if (input) {
                        input.style.borderColor = '';
                    }
                }
            });

            // Email validation
            const emailInput = contactForm.querySelector('[name="email"]');
            if (emailInput && data.email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(data.email)) {
                    isValid = false;
                    emailInput.style.borderColor = '#ef4444';
                }
            }

            if (isValid) {
                // Simulate form submission
                alert('شكراً لتواصلك معنا! سنرد على رسالتك في أقرب وقت ممكن.');
                contactForm.reset();
            } else {
                alert('يرجى ملء جميع الحقول المطلوبة بشكل صحيح.');
            }
        });

        // Reset border color on input
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(function(input) {
            input.addEventListener('input', function() {
                input.style.borderColor = '';
            });
        });
    }

    /**
     * Counter Animation
     */
    function initCounters() {
        const counters = document.querySelectorAll('.stat-number[data-target]');

        if (!counters.length) return;

        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        counters.forEach(function(counter) {
            observer.observe(counter);
        });
    }

    /**
     * Animate individual counter
     */
    function animateCounter(counter) {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        function updateCounter() {
            current += step;
            
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        }

        updateCounter();
    }

    /**
     * Smooth scroll for anchor links
     */
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
