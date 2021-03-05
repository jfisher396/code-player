console.log("script.js is working");

$(document).ready(function () {
  $(".toggle-button").hover(
    function () {
      $(this).css("background-color", "grey");
    },
    function () {
      $(this).css("background-color", "#EEEEEE");
    }
  );
});
