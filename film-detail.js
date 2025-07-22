// Film Detail Page JavaScript

// Gallery images for different films
const filmGalleries = {
    'shes-dating-the-gangster': [
        'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080',
        'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080',
        'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080'
    ],
    'seven-sundays': [
        'https://images.unsplash.com/photo-1577003833619-76bbd7f82948?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080',
        'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080'
    ],
    '100-tula-para-kay-stella': [
        'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080',
        'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080'
    ]
};

// Change hero image based on gallery selection
function changeHeroImage(index) {
    const heroImage = document.getElementById('heroImage');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Get current film ID from page URL or title
    const filmId = getCurrentFilmId();
    
    if (filmId && filmGalleries[filmId] && filmGalleries[filmId][index]) {
        heroImage.src = filmGalleries[filmId][index];
        
        // Update active gallery item
        galleryItems.forEach(item => item.classList.remove('active'));
        galleryItems[index].classList.add('active');
    }
}

// Get current film ID from the page
function getCurrentFilmId() {
    const path = window.location.pathname;
    if (path.includes('shes-dating-the-gangster')) return 'shes-dating-the-gangster';
    if (path.includes('seven-sundays')) return 'seven-sundays';
    if (path.includes('100-tula-para-kay-stella')) return '100-tula-para-kay-stella';
    return null;
}

// Initialize film detail page
function initFilmDetail() {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Add click handlers for support and share buttons
    const supportBtn = document.querySelector('.support-btn');
    const shareBtn = document.querySelector('.share-btn');
    
    if (supportBtn) {
        supportBtn.addEventListener('click', function() {
            alert('Thank you for your interest in supporting this film! Feature coming soon.');
        });
    }
    
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            if (navigator.share) {
                navigator.share({
                    title: document.title,
                    text: document.querySelector('meta[name="description"]').content,
                    url: window.location.href
                });
            } else {
                // Fallback for browsers that don't support Web Share API
                navigator.clipboard.writeText(window.location.href).then(function() {
                    alert('Link copied to clipboard!');
                });
            }
        });
    }
}

// Make changeHeroImage available globally
window.changeHeroImage = changeHeroImage;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initFilmDetail();
});