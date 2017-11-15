$(document).ready(function(){
	$('.slider').slick({
      slidesToShow: 1,
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      autoplay: true,
      slide: 'div',
      autoplaySpeed: 5000   
    });
    $('.slick--batton').on('click',function(e){
    	e.preventDefault();
    	if($(this).hasClass('slick-prev')){
    		$('.slider').slick('slickPrev')
    	}
    	else{
    		$('.slider').slick('slickNext')
    	}
    })
	$('.slider--two').slick({
      slidesToShow: 3,
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000   
    });

    $('.slick--batton--tw').on('click',function(e){
    	e.preventDefault();
    	if($(this).hasClass('slick-prev')){
    		$('.slider--two').slick('slickPrev')
    	}
    	else{
    		$('.slider--two').slick('slickNext')
    	}
    })
});
function initMap() {
        var beetroot = {lat: 49.568353, lng: 34.5864886};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: beetroot
        });
        var marker = new google.maps.Marker({
          position: beetroot,
          map: map,
          icon: 'img/pin.png'
        });
      };