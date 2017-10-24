
var activeSectionMenu = 'activeSection',
    heightMenu = 0;
    //i need an array or object with the height of each section as global

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
    console.log($('#' + whereToGo).offset().top);

    toggleMenu();

    $('.'+activeSectionMenu).removeClass(activeSectionMenu);
    $this.addClass(activeSectionMenu);
    $('html, body').animate({
        scrollTop: $('#' + whereToGo).offset().top - heightMenu
    }, 1300);
  });

  //control the resize to recalculate the height of each section and where im now

  $(window).scroll(function(){
     // Get container scroll position
     var fromTop = $(this).scrollTop()+heightMenu;
     console.log(fromTop);
  });

}


// Cache selectors
// var lastId,
//     topMenu = $("#top-menu"),
//     topMenuHeight = topMenu.outerHeight()+15,
//     // All list items
//     menuItems = topMenu.find("a"),
//     // Anchors corresponding to menu items
//     scrollItems = menuItems.map(function(){
//       var item = $($(this).attr("href"));
//       if (item.length) { return item; }
//     });

// Bind click handler to menu items
// so we can get a fancy scroll animation
// menuItems.click(function(e){
//   var href = $(this).attr("href"),
//       offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
//   $('html, body').stop().animate({
//       scrollTop: offsetTop
//   }, 300);
//   e.preventDefault();
// });

// Bind to scroll
//$(window).scroll(function(){
   // Get container scroll position
   //var fromTop = $(this).scrollTop()+heightMenu;
   //console.log(fromTop);
   // Get id of current scroll item
  //  var cur = scrollItems.map(function(){
  //    if ($(this).offset().top < fromTop)
  //      return this;
  //  });
   // Get the id of the current element
  //  cur = cur[cur.length-1];
  //  var id = cur && cur.length ? cur[0].id : "";
  //
  //  if (lastId !== id) {
  //      lastId = id;
       // Set/remove active class
  //      menuItems
  //        .parent().removeClass("active")
  //        .end().filter("[href='#"+id+"']").parent().addClass("active");
  //  }
//});

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
});
