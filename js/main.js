const menu = document.querySelector(".menu");
const menulang = document.querySelector(".menu__lang");
const menuItems = document.querySelectorAll(".menuItem");
const menuItemsLang = document.querySelectorAll(".menuItemLang");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const wld = document.querySelector(".loader-wrapper");


function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    wrapperMenu.classList.remove('open');

    setTimeout(function(){
      menulang.classList.remove("showMenu");
    }, 120); 

  } else {
    menu.classList.add("showMenu");

    setTimeout(function(){
      menulang.classList.add("showMenu");
    }, 120); 

  }
}

var wrapperMenu = document.querySelector('.wrapper-menu');
wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('open');
  toggleMenu();
})

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

$.fn.slideFadeToggle  = function(speed, easing, callback) {
  return this.animate({opacity: 'toggle', bottom: '11px'}, 750, easing, callback);
};

$(document ).ready(function(){

 
  const myTimeout = setTimeout(down, 3500);

  function down() {
    $(".down").addClass('down-loaded')
}
});

$(window).on("scroll", function() {
  var scrollPos = $(window).scrollTop();
  if (scrollPos <= 200) {
      $(".down").addClass("down-loaded");
      $(".hamburger, .menu, .menu__lang").css("margin-right", "-27%");
  } else {
    $(".down").removeClass("down-loaded");
      $(".hamburger, .menu, .menu__lang").css("margin-right", "");
  }
});

$(window).on('load', function() {
  $("body").removeClass("preload");
});

$('#landing').waypoint(function() {
  $('.menuItem').removeClass("active");
  $('#ld').addClass("active");
}, {
  offset: '-25%'
}
)
$('#aboutme').waypoint(function() {
  $('.menuItem').removeClass("active");
  $('#am').addClass("active");
}, {
  offset: '25%'
}
)
$('#project').waypoint(function() {
  $('.menuItem').removeClass("active");
  $('#pj').addClass("active");
}, {
  offset: '25%'
}
)
$('#contact').waypoint(function() {
  $('.menuItem').removeClass("active");
  $('#ct').addClass("active");
}, {
  offset: '75%'
}
)

$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + 150 + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top  + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(700,1);}
      } else { //object goes out of view (scrolling up)
        
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});

function scrollToElement(pageElement) {    
  var positionX = 0,         
      positionY = 0;    

  while(pageElement != null){        
      positionX += pageElement.offsetLeft - 50;        
      positionY += pageElement.offsetTop - 50;        
      pageElement = pageElement.offsetParent;        
      window.scrollTo(positionX, positionY);    
  }
}

var pageElement = document.getElementById("poem");

$( ".social_section" ).click(function() {
  scrollToElement(pageElement);
});
$( ".social_section__img" ).click(function() {
  scrollToElement(pageElement);
});

let Scrollbar = window.Scrollbar;

Scrollbar.init(document.querySelector('head'))