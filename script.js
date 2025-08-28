// EDF Outlet Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Store locator button functionality
    const storeLocatorBtn = document.querySelector('.btn-store-locator');
    if (storeLocatorBtn) {
        storeLocatorBtn.addEventListener('click', function() {
            // Scroll to outlet locations section
            const locationsSection = document.querySelector('.outlet-locations');
            if (locationsSection) {
                locationsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Directions buttons functionality
    const directionsBtns = document.querySelectorAll('.btn-directions');
    directionsBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const locationCard = this.closest('.location-card');
            const locationName = locationCard.querySelector('h3').textContent;
            
            // You can integrate with Google Maps API here
            alert(`Opening directions to ${locationName} in Google Maps...`);
        });
    });

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.style.opacity = '0.5';
            console.warn('Image failed to load:', this.src);
        });
    });

    // Mobile menu toggle (if needed in the future)
    let isMobileMenuOpen = false;
    
    function toggleMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;
        // Add mobile menu functionality here when needed
    }

    // Add scroll-based animations
    function handleScroll() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-image, .category-item, .location-card');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }

    // Throttle scroll events for performance
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(handleScroll);
            ticking = true;
        }
    }

    // Only add scroll effects on larger screens
    if (window.innerWidth > 768) {
        window.addEventListener('scroll', requestTick);
    }

    // Initialize any additional functionality
    console.log('EDF Outlet Landing Page loaded successfully!');
});
