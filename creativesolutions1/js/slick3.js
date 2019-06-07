$(document).ready(
    function(){
    $('.slick__slide1').slick({
    
infinite: true,
speed: 300,
slidesToShow: 3,
adaptiveHeight: true,
slidesToScroll: 1,
responsive: [
	    {
	      breakpoint: 768,
	      settings: {
            adaptiveHeight: true,
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 376,
	      settings: {
	        slidesToShow: 1,
	      }
	    }]
    
    });
    
  });
