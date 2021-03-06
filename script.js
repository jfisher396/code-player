console.log("script.js is working");

    

$(document).ready(function () {

    function updateOutput() {
        
        $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#css-panel").val() + "</style></head><body>" + $("#html-panel").val() + "</body></html>");
        document.getElementById("output-panel").contentWindow.eval($("#javascript-panel").val());
    }
    
  // changes background color of buttons when hovered over
  $(".toggle-button").hover(
    function () {
      $(this).addClass("highlighted-button");
    },
    function () {
      $(this).removeClass("highlighted-button");
    }
  );

  // event listener for button clicks
  $(".toggle-button").click(function () {
    // toggles the class "active" on and off
    $(this).toggleClass("active");
    // removes the highlight of the button
    $(this).removeClass("highlighted-button");
    // gets the name of the button and makes it into a variable
    const panelId = $(this).attr("id") + "-panel";
    // toggles the hidden class on and off
    $("#" + panelId).toggleClass("hidden");
    // determines the number of active panels and adjusts each's width accordingly
    const activePanels = 4 - $(".hidden").length;
    console.log(activePanels);
    $(".panel").width(($(window).width() / activePanels) -10);
  });

  // makes the textarea height equal to window height minus the height of the header
  $(".panel").height($(window).height() - $("#header").height() - 15);

  $(".panel").width(($(window).width() / 2) - 10);

  updateOutput();

  // sets the contents of the output panel to whatever is in the html panel on page load
  $("iframe").contents().find("html").html($("#html-panel").val());

  // refreshes the contents of the output panel if any changes are made to the other panels
  $("textarea").on("change keyup paste", function () {
    updateOutput()
  });
  
});
