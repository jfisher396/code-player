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

  // changes button background color if selected and removes if deselected. Also, removes highlight when clicked.
  $(".toggle-button").click(function () {
    $(this).toggleClass("active");
    $(this).removeClass("highlighted-button");
  });

  // makes the textarea height equal to window height minus the height of the header
  $("textarea").height($(window).height() - $("#header").height() - 15);
  $(".panel").width(($(window).width() / 2) - 10);
});
