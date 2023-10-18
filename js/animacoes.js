$(document).ready(function(){
    $('.servicopai').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        responsive: [
            {
                breakpoint: 768, // Adjust this value as needed
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480, // Adjust this value as needed
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // Add more breakpoints and settings as needed
        ]
    });
});


