$(()=>{
$(".toggler").on("click",()=>{
    $(".nav-mobile").addClass("active");
    $(".nav-mobile-content").addClass("open");
});
$(".close").on("click",()=>{
    $(".nav-mobile").removeClass("active");
    $(".nav-mobile-content").removeClass("open");
});

$('.brand-carousel').owlCarousel({
    loop:true,
    margin:100,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    stagePadding:50,
    dots:false,
    responsive:{
      100:{
          items:1
      },
      400:{
          items:2
      },
        1000:{
            items:3
        },
        1200:{
            items:4
        },
    }
});
$('.hero-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,        
        },
        1400:{
            items:2,    
        },
    }
});
$('.testimonial-carousel').owlCarousel({
    loop:true,
    margin:80,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,  
        },
        800:{
            items:2,   
        },   
    }
});
$('.fashion-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
           items:1,       
        },
        600:{
            items:2,     
        },
        1000:{
            items:3,
        }
    }
});
AOS.init();
});