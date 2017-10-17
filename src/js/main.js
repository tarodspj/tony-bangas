
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

$(document).ready(function() {
  isMob = detectmob(); //check if we are in a mobile
  if(isMob) {
    console.log('telefono');
  } else {
    console.log('pc');
  }
  startAnimation('animateLogo'); // when everything is loaded I start the logo animation

});
