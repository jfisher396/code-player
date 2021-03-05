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
  //makes the panels each half of the window minus 10 pixels
  $(".panel").width($(window).width() / 2 - 10);
  // sets the contents of the output panel to whatever is in the html panel on page load
  $("iframe").contents().find("html").html($("#html-panel").val());
  // refreshes the contents of the output panel if any changes are made to the html panel
  $("textarea").on("change keyup paste", function () {
    $("iframe").contents().find("html").html($("#html-panel").val());
  });
});
