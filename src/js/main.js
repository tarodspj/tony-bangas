
var activeSectionMenu = 'activeSection';

function detectmob() {
 if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)){
    return true;
  } else {
    return false;
  }
}
function startAnimation( animation) {
	var elements = document.getElementsByClassName( animation );
	for (var i=0; i<elements.length; i++) {
		elements[i].style.animationPlayState = "running";
		elements[i].style.webkitAnimationPlayState = "running";
		elements[i].style.MozAnimationPlayState = "running";

	}
}
function toggleMenu(){
  $('#menuSuperior').toggleClass('uncollapsedMenu');
}

function listeners(){
  $('#listenerMenu').on('click', function(){
    toggleMenu();
  });

  $('.goSection').on('click', function(){
    var $this = $(this),
    whereToGo = $this.attr('data-goto');
    console.log(whereToGo);

    toggleMenu();

    $('.'+activeSectionMenu).removeClass(activeSectionMenu);
    $this.addClass(activeSectionMenu);
    $('html, body').animate({
        scrollTop: $('#' + whereToGo).offset().top
    }, 1300);
  });

}

$(document).ready(function() {
  isMob = detectmob(); //check if we are in a mobile
  if(isMob) {
    console.log('telefono');
  } else {
    console.log('pc');
  }
  startAnimation('animateLogo'); // when everything is loaded I start the logo animation
  listeners();
});
