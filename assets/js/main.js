/**
 * Saudi Cyber Expert - Main JavaScript
 * Version: 1.0
 * Description: الملف الرئيسي للجافاسكريبت للموقع
 */

(function() {
    'use strict';
    
    /* ==================== المتغيرات العامة ==================== */
    const DOM = {
        loadingScreen: document.getElementById('loading-screen'),
        header: document.getElementById('main-header'),
        mobileToggle: document.querySelector('.mobile-toggle'),
        navMenu: document.querySelector('.nav-menu'),
        navLinks: document.querySelectorAll('.nav-link'),
        backToTop: document.getElementById('back-to-top'),
        contactForm: document.getElementById('contact-form'),
        faqItems: document.querySelectorAll('.faq-item'),
        sections: document.querySelectorAll('section[id]')
    };
    
    /* ==================== تهيئة الموقع ==================== */
    function init() {
        hideLoadingScreen();
        initMobileMenu();
        initScrollEffects();
        initNavigation();
        initAnimations();
        initContactForm();
        initFAQ();
        initCounters();
        initSmoothScroll();
    }
    
    /* ==================== شاشة التحميل ==================== */
    function hideLoadingScreen() {
        if (DOM.loadingScreen) {
            window.addEventListener('load', function() {
                setTimeout(function() {
                    DOM.loadingScreen.classList.add('hidden');
                }, 500);
            });
        }
    }
    
    /* ==================== قائمة الجوال ==================== */
    function initMobileMenu() {
        if (DOM.mobileToggle && DOM.navMenu) {
            DOM.mobileToggle.addEventListener('click', function() {
                this.classList.toggle('active');
                DOM.navMenu.classList.toggle('active');
                document.body.style.overflow = DOM.navMenu.classList.contains('active') ? 'hidden' : '';
            });
            
            // إغلاق القائمة عند النقر على رابط
            DOM.navLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                    DOM.mobileToggle.classList.remove('active');
                    DOM.navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });
            
            // إغلاق القائمة عند النقر خارجها
            document.addEventListener('click', function(e) {
                if (!DOM.navMenu.contains(e.target) && !DOM.mobileToggle.contains(e.target)) {
                    DOM.mobileToggle.classList.remove('active');
                    DOM.navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }
    }
    
    /* ==================== تأثيرات التمرير ==================== */
    function initScrollEffects() {
        // تغيير رأس الصفحة عند التمرير
        let lastScroll = 0;
        
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            // زر العودة للأعلى
            if (DOM.backToTop) {
                if (currentScroll > 300) {
                    DOM.backToTop.classList.add('visible');
                } else {
                    DOM.backToTop.classList.remove('visible');
                }
            }
            
            // إخفاء/إظهار الرأس عند التمرير
            if (DOM.header) {
                if (currentScroll > lastScroll && currentScroll > 100) {
                    DOM.header.style.transform = 'translateY(-100%)';
                } else {
                    DOM.header.style.transform = 'translateY(0)';
                }
                lastScroll = currentScroll;
            }
        }, { passive: true });
        
        // خلفية الرأس عند التمرير
        window.addEventListener('scroll', function() {
            if (DOM.header) {
                if (window.pageYOffset > 50) {
                    DOM.header.style.backgroundColor = 'rgba(13, 17, 23, 0.98)';
                    DOM.header.style.backdropFilter = 'blur(10px)';
                } else {
                    DOM.header.style.backgroundColor = 'rgba(13, 17, 23, 0.95)';
                    DOM.header.style.backdropFilter = 'blur(10px)';
                }
            }
        }, { passive: true });
    }
    
    /* ==================== التنقل ==================== */
    function initNavigation() {
        // التنقل النشط حسب القسم
        function setActiveNav() {
            const scrollPos = window.scrollY + 100;
            
            DOM.sections.forEach(function(section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                const navLink = document.querySelector('.nav-link[href="#' + sectionId + '"]');
                
                if (navLink && scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    DOM.navLinks.forEach(function(link) {
                        link.classList.remove('active');
                    });
                    navLink.classList.add('active');
                }
            });
        }
        
        window.addEventListener('scroll', setActiveNav, { passive: true });
        setActiveNav();
        
        // زر العودة للأعلى
        if (DOM.backToTop) {
            DOM.backToTop.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }
    
    /* ==================== الأنيميشن ==================== */
    function initAnimations() {
        // العناصر المتحركة عند التمرير
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });
            
            animatedElements.forEach(function(el) {
                observer.observe(el);
            });
        }
        
        // تأثيرات على البطاقات
        const cards = document.querySelectorAll('.service-card, .certification-card, .project-card, .blog-card');
        
        cards.forEach(function(card) {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }
    
    /* ==================== نموذج التواصل ==================== */
    function initContactForm() {
        if (DOM.contactForm) {
            DOM.contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const formData = new FormData(DOM.contactForm);
                const data = {};
                
                formData.forEach(function(value, key) {
                    data[key] = value;
                });
                
                // التحقق من البيانات
                if (!validateForm(data)) {
                    return;
                }
                
                // إرسال النموذج
                submitForm(data);
            });
            
            // التحقق في الوقت الفعلي
            const inputs = DOM.contactForm.querySelectorAll('input, textarea, select');
            inputs.forEach(function(input) {
                input.addEventListener('blur', function() {
                    validateField(this);
                });
                
                input.addEventListener('input', function() {
                    if (this.parentElement.classList.contains('has-error')) {
                        validateField(this);
                    }
                });
            });
        }
    }
    
    function validateForm(data) {
        let isValid = true;
        const requiredFields = ['name', 'phone', 'email', 'service', 'urgency', 'message'];
        
        requiredFields.forEach(function(field) {
            const input = DOM.contactForm.querySelector('[name="' + field + '"]');
            if (!validateField(input)) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            showNotification('warning', 'بيانات ناقصة', 'يرجى تعبئة جميع الحقول المطلوبة');
        }
        
        return isValid;
    }
    
    function validateField(input) {
        const value = input.value.trim();
        const parent = input.closest('.form-group') || input.closest('.form-control');
        
        if (input.required && !value) {
            if (parent) {
                parent.classList.add('has-error');
            }
            return false;
        }
        
        // التحقق من البريد الإلكتروني
        if (input.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                if (parent) {
                    parent.classList.add('has-error');
                }
                return false;
            }
        }
        
        // التحقق من رقم الهاتف
        if (input.type === 'tel' && value) {
            const phoneRegex = /^05\d{8}$/;
            if (!phoneRegex.test(value)) {
                if (parent) {
                    parent.classList.add('has-error');
                }
                return false;
            }
        }
        
        if (parent) {
            parent.classList.remove('has-error');
        }
        return true;
    }
    
    function submitForm(data) {
        const submitBtn = DOM.contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
        submitBtn.disabled = true;
        
        // محاكاة إرسال النموذج
        setTimeout(function() {
            console.log('Form submitted:', data);
            
            showNotification('success', 'تم الإرسال بنجاح', 'سنقوم بالرد عليك خلال 24 ساعة');
            
            DOM.contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }
    
    /* ==================== الأسئلة الشائعة ==================== */
    function initFAQ() {
        DOM.faqItems.forEach(function(item) {
            const question = item.querySelector('.faq-question');
            
            if (question) {
                question.addEventListener('click', function() {
                    const isOpen = item.classList.contains('open');
                    
                    // إغلاق جميع العناصر
                    DOM.faqItems.forEach(function(faq) {
                        faq.classList.remove('open');
                        faq.querySelector('.faq-answer').classList.remove('open');
                        faq.querySelector('.faq-question').classList.remove('active');
                    });
                    
                    // فتح العنصر الحالي إذا لم يكن مفتوحاً
                    if (!isOpen) {
                        item.classList.add('open');
                        item.querySelector('.faq-answer').classList.add('open');
                        this.classList.add('active');
                    }
                });
            }
        });
    }
    
    /* ==================== العدادات ==================== */
    function initCounters() {
        const counters = document.querySelectorAll('.stat-number[data-count]');
        
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        animateCounter(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            counters.forEach(function(counter) {
                observer.observe(counter);
            });
        }
    }
    
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        function update() {
            current += step;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(update);
            } else {
                element.textContent = target;
            }
        }
        
        update();
    }
    
    /* ==================== التمرير السلس ==================== */
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(function(link) {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                if (href === '#') return;
                
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    
                    const headerHeight = DOM.header ? DOM.header.offsetHeight : 0;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // إغلاق قائمة الجوال إذا كانت مفتوحة
                    if (DOM.navMenu && DOM.navMenu.classList.contains('active')) {
                        DOM.mobileToggle.classList.remove('active');
                        DOM.navMenu.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                }
            });
        });
    }
    
    /* ==================== الإشعارات ==================== */
    function showNotification(type, title, message) {
        // إزالة الإشعار السابق إن وجد
        const existing = document.querySelector('.notification');
        if (existing) {
            existing.remove();
        }
        
        const icons = {
            success: 'fa-check-circle',
            error: 'fa-times-circle',
            warning: 'fa-exclamation-circle',
            info: 'fa-info-circle'
        };
        
        const notification = document.createElement('div');
        notification.className = 'notification ' + type;
        notification.innerHTML = '
            <div class="notification-icon">
                <i class="fas ' + icons[type] + '"></i>
            </div>
            <div class="notification-content">
                <div class="notification-title">' + title + '</div>
                <div class="notification-message">' + message + '</div>
            </div>
            <div class="notification-close">
                <i class="fas fa-times"></i>
            </div>
        ';
        
        document.body.appendChild(notification);
        
        // إظهار الإشعار
        setTimeout(function() {
            notification.classList.add('show');
        }, 100);
        
        // إخفاء الإشعار بعد 5 ثوانٍ
        setTimeout(function() {
            notification.classList.remove('show');
            setTimeout(function() {
                notification.remove();
            }, 300);
        }, 5000);
        
        // زر الإغلاق
        notification.querySelector('.notification-close').addEventListener('click', function() {
            notification.classList.remove('show');
            setTimeout(function() {
                notification.remove();
            }, 300);
        });
    }
    
    /* ==================== أدوات مساعدة ==================== */
    function debounce(func, wait) {
        let timeout;
        return function executedFunction() {
            const args = arguments;
            const context = this;
            
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                func.apply(context, args);
            }, wait);
        };
    }
    
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(function() {
                    inThrottle = false;
                }, limit);
            }
        };
    }
    
    /* ==================== بدء التنفيذ ==================== */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();
