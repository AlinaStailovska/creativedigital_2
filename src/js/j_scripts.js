// 'use strict';

$(document).ready(function(){

	//slider`s working
      $('.slider').slick({
		  
		dots: true,
		arrows: true,
		infinite: true,
		autoplay: true,
		speed: 300,
	});

     //to scroll smoothly 
      $("#scroll").on("click","a", function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
})

// map`s working
function initMap() {
        var uluru = {lat: -34.397, lng: 150.644};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru,
          
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          icon: "../img/pin.png"
        });
      }
      

// to scroll top
var t;
function up() {
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0,-100);
    t = setTimeout('up()',40);
  } else clearTimeout(t);
  return false;
}

