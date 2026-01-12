/**
 * JavaScript الرئيسي - Saudi Cyber Expert Portal
 * 
 * الوظائف الرئيسية:
 * - إدارة شاشة التحميل
 * - القائمة المتنقلة
 * - تأثيرات التمرير
 * - التنقل السلس
 * - النماذج والإشعارات
 * - الأسئلة الشائعة
 * - عداد الإحصائيات
 * - إدارة الخدمات والتصفية
 * 
 * الإصدار: 2.0
 */

(function() {
  'use strict';

  /* ==================== المتغيرات العامة ==================== */
  const DOM = {
    // العناصر الرئيسية
    loadingScreen: null,
    mainHeader: null,
    mobileToggle: null,
    navMenu: null,
    navLinks: null,
    backToTop: null,
    
    // النماذج
    contactForm: null,
    
    // الأسئلة الشائعة
    faqItems: null,
    
    // الأقسام
    sections: null,
    
    // الإحصائيات
    statNumbers: null,
    
    // الخدمات
    serviceCards: null,
    filterCategories: null,
    filterSearch: null,
    
    // الإشعارات
    notifications: null
  };

  /* ==================== تهيئة الموقع ==================== */
  function init() {
    cacheElements();
    bindEvents();
    initComponents();
    hideLoadingScreen();
    initScrollEffects();
    initNavigation();
    initAnimations();
    initCounters();
    initFAQ();
    initForms();
    initServiceFilters();
  }

  /* ==================== تخزين العناصر ==================== */
  function cacheElements() {
    DOM.loadingScreen = document.getElementById('loading-screen');
    DOM.mainHeader = document.getElementById('main-header');
    DOM.mobileToggle = document.querySelector('.mobile-toggle');
    DOM.navMenu = document.querySelector('.nav-menu');
    DOM.navLinks = document.querySelectorAll('.nav-link');
    DOM.backToTop = document.getElementById('back-to-top');
    DOM.contactForm = document.getElementById('contact-form');
    DOM.faqItems = document.querySelectorAll('.faq-item');
    DOM.sections = document.querySelectorAll('section[id]');
    DOM.statNumbers = document.querySelectorAll('.stat-number[data-count]');
    DOM.serviceCards = document.querySelectorAll('.service-card');
    DOM.filterCategories = document.querySelectorAll('.filter-category');
    DOM.filterSearch = document.querySelector('.filter-search input');
  }

  /* ==================== ربط الأحداث ==================== */
  function bindEvents() {
    // القائمة المتنقلة
    if (DOM.mobileToggle && DOM.navMenu) {
      DOM.mobileToggle.addEventListener('click', toggleMobileMenu);
      
      // إغلاق القائمة عند النقر على رابط
      DOM.navLinks.forEach(function(link) {
        link.addEventListener('click', closeMobileMenu);
      });
      
      // إغلاق القائمة عند النقر خارجها
      document.addEventListener('click', function(e) {
        if (!DOM.navMenu.contains(e.target) && !DOM.mobileToggle.contains(e.target)) {
          closeMobileMenu();
        }
      });
    }
    
    // زر العودة للأعلى
    if (DOM.backToTop) {
      DOM.backToTop.addEventListener('click', scrollToTop);
    }
    
    // نموذج التواصل
    if (DOM.contactForm) {
      DOM.contactForm.addEventListener('submit', handleFormSubmit);
      
      // التحقق من الحقول
      const inputs = DOM.contactForm.querySelectorAll('input, textarea, select');
      inputs.forEach(function(input) {
        input.addEventListener('blur', function() {
          validateField(this);
        });
        
        input.addEventListener('input', function() {
          if (this.closest('.form-group').classList.contains('has-error')) {
            validateField(this);
          }
        });
      });
    }
    
    // فلاتر الخدمات
    if (DOM.filterCategories.length > 0) {
      DOM.filterCategories.forEach(function(category) {
        category.addEventListener('click', function() {
          handleCategoryFilter(this);
        });
      });
    }
    
    if (DOM.filterSearch) {
      DOM.filterSearch.addEventListener('input', debounce(handleSearchFilter, 300));
    }
  }

  /* ==================== تهيئة المكونات ==================== */
  function initComponents() {
    // تهيئة التمرير السلس
    initSmoothScroll();
    
    // تهيئة القوائم المنسدلة
    initDropdowns();
    
    // تهيئة النوافذ المنبثقة (Modals)
    initModals();
    
    // تهيئة النسخ إلى الحافظة
    initCopyButtons();
  }

  /* ==================== شاشة التحميل ==================== */
  function hideLoadingScreen() {
    if (!DOM.loadingScreen) return;
    
    // الطريقة 1: إذا كانت الصفحة محملة بالفعل
    if (document.readyState === 'complete') {
      DOM.loadingScreen.classList.add('hidden');
      setTimeout(function() {
        DOM.loadingScreen.style.display = 'none';
      }, 500);
      return;
    }
    
    // الطريقة 2: عند حدث load
    window.addEventListener('load', function() {
      setTimeout(function() {
        DOM.loadingScreen.classList.add('hidden');
        setTimeout(function() {
          DOM.loadingScreen.style.display = 'none';
        }, 500);
      }, 300);
    });
    
    // الطريقة 3: Timeout كضمان - بعد 4 ثوانٍ إخفاء الشاشة دائماً
    setTimeout(function() {
      DOM.loadingScreen.classList.add('hidden');
      setTimeout(function() {
        DOM.loadingScreen.style.display = 'none';
      }, 500);
    }, 4000);
  }

  /* ==================== القائمة المتنقلة ==================== */
  function toggleMobileMenu() {
    if (!DOM.mobileToggle || !DOM.navMenu) return;
    
    DOM.mobileToggle.classList.toggle('active');
    DOM.navMenu.classList.toggle('active');
    
    // منع/سماح التمرير في الخلفية
    document.body.style.overflow = DOM.navMenu.classList.contains('active') ? 'hidden' : '';
  }

  function closeMobileMenu() {
    if (!DOM.mobileToggle || !DOM.navMenu) return;
    
    DOM.mobileToggle.classList.remove('active');
    DOM.navMenu.classList.remove('active');
    document.body.style.overflow = '';
  }

  /* ==================== تأثيرات التمرير ==================== */
  function initScrollEffects() {
    if (!DOM.mainHeader) return;
    
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
      if (currentScroll > lastScroll && currentScroll > 100) {
        DOM.mainHeader.style.transform = 'translateY(-100%)';
      } else {
        DOM.mainHeader.style.transform = 'translateY(0)';
      }
      lastScroll = currentScroll;
      
      // تغيير خلفية الرأس
      if (currentScroll > 50) {
        DOM.mainHeader.style.background = 'rgba(13, 25, 47, 0.98)';
        DOM.mainHeader.style.backdropFilter = 'blur(10px)';
      } else {
        DOM.mainHeader.style.background = 'rgba(13, 25, 47, 0.95)';
        DOM.mainHeader.style.backdropFilter = 'blur(10px)';
      }
    }, { passive: true });
  }

  /* ==================== التنقل ==================== */
  function initNavigation() {
    if (!DOM.sections.length) return;
    
    // التنقل النشط حسب القسم
    function setActiveNav() {
      const scrollPos = window.scrollY + 150;
      
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
          
          const headerHeight = DOM.mainHeader ? DOM.mainHeader.offsetHeight : 0;
          const targetPosition = target.offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // إغلاق قائمة الجوال إذا كانت مفتوحة
          if (DOM.navMenu && DOM.navMenu.classList.contains('active')) {
            closeMobileMenu();
          }
        }
      });
    });
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
      card.classList.add('animate-on-scroll');
      
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });
  }

  /* ==================== العدادات ==================== */
  function initCounters() {
    if (!DOM.statNumbers.length) return;
    
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      
      DOM.statNumbers.forEach(function(counter) {
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

  /* ==================== الأسئلة الشائعة ==================== */
  function initFAQ() {
    if (!DOM.faqItems.length) return;
    
    DOM.faqItems.forEach(function(item) {
      const question = item.querySelector('.faq-question');
      
      if (question) {
        question.addEventListener('click', function() {
          const isOpen = item.classList.contains('open');
          
          // إغلاق جميع العناصر
          DOM.faqItems.forEach(function(faq) {
            faq.classList.remove('open');
            const answer = faq.querySelector('.faq-answer');
            if (answer) {
              answer.style.maxHeight = '0';
            }
            const q = faq.querySelector('.faq-question');
            if (q) {
              q.classList.remove('active');
            }
          });
          
          // فتح العنصر الحالي إذا لم يكن مفتوحاً
          if (!isOpen) {
            item.classList.add('open');
            const answer = item.querySelector('.faq-answer');
            if (answer) {
              answer.style.maxHeight = answer.scrollHeight + 'px';
            }
            this.classList.add('active');
          }
        });
      }
    });
  }

  /* ==================== النماذج ==================== */
  function initForms() {
    // التحقق من صحة النموذج
    window.validateForm = function(formId) {
      const form = document.getElementById(formId);
      if (!form) return false;
      
      let isValid = true;
      const requiredFields = form.querySelectorAll('[required]');
      
      requiredFields.forEach(function(field) {
        if (!validateField(field)) {
          isValid = false;
        }
      });
      
      return isValid;
    };
  }

  function validateField(input) {
    const value = input.value.trim();
    const parent = input.closest('.form-group');
    
    if (!parent) return true;
    
    // الحقول المطلوبة
    if (input.required && !value) {
      parent.classList.add('has-error');
      return false;
    }
    
    // التحقق من البريد الإلكتروني
    if (input.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        parent.classList.add('has-error');
        return false;
      }
    }
    
    // التحقق من رقم الهاتف
    if (input.type === 'tel' && value) {
      const phoneRegex = /^05\d{8}$/;
      if (!phoneRegex.test(value)) {
        parent.classList.add('has-error');
        return false;
      }
    }
    
    parent.classList.remove('has-error');
    return true;
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    
    if (!DOM.contactForm) return;
    
    const formData = new FormData(DOM.contactForm);
    const data = {};
    
    formData.forEach(function(value, key) {
      data[key] = value;
    });
    
    // التحقق من البيانات
    if (!validateContactForm(data)) {
      return;
    }
    
    // إرسال النموذج
    submitContactForm(data);
  }

  function validateContactForm(data) {
    let isValid = true;
    
    if (!data.name || data.name.trim().length < 2) {
      showNotification('warning', 'بيانات ناقصة', 'يرجى إدخال الاسم الكامل بشكل صحيح');
      isValid = false;
    }
    
    if (!data.phone || !/^05\d{8}$/.test(data.phone)) {
      showNotification('warning', 'بيانات ناقصة', 'يرجى إدخال رقم هاتف صحيح');
      isValid = false;
    }
    
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      showNotification('warning', 'بيانات ناقصة', 'يرجى إدخال بريد إلكتروني صحيح');
      isValid = false;
    }
    
    if (!data.message || data.message.trim().length < 10) {
      showNotification('warning', 'بيانات ناقصة', 'يرجى وصف المشكلة بشكل مفصل');
      isValid = false;
    }
    
    return isValid;
  }

  function submitContactForm(data) {
    const submitBtn = DOM.contactForm.querySelector('.btn-submit');
    if (!submitBtn) return;
    
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
    submitBtn.disabled = true;
    
    // محاكاة إرسال النموذج
    setTimeout(function() {
      console.log('Form submitted:', data);
      
      showNotification('success', 'تم الإرسال بنجاح', 'سنقوم بالرد عليك خلال 24 ساعة');
      
      if (DOM.contactForm) {
        DOM.contactForm.reset();
      }
      
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 2000);
  }

  /* ==================== فلاتر الخدمات ==================== */
  function initServiceFilters() {
    // تهيئة الفلاتر إذا كانت موجودة
    if (DOM.filterCategories.length > 0) {
      // تعيين الفئة الأولى كفعالة
      DOM.filterCategories[0].classList.add('active');
    }
  }

  function handleCategoryFilter(element) {
    // تحديث الفئة النشطة
    DOM.filterCategories.forEach(function(cat) {
      cat.classList.remove('active');
    });
    element.classList.add('active');
    
    // تصفية البطاقات
    const category = element.getAttribute('data-category');
    filterServiceCards(category, DOM.filterSearch ? DOM.filterSearch.value : '');
  }

  function handleSearchFilter() {
    const activeCategory = document.querySelector('.filter-category.active');
    const category = activeCategory ? activeCategory.getAttribute('data-category') : 'all';
    const searchTerm = DOM.filterSearch.value.toLowerCase();
    
    filterServiceCards(category, searchTerm);
  }

  function filterServiceCards(category, searchTerm) {
    if (!DOM.serviceCards.length) return;
    
    DOM.serviceCards.forEach(function(card) {
      const cardCategory = card.getAttribute('data-category');
      const title = card.querySelector('.service-title').textContent.toLowerCase();
      const description = card.querySelector('.service-description').textContent.toLowerCase();
      
      const matchesCategory = category === 'all' || cardCategory === category;
      const matchesSearch = searchTerm === '' || 
        title.includes(searchTerm) || 
        description.includes(searchTerm);
      
      if (matchesCategory && matchesSearch) {
        card.style.display = 'block';
        card.style.animation = 'fadeInUp 0.5s ease';
      } else {
        card.style.display = 'none';
      }
    });
  }

  /* ==================== القوائم المنسدلة ==================== */
  function initDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(function(dropdown) {
      const toggle = dropdown.querySelector('.dropdown-toggle');
      
      if (toggle) {
        toggle.addEventListener('click', function(e) {
          e.preventDefault();
          dropdown.classList.toggle('open');
        });
        
        // إغلاق عند النقر خارج القائمة
        document.addEventListener('click', function(e) {
          if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
          }
        });
      }
    });
  }

  /* ==================== النوافذ المنبثقة ==================== */
  function initModals() {
    const modalTriggers = document.querySelectorAll('[data-modal]');
    const modalCloseButtons = document.querySelectorAll('.modal-close, .modal-overlay');
    
    // فتح المودال
    modalTriggers.forEach(function(trigger) {
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        const modalId = this.getAttribute('data-modal');
        openModal(modalId);
      });
    });
    
    // إغلاق المودال
    modalCloseButtons.forEach(function(closeBtn) {
      closeBtn.addEventListener('click', function() {
        const modal = this.closest('.modal-overlay');
        if (modal) {
          modal.classList.remove('active');
        }
      });
    });
    
    // إغلاق عند الضغط على Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal-overlay.active');
        if (activeModal) {
          activeModal.classList.remove('active');
        }
      }
    });
  }

  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      // إغلاق أي مودال مفتوح
      const activeModals = document.querySelectorAll('.modal-overlay.active');
      activeModals.forEach(function(m) {
        m.classList.remove('active');
      });
      
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  /* ==================== النسخ إلى الحافظة ==================== */
  function initCopyButtons() {
    const copyButtons = document.querySelectorAll('[data-copy]');
    
    copyButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const targetId = this.getAttribute('data-copy');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          copyToClipboard(targetElement.textContent);
        }
      });
    });
  }

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
      showNotification('success', 'تم النسخ', 'تم نسخ النص إلى الحافظة');
    }).catch(function(err) {
      console.error('فشل النسخ:', err);
      showNotification('error', 'خطأ', 'حدث خطأ أثناء النسخ');
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
    notification.innerHTML = 
      '<div class="notification-icon">' +
        '<i class="fas ' + icons[type] + '"></i>' +
      '</div>' +
      '<div class="notification-content">' +
        '<div class="notification-title">' + title + '</div>' +
        '<div class="notification-message">' + message + '</div>' +
      '</div>' +
      '<div class="notification-close">' +
        '<i class="fas fa-times"></i>' +
      '</div>';
    
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

  /* ==================== تصدير الدوال العامة ==================== */
  window.SCE = {
    showNotification: showNotification,
    copyToClipboard: copyToClipboard,
    scrollToTop: scrollToTop,
    validateField: validateField,
    filterServices: function(category, search) {
      filterServiceCards(category, search);
    }
  };

  /* ==================== بدء التنفيذ ==================== */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
