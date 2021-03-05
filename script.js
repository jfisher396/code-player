console.log("script.js is working");

$(document).ready(function () {
    // changes background color of buttons when hovered over
  $(".toggle-button").hover(
    function () {
      $(this).addClass("highlighted-button");
    },
    function () {
      $(this).removeClass("highlighted-button");
    }
  );

  //
  $(".toggle-button").click(function() {
      $(this).toggleClass("active")
  })
});
