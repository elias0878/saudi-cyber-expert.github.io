/**
 * Saudi Cyber Expert - Component JavaScript
 * Version: 1.0
 * Description: جافاسكريبت المكونات الإضافية للموقع
 */

(function() {
    'use strict';
    
    /* ==================== المكون: شرائح العرض (Carousel) ==================== */
    const Carousel = {
        init: function(container) {
            this.container = typeof container === 'string' ? document.querySelector(container) : container;
            this.slides = this.container.querySelectorAll('.carousel-slide');
            this.currentIndex = 0;
            this.autoPlay = true;
            this.interval = 5000;
            
            this.createControls();
            this.bindEvents();
            this.startAutoPlay();
        },
        
        createControls: function() {
            const nav = document.createElement('div');
            nav.className = 'carousel-nav';
            
            const prevBtn = document.createElement('button');
            prevBtn.className = 'nav-btn prev';
            prevBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
            prevBtn.setAttribute('aria-label', 'السابق');
            
            const dots = document.createElement('div');
            dots.className = 'carousel-dots';
            
            this.slides.forEach(function(_, index) {
                const dot = document.createElement('span');
                dot.className = 'carousel-dot' + (index === 0 ? ' active' : '');
                dot.setAttribute('data-index', index);
                dots.appendChild(dot);
            });
            
            const nextBtn = document.createElement('button');
            nextBtn.className = 'nav-btn next';
            nextBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
            nextBtn.setAttribute('aria-label', 'التالي');
            
            nav.appendChild(prevBtn);
            nav.appendChild(dots);
            nav.appendChild(nextBtn);
            
            this.container.parentNode.appendChild(nav);
            
            this.prevBtn = prevBtn;
            this.nextBtn = nextBtn;
            this.dots = dots;
        },
        
        bindEvents: function() {
            const self = this;
            
            this.prevBtn.addEventListener('click', function() {
                self.stopAutoPlay();
                self.prev();
            });
            
            this.nextBtn.addEventListener('click', function() {
                self.stopAutoPlay();
                self.next();
            });
            
            this.dots.querySelectorAll('.carousel-dot').forEach(function(dot) {
                dot.addEventListener('click', function() {
                    self.stopAutoPlay();
                    self.goTo(parseInt(this.getAttribute('data-index')));
                });
            });
        },
        
        goTo: function(index) {
            this.slides[this.currentIndex].style.display = 'none';
            this.slides[this.currentIndex].classList.remove('active');
            
            this.dots.querySelectorAll('.carousel-dot')[this.currentIndex].classList.remove('active');
            
            this.currentIndex = index;
            
            if (this.currentIndex < 0) {
                this.currentIndex = this.slides.length - 1;
            } else if (this.currentIndex >= this.slides.length) {
                this.currentIndex = 0;
            }
            
            this.slides[this.currentIndex].style.display = 'block';
            this.slides[this.currentIndex].classList.add('active');
            this.dots.querySelectorAll('.carousel-dot')[this.currentIndex].classList.add('active');
        },
        
        next: function() {
            this.goTo(this.currentIndex + 1);
        },
        
        prev: function() {
            this.goTo(this.currentIndex - 1);
        },
        
        startAutoPlay: function() {
            const self = this;
            this.autoPlayInterval = setInterval(function() {
                if (self.autoPlay) {
                    self.next();
                }
            }, this.interval);
        },
        
        stopAutoPlay: function() {
            clearInterval(this.autoPlayInterval);
        }
    };
    
    /* ==================== المكون: علامات التبويب (Tabs) ==================== */
    const Tabs = {
        init: function(container) {
            this.container = typeof container === 'string' ? document.querySelector(container) : container;
            this.buttons = this.container.querySelectorAll('.tab-btn');
            this.contents = this.container.querySelectorAll('.tab-content');
            
            this.bindEvents();
        },
        
        bindEvents: function() {
            const self = this;
            
            this.buttons.forEach(function(btn) {
                btn.addEventListener('click', function() {
                    self.activate(this.getAttribute('data-tab'));
                });
            });
        },
        
        activate: function(tabId) {
            this.buttons.forEach(function(btn) {
                btn.classList.remove('active');
                if (btn.getAttribute('data-tab') === tabId) {
                    btn.classList.add('active');
                }
            });
            
            this.contents.forEach(function(content) {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
        }
    };
    
    /* ==================== المكون: الإكمال التلقائي (Autocomplete) ==================== */
    const Autocomplete = {
        init: function(input, suggestions) {
            this.input = typeof input === 'string' ? document.querySelector(input) : input;
            this.suggestions = suggestions || [];
            this.container = null;
            
            this.createContainer();
            this.bindEvents();
        },
        
        createContainer: function() {
            this.container = document.createElement('div');
            this.container.className = 'autocomplete-container';
            this.container.style.cssText = 'position: absolute; z-index: 1000; width: 100%; max-height: 200px; overflow-y: auto; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); display: none;';
            this.input.parentNode.appendChild(this.container);
        },
        
        bindEvents: function() {
            const self = this;
            
            this.input.addEventListener('input', function() {
                const value = this.value.toLowerCase();
                
                if (value.length < 2) {
                    self.hide();
                    return;
                }
                
                const filtered = self.suggestions.filter(function(suggestion) {
                    return suggestion.toLowerCase().includes(value);
                });
                
                if (filtered.length > 0) {
                    self.show(filtered);
                } else {
                    self.hide();
                }
            });
            
            this.input.addEventListener('blur', function() {
                setTimeout(function() {
                    self.hide();
                }, 200);
            });
            
            this.input.addEventListener('focus', function() {
                if (this.value.length >= 2 && self.container.children.length > 0) {
                    self.show();
                }
            });
        },
        
        show: function(items) {
            if (items) {
                this.container.innerHTML = '';
                items.forEach(function(item) {
                    const div = document.createElement('div');
                    div.style.cssText = 'padding: 0.75rem 1rem; cursor: pointer; color: var(--text-secondary); transition: background 0.2s;';
                    div.textContent = item;
                    div.addEventListener('mouseenter', function() {
                        this.style.background = 'var(--bg-tertiary)';
                    });
                    div.addEventListener('mouseleave', function() {
                        this.style.background = 'transparent';
                    });
                    div.addEventListener('click', function() {
                        self.input.value = item;
                        self.hide();
                    });
                    self.container.appendChild(div);
                });
            }
            
            this.container.style.display = 'block';
        },
        
        hide: function() {
            this.container.style.display = 'none';
        }
    };
    
    /* ==================== المكون: التحميل الكسول (Lazy Load) ==================== */
    const LazyLoad = {
        init: function() {
            if ('IntersectionObserver' in window) {
                this.observer = new IntersectionObserver(this.handleIntersection.bind(this), {
                    root: null,
                    rootMargin: '50px',
                    threshold: 0.01
                });
                
                document.querySelectorAll('img[data-src]').forEach(function(img) {
                    this.observer.observe(img);
                }, this);
            } else {
                // fallback للمتصفحات القديمة
                document.querySelectorAll('img[data-src]').forEach(function(img) {
                    img.src = img.getAttribute('data-src');
                });
            }
        },
        
        handleIntersection: function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                    this.observer.unobserve(img);
                }
            }, this);
        }
    };
    
    /* ==================== المكون: مؤقت العد التنازلي (Countdown Timer) ==================== */
    const CountdownTimer = {
        init: function(element, targetDate, options) {
            this.element = typeof element === 'string' ? document.querySelector(element) : element;
            this.targetDate = new Date(targetDate).getTime();
            this.options = Object.assign({
                days: 'يوم',
                hours: 'ساعة',
                minutes: 'دقيقة',
                seconds: 'ثانية',
                onComplete: null
            }, options);
            
            this.render();
            this.start();
        },
        
        render: function() {
            this.element.innerHTML = '
                <div class="countdown">
                    <div class="countdown-item">
                        <span class="countdown-number" data-unit="days">00</span>
                        <span class="countdown-label">' + this.options.days + '</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number" data-unit="hours">00</span>
                        <span class="countdown-label">' + this.options.hours + '</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number" data-unit="minutes">00</span>
                        <span class="countdown-label">' + this.options.minutes + '</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number" data-unit="seconds">00</span>
                        <span class="countdown-label">' + this.options.seconds + '</span>
                    </div>
                </div>
            ';
            
            this.elements = {
                days: this.element.querySelector('[data-unit="days"]'),
                hours: this.element.querySelector('[data-unit="hours"]'),
                minutes: this.element.querySelector('[data-unit="minutes"]'),
                seconds: this.element.querySelector('[data-unit="seconds"]')
            };
        },
        
        start: function() {
            const self = this;
            
            this.interval = setInterval(function() {
                const now = new Date().getTime();
                const distance = self.targetDate - now;
                
                if (distance < 0) {
                    self.stop();
                    if (typeof self.options.onComplete === 'function') {
                        self.options.onComplete();
                    }
                    return;
                }
                
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                self.elements.days.textContent = String(days).padStart(2, '0');
                self.elements.hours.textContent = String(hours).padStart(2, '0');
                self.elements.minutes.textContent = String(minutes).padStart(2, '0');
                self.elements.seconds.textContent = String(seconds).padStart(2, '0');
            }, 1000);
        },
        
        stop: function() {
            clearInterval(this.interval);
        }
    };
    
    /* ==================== المكون: نموذج متقدم (Advanced Form) ==================== */
    const AdvancedForm = {
        init: function(form) {
            this.form = typeof form === 'string' ? document.querySelector(form) : form;
            this.steps = this.form.querySelectorAll('.form-step');
            this.currentStep = 0;
            
            this.createProgressBar();
            this.bindEvents();
        },
        
        createProgressBar: function() {
            const progress = document.createElement('div');
            progress.className = 'form-progress';
            progress.innerHTML = '
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 0%"></div>
                </div>
                <div class="progress-steps"></div>
            ';
            
            this.form.insertBefore(progress, this.form.firstChild);
            
            this.progressBar = progress.querySelector('.progress-fill');
            this.progressSteps = progress.querySelector('.progress-steps');
            
            this.steps.forEach(function(_, index) {
                const step = document.createElement('span');
                step.className = 'progress-step' + (index === 0 ? ' active' : '');
                step.textContent = index + 1;
                this.progressSteps.appendChild(step);
            }, this);
        },
        
        bindEvents: function() {
            const self = this;
            const nextBtn = this.form.querySelector('.btn-next');
            const prevBtn = this.form.querySelector('.btn-prev');
            
            if (nextBtn) {
                nextBtn.addEventListener('click', function() {
                    if (self.validateCurrentStep()) {
                        self.nextStep();
                    }
                });
            }
            
            if (prevBtn) {
                prevBtn.addEventListener('click', function() {
                    self.prevStep();
                });
            }
        },
        
        validateCurrentStep: function() {
            const currentStepEl = this.steps[this.currentStep];
            const required = currentStepEl.querySelectorAll('[required]');
            let isValid = true;
            
            required.forEach(function(input) {
                if (!input.value.trim()) {
                    isValid = false;
                    input.closest('.form-group').classList.add('has-error');
                } else {
                    input.closest('.form-group').classList.remove('has-error');
                }
            });
            
            return isValid;
        },
        
        nextStep: function() {
            if (this.currentStep < this.steps.length - 1) {
                this.steps[this.currentStep].style.display = 'none';
                this.currentStep++;
                this.steps[this.currentStep].style.display = 'block';
                this.updateProgress();
            }
        },
        
        prevStep: function() {
            if (this.currentStep > 0) {
                this.steps[this.currentStep].style.display = 'none';
                this.currentStep--;
                this.steps[this.currentStep].style.display = 'block';
                this.updateProgress();
            }
        },
        
        updateProgress: function() {
            const progress = ((this.currentStep + 1) / this.steps.length) * 100;
            this.progressBar.style.width = progress + '%';
            
            const steps = this.progressSteps.querySelectorAll('.progress-step');
            steps.forEach(function(step, index) {
                if (index <= self.currentStep) {
                    step.classList.add('active');
                } else {
                    step.classList.remove('active');
                }
            });
        }
    };
    
    /* ==================== المكون: شريط التقدم (Progress Bar) ==================== */
    const ProgressBar = {
        init: function(element) {
            this.element = typeof element === 'string' ? document.querySelector(element) : element;
            
            if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver(this.animate.bind(this), {
                    threshold: 0.5
                });
                observer.observe(this.element);
            }
        },
        
        animate: function() {
            const fill = this.element.querySelector('.progress-fill');
            const value = fill.getAttribute('data-value') || 100;
            
            fill.style.width = '0%';
            
            setTimeout(function() {
                fill.style.width = value + '%';
            }, 100);
        }
    };
    
    /* ==================== المكون: نمط القراءة (Reading Mode) ==================== */
    const ReadingMode = {
        isActive: false,
        
        init: function() {
            this.createToggle();
            this.bindEvents();
        },
        
        createToggle: function() {
            this.toggle = document.createElement('button');
            this.toggle.className = 'reading-mode-toggle';
            this.toggle.innerHTML = '<i class="fas fa-book-open"></i>';
            this.toggle.setAttribute('aria-label', 'وضع القراءة');
            this.toggle.style.cssText = 'position: fixed; bottom: 2rem; left: 9rem; width: 45px; height: 45px; display: flex; align-items: center; justify-content: center; background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: 50%; color: var(--text-secondary); cursor: pointer; z-index: 999; transition: all 0.3s ease;';
            
            document.body.appendChild(this.toggle);
        },
        
        bindEvents: function() {
            const self = this;
            
            this.toggle.addEventListener('click', function() {
                self.toggleMode();
            });
        },
        
        toggleMode: function() {
            this.isActive = !this.isActive;
            
            if (this.isActive) {
                document.body.classList.add('reading-mode');
                this.toggle.innerHTML = '<i class="fas fa-times"></i>';
                this.toggle.style.background = 'var(--primary-color)';
                this.toggle.style.borderColor = 'var(--primary-color)';
                this.toggle.style.color = '#fff';
            } else {
                document.body.classList.remove('reading-mode');
                this.toggle.innerHTML = '<i class="fas fa-book-open"></i>';
                this.toggle.style.background = 'var(--bg-tertiary)';
                this.toggle.style.borderColor = 'var(--border-color)';
                this.toggle.style.color = 'var(--text-secondary)';
            }
        }
    };
    
    /* ==================== المكون: النسخ (Copy to Clipboard) ==================== */
    const CopyToClipboard = {
        init: function(selector) {
            const buttons = document.querySelectorAll(selector);
            
            buttons.forEach(function(btn) {
                btn.addEventListener('click', function() {
                    const target = this.getAttribute('data-copy');
                    const content = target ? document.querySelector(target).textContent : this.previousElementSibling.textContent;
                    
                    navigator.clipboard.writeText(content).then(function() {
                        const originalIcon = this.innerHTML;
                        this.innerHTML = '<i class="fas fa-check"></i> تم النسخ';
                        this.style.background = 'var(--success-color)';
                        this.style.borderColor = 'var(--success-color)';
                        
                        setTimeout(function() {
                            this.innerHTML = originalIcon;
                            this.style.background = '';
                            this.style.borderColor = '';
                        }.bind(this), 2000);
                    }.bind(this)).catch(function(err) {
                        console.error('فشل النسخ:', err);
                    });
                });
            });
        }
    };
    
    /* ==================== المكون: المودال (Modal) ==================== */
    const Modal = {
        init: function(triggerSelector, modalSelector) {
            this.triggers = document.querySelectorAll(triggerSelector);
            this.modals = document.querySelectorAll(modalSelector);
            
            this.bindEvents();
        },
        
        bindEvents: function() {
            const self = this;
            
            // فتح المودال
            this.triggers.forEach(function(trigger) {
                trigger.addEventListener('click', function(e) {
                    e.preventDefault();
                    const modalId = this.getAttribute('data-modal');
                    self.open(modalId);
                });
            });
            
            // إغلاق المودال
            document.querySelectorAll('.modal-close, .modal-overlay').forEach(function(closeBtn) {
                closeBtn.addEventListener('click', function() {
                    self.closeAll();
                });
            });
            
            // إغلاق عند الضغط على Escape
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    self.closeAll();
                }
            });
        },
        
        open: function(modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                this.closeAll();
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        },
        
        closeAll: function() {
            this.modals.forEach(function(modal) {
                modal.classList.remove('active');
            });
            document.body.style.overflow = '';
        }
    };
    
    /* ==================== المكون: القائمة المنسدلة (Dropdown) ==================== */
    const Dropdown = {
        init: function(selector) {
            const dropdowns = document.querySelectorAll(selector);
            
            dropdowns.forEach(function(dropdown) {
                const toggle = dropdown.querySelector('.dropdown-toggle');
                
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
            });
        }
    };
    
    /* ==================== المكون: الإشارات المرجعية (Citations) ==================== */
    const Citations = {
        init: function() {
            const citations = document.querySelectorAll('.citation');
            
            citations.forEach(function(citation) {
                citation.addEventListener('click', function() {
                    const refId = this.getAttribute('data-ref');
                    const ref = document.getElementById('ref-' + refId);
                    
                    if (ref) {
                        ref.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        ref.style.backgroundColor = 'rgba(35, 143, 55, 0.1)';
                        setTimeout(function() {
                            ref.style.backgroundColor = '';
                        }, 2000);
                    }
                });
            });
        }
    };
    
    /* ==================== المكون: القائمة الجانبية (Sidebar) ==================== */
    const Sidebar = {
        init: function() {
            this.overlay = document.createElement('div');
            this.overlay.className = 'sidebar-overlay';
            document.body.appendChild(this.overlay);
            
            this.bindEvents();
        },
        
        bindEvents: function() {
            const self = this;
            const sidebarToggle = document.querySelector('.sidebar-toggle');
            
            if (sidebarToggle) {
                sidebarToggle.addEventListener('click', function() {
                    self.toggle();
                });
            }
            
            this.overlay.addEventListener('click', function() {
                self.close();
            });
        },
        
        toggle: function() {
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.toggle('open');
            this.overlay.classList.toggle('active');
            document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
        },
        
        close: function() {
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.remove('open');
            this.overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    };
    
    /* ==================== تهيئة جميع المكونات ==================== */
    function initComponents() {
        // تهيئة الشرائح
        const carouselContainer = document.querySelector('.carousel-container');
        if (carouselContainer) {
            new Carousel.init(carouselContainer);
        }
        
        // تهيئة علامات التبويب
        const tabsContainer = document.querySelector('.tabs-container');
        if (tabsContainer) {
            new Tabs.init(tabsContainer);
        }
        
        // تهيئة التحميل الكسول
        new LazyLoad.init();
        
        // تهيئة نمط القراءة
        new ReadingMode.init();
        
        // تهيئة النسخ
        new CopyToClipboard.init('.copy-btn');
        
        // تهيئة المودال
        new Modal.init('[data-modal]', '.modal-overlay');
        
        // تهيئة القائمة المنسدلة
        new Dropdown.init('.dropdown');
        
        // تهيئة الإشارات المرجعية
        new Citations.init();
        
        // تهيئة القائمة الجانبية
        new Sidebar.init();
        
        // تهيئة أشرطة التقدم
        document.querySelectorAll('.progress-container').forEach(function(el) {
            new ProgressBar.init(el);
        });
    }
    
    /* ==================== بدء التنفيذ ==================== */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initComponents);
    } else {
        initComponents();
    }
    
})();
