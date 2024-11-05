(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        nav : true,
        loop: true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });
    
})(jQuery);


// Extras
let currentImageIndex = 0;
const images = [
    'img/house1.png',
    'img/house2.png',
    // Add more images as needed
];

function showPortfolioModal(src) {
    currentImageIndex = images.indexOf(src);
    document.getElementById("modalPortfolioImage").src = src;
    document.getElementById("portfolioModal").style.display = "flex"; // Use flex to center
}

function closePortfolioModal() {
    document.getElementById("portfolioModal").style.display = "none";
}

function changeImage(direction) {
    currentImageIndex += direction;

    // Loop back to the start or end of the images array
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; // Go to last image
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Go to first image
    }

    // Update the modal image
    document.getElementById("modalPortfolioImage").src = images[currentImageIndex];
}


// Product Arrows
let currentProductImageIndex = 0;
const productImages = [
    'img/productdemo.png', // Image 1
    'img/productdemo.png', // Image 2
    'img/productdemo.png', // Image 3
    'img/productdemo.png',
    'img/productdemo.png',
    'img/productdemo.png'
];

function showProductImageModal(src) {
    currentProductImageIndex = productImages.indexOf(src);
    document.getElementById("modalImage").src = src;
    document.getElementById("imageModal").style.display = "flex";
}

function closeImageModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Close modal when clicking outside image
document.getElementById("imageModal").addEventListener("click", function(event) {
    if (event.target === this) {
        closeImageModal();
    }
});

function changeProductImage(direction) {
    currentProductImageIndex += direction;

    // Wrap around the image list
    if (currentProductImageIndex < 0) {
        currentProductImageIndex = productImages.length - 1;
    } else if (currentProductImageIndex >= productImages.length) {
        currentProductImageIndex = 0;
    }

    // Update the modal image
    document.getElementById("modalImage").src = productImages[currentProductImageIndex];
}
