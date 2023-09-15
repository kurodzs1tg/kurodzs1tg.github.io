var today = new Date();
var curHr = today.getHours();

function toggleWelcomeVI() {
  setTimeout(function () {
    if (curHr < 12) {
      $(".landing__content--maintitle").text("Chào buổi sáng!");
    } else if (curHr < 18) {
      $(".landing__content--maintitle").text("Buổi chiều vui vẻ");
    } else {
      $(".landing__content--maintitle").text("Buổi tối vui vẻ");
    }
      }, 1000);
}
toggleWelcomeVI();

function toggleLangEN() {
  $('.wrapper-menu').click();
  $(".loader-wrapper").animate({top:'0'},1000);

  setTimeout(function () {
    window.history.replaceState('pagevi', 'etylix.', '/en');
      }, 2700);


  setTimeout(function () {
      window.location.replace("/en");
      }, 2700);
}