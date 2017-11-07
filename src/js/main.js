
var activeSectionMenu = 'activeSection',
    heightMenu = 0,
    heightSectionsArray = [['home', 0]];
    //i need an array or object with the height of each section as global

$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};

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

function changeActiveSection(newActive){
  //console.log(newActive);
  newActive = newActive.replace('Container','');
  //console.log(newActive);
  $('.' + activeSectionMenu).removeClass(activeSectionMenu);
  $('*[data-goto="' + newActive + '"]').addClass(activeSectionMenu);
}

function listeners(){
  $('#listenerMenu').on('click', function(){
    toggleMenu();
  });

  $('.goSection').on('click', function(){
    var $this = $(this),
    whereToGo = $this.attr('data-goto');
    // console.log(whereToGo);
    // console.log($('#' + whereToGo).offset().top);

    toggleMenu();

    // $('.'+activeSectionMenu).removeClass(activeSectionMenu);
    // $this.addClass(activeSectionMenu);
    changeActiveSection($this.attr('data-goto'));
    $('html, body').animate({
        scrollTop: $('#' + whereToGo).offset().top - heightMenu
    }, 1300);
  });

  //control the resize to recalculate the height of each section and where im now
function checkInMenu(fromTop) {
  var i = 0,
      manySections = heightSectionsArray.length;
  for(i==0; i< manySections; i++){
    if(fromTop > heightSectionsArray[i][1] && fromTop < heightSectionsArray[i+1][1]){
      changeActiveSection(heightSectionsArray[i][0]); //mal
    }
  }
}

$(window).scrollEnd(function(){
  var fromTop = $(this).scrollTop()+heightMenu;
  //console.log(fromTop);
  checkInMenu(fromTop);
}, 200);
  // $(window).scroll(function(){
  //    // Get container scroll position
  //    var fromTop = $(this).scrollTop()+heightMenu;
  //    console.log(fromTop);
  // });

}


$(document).ready(function() {
  isMob = detectmob(); //check if we are in a mobile
  heightMenu = $('#menuSuperior').height();

  if(isMob) {
    console.log('telefono');
  } else {
    console.log('pc');
  }

  startAnimation('animateLogo'); // when everything is loaded I start the logo animation
  listeners();

  var heightAccumulator = 0;
  $('.section').each(function( index ) {
    //console.log($(this).outerHeight());
    var $this = $(this),
        id = $this.attr('id'),
        height = $this.height();

    heightSectionsArray.push([id, height + heightAccumulator]);

    heightAccumulator = height + heightAccumulator;

  });

});
