/**
 * JavaScript الرئيسي - Saudi Cyber Expert Portal
 * 
 * الوظائف الرئيسية:
 * - إدارة القائمة المتنقلة
 * - تأثيرات التمرير
 * - التنقل السلس
 * - النماذج والإشعارات
 * - عداد الإحصائيات
 * 
 * الإصدار: 2.0 - مُحسّن للتوافق
 */

(function() {
  'use strict';

  /* ==================== المتغيرات العامة ==================== */
  const DOM = {
    // العناصر الرئيسية
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
    filterButtons: null,
    
    // الإشعارات
    notifications: null
  };

  /* ==================== تهيئة الموقع ==================== */
  function init() {
    try {
      cacheElements();
      bindEvents();
      initComponents();
      initScrollEffects();
      initNavigation();
      initAnimations();
      initCounters();
      initFAQ();
      initForms();
    } catch (error) {
      console.log('تم تهيئة بعض المكونات: ' + error.message);
    }
  }

  /* ==================== تخزين العناصر ==================== */
  function cacheElements() {
    DOM.mainHeader = document.querySelector('.main-header');
    DOM.mobileToggle = document.querySelector('.mobile-toggle');
    DOM.navMenu = document.querySelector('.nav-menu');
    DOM.navLinks = document.querySelectorAll('.nav-link');
    DOM.backToTop = document.getElementById('back-to-top');
    DOM.contactForm = document.getElementById('contact-form');
    DOM.faqItems = document.querySelectorAll('.faq-item');
    DOM.sections = document.querySelectorAll('section[id]');
    DOM.statNumbers = document.querySelectorAll('.stat-number');
    DOM.serviceCards = document.querySelectorAll('.service-card, .service-preview-card');
    DOM.filterButtons = document.querySelectorAll('.filter-btn, .category-card');
  }

  /* ==================== ربط الأحداث ==================== */
  function bindEvents() {
    // القائمة المتنقلة
    if (DOM.mobileToggle && DOM.navMenu) {
      DOM.mobileToggle.addEventListener('click', toggleMobileMenu);
      
      DOM.navLinks.forEach(function(link) {
        link.addEventListener('click', closeMobileMenu);
      });
      
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
    
    // فلاتر الخدمات
    if (DOM.filterButtons && DOM.filterButtons.length) {
      DOM.filterButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
          handleFilterClick(this);
        });
      });
    }
  }

  /* ==================== تهيئة المكونات ==================== */
  function initComponents() {
    createNotificationContainer();
    initSmoothScroll();
    initPlaceholders();
  }

  /* ==================== القائمة المتنقلة ==================== */
  function toggleMobileMenu() {
    if (!DOM.navMenu || !DOM.mobileToggle) return;
    
    DOM.navMenu.classList.toggle('active');
    DOM.mobileToggle.classList.toggle('active');
    document.body.style.overflow = DOM.navMenu.classList.contains('active') ? 'hidden' : '';
  }

  function closeMobileMenu() {
    if (!DOM.navMenu || !DOM.mobileToggle) return;
    
    DOM.navMenu.classList.remove('active');
    DOM.mobileToggle.classList.remove('active');
    document.body.style.overflow = '';
  }

  /* ==================== تأثيرات التمرير ==================== */
  function initScrollEffects() {
    if (!DOM.mainHeader) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      
      if (DOM.backToTop) {
        if (currentScroll > 300) {
          DOM.backToTop.classList.add('visible');
        } else {
          DOM.backToTop.classList.remove('visible');
        }
      }
      
      if (currentScroll > lastScroll && currentScroll > 100) {
        DOM.mainHeader.style.transform = 'translateY(-100%)';
      } else {
        DOM.mainHeader.style.transform = 'translateY(0)';
      }
      lastScroll = currentScroll;
      
      if (currentScroll > 50) {
        DOM.mainHeader.style.background = 'rgba(10, 25, 47, 0.98)';
        DOM.mainHeader.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
      } else {
        DOM.mainHeader.style.background = 'rgba(10, 25, 47, 0.95)';
        DOM.mainHeader.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

  /* ==================== التنقل ==================== */
  function initNavigation() {
    if (!DOM.sections || !DOM.sections.length) return;
    
    function setActiveNav() {
      const scrollPos = window.scrollY + 150;
      
      DOM.sections.forEach(function(section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (sectionId) {
          const navLink = document.querySelector('.nav-link[href*="' + sectionId + '"]');
          
          if (navLink && scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            DOM.navLinks.forEach(function(link) {
              link.classList.remove('active');
            });
            navLink.classList.add('active');
          }
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
    
    const cards = document.querySelectorAll('.service-card, .service-preview-card, .certification-card, .project-card');
    
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
    if (!DOM.statNumbers || !DOM.statNumbers.length) return;
    
    const counters = [];
    
    DOM.statNumbers.forEach(function(counter) {
      let targetValue = counter.textContent.replace(/[^0-9]/g, '');
      if (targetValue) {
        counters.push({
          element: counter,
          target: parseInt(targetValue, 10),
          current: 0
        });
      }
    });
    
    if (!counters.length) return;
    
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const counter = counters.find(function(c) {
              return c.element === entry.target;
            });
            if (counter) {
              animateCounter(counter);
              observer.unobserve(entry.target);
            }
          }
        });
      }, { threshold: 0.5 });
      
      DOM.statNumbers.forEach(function(counter) {
        observer.observe(counter);
      });
    }
  }

  function animateCounter(counter) {
    const duration = 2000;
    const step = counter.target / (duration / 16);
    
    function update() {
      counter.current += step;
      if (counter.current < counter.target) {
        counter.element.textContent = Math.floor(counter.current);
        requestAnimationFrame(update);
      } else {
        counter.element.textContent = counter.target;
      }
    }
    
    update();
  }

  /* ==================== الأسئلة الشائعة ==================== */
  function initFAQ() {
    if (!DOM.faqItems || !DOM.faqItems.length) return;
    
    DOM.faqItems.forEach(function(item) {
      const question = item.querySelector('.faq-question');
      
      if (question) {
        question.addEventListener('click', function() {
          const isOpen = item.classList.contains('open');
          
          DOM.faqItems.forEach(function(faq) {
            faq.classList.remove('open');
            const answer = faq.querySelector('.faq-answer');
            if (answer) {
              answer.style.maxHeight = '0';
            }
          });
          
          if (!isOpen) {
            item.classList.add('open');
            const answer = item.querySelector('.faq-answer');
            if (answer) {
              answer.style.maxHeight = answer.scrollHeight + 'px';
            }
          }
        });
      }
    });
  }

  /* ==================== النماذج ==================== */
  function initForms() {
    if (!DOM.contactForm) return;
    
    DOM.contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      const data = {};
      
      formData.forEach(function(value, key) {
        data[key] = value;
      });
      
      showNotification('تم إرسال رسالتك بنجاح! سنقوم بالرد عليك قريباً.', 'success');
      
      this.reset();
    });
    
    const inputs = DOM.contactForm.querySelectorAll('input, textarea, select');
    
    inputs.forEach(function(input) {
      input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
      });
      
      input.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
        if (this.value) {
          this.parentElement.classList.add('has-value');
        } else {
          this.parentElement.classList.remove('has-value');
        }
      });
    });
  }

  /* ==================== فلاتر الخدمات ==================== */
  function handleFilterClick(button) {
    if (!DOM.serviceCards || !DOM.serviceCards.length) return;
    
    const filter = button.getAttribute('data-filter') || 'all';
    
    DOM.serviceCards.forEach(function(card) {
      const category = card.getAttribute('data-category');
      
      if (filter === 'all' || category === filter) {
        card.style.display = '';
        card.classList.add('animate-on-scroll');
      } else {
        card.style.display = 'none';
      }
    });
  }

  /* ==================== الإشعارات ==================== */
  function createNotificationContainer() {
    if (document.querySelector('.notification-container')) return;
    
    const container = document.createElement('div');
    container.className = 'notification-container';
    document.body.appendChild(container);
    DOM.notifications = container;
  }

  function showNotification(message, type) {
    if (!DOM.notifications) return;
    
    const notification = document.createElement('div');
    notification.className = 'notification ' + (type || 'info');
    notification.innerHTML = '<span>' + message + '</span>';
    
    DOM.notifications.appendChild(notification);
    
    setTimeout(function() {
      notification.classList.add('hiding');
      setTimeout(function() {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }

  /* ==================== placeholders ==================== */
  function initPlaceholders() {
    const placeholders = document.querySelectorAll('input[placeholder], textarea[placeholder]');
    
    placeholders.forEach(function(input) {
      const wrapper = document.createElement('div');
      wrapper.className = 'input-wrapper';
      
      input.parentNode.insertBefore(wrapper, input);
      wrapper.appendChild(input);
      
      if (input.value) {
        wrapper.classList.add('has-value');
      }
      
      input.addEventListener('input', function() {
        if (this.value) {
          wrapper.classList.add('has-value');
        } else {
          wrapper.classList.remove('has-value');
        }
      });
    });
  }

  /* ==================== بدء التنفيذ ==================== */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
