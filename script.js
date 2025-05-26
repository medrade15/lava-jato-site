// Loading screen
        window.addEventListener('load', function() {
            const loading = document.getElementById('loading');
            setTimeout(() => {
                loading.style.opacity = '0';
                setTimeout(() => {
                    loading.style.display = 'none';
                }, 500);
            }, 1000);
        });

        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Animation on scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.fade-in-up');
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        }

        // Initialize fade-in elements
        document.querySelectorAll('.fade-in-up').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(50px)';
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        });

        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);

        // Header background on scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(0, 0, 0, 0.95)';
            } else {
                header.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #000 100%)';
            }
        });

        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.name || !data.phone || !data.email) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });

        // Mobile menu toggle (if needed)
        const createMobileMenu = () => {
            if (window.innerWidth <= 768) {
                const nav = document.querySelector('nav');
                const navLinks = document.querySelector('.nav-links');
                
                if (!document.querySelector('.mobile-menu-btn')) {
                    const mobileBtn = document.createElement('button');
                    mobileBtn.className = 'mobile-menu-btn';
                    mobileBtn.innerHTML = '☰';
                    mobileBtn.style.cssText = `
                        background: none;
                        border: none;
                        color: #fff;
                        font-size: 1.5rem;
                        cursor: pointer;
                        display: block;
                    `;
                    
                    mobileBtn.addEventListener('click', () => {
                        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
                        navLinks.style.flexDirection = 'column';
                        navLinks.style.position = 'absolute';
                        navLinks.style.top = '100%';
                        navLinks.style.left = '0';
                        navLinks.style.right = '0';
                        navLinks.style.background = '#000';
                        navLinks.style.padding = '1rem';
                    });
                    
                    nav.appendChild(mobileBtn);
                }
            }
        };

        window.addEventListener('resize', createMobileMenu);
        createMobileMenu();

        // Parallax effect for hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            const rate = scrolled * -0.5;
            
            if (hero) {
                hero.style.transform = `translateY(${rate}px)`;
            }
        });

        // Service card hover effects
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Price highlight animation
        document.querySelectorAll('.price-tag').forEach(price => {
            price.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
                this.style.boxShadow = '0 8px 25px rgba(255, 0, 0, 0.5)';
            });
            
            price.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '0 5px 15px rgba(255, 0, 0, 0.3)';
            });
        });