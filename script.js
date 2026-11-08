// --- Lightbox / Image Zoom Functionality ---
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeLightbox = document.querySelector('.close-lightbox');
const mediaCards = document.querySelectorAll('.media-card');

mediaCards.forEach(card => {
    card.addEventListener('click', () => {
        const img = card.querySelector('img');
        const caption = card.querySelector('.card-caption');
        
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        lightboxCaption.textContent = caption.textContent;
    });
});

// Close Lightbox when clicking 'X' or outside the image
closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});


// --- Smooth Entrance Animations on Scroll ---
const observeElements = (className) => {
    const elements = document.querySelectorAll(className);
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
};

// Fire animation when elements scroll into view
window.addEventListener('DOMContentLoaded', () => {
    observeElements('.media-card');
    observeElements('.video-card');
    observeElements('.wish-card');
});
