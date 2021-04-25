$(document).ready(function() {
  var pretitle = "JCC Blog - ";
  var title = $("#title").text() || "Articles";
  var __path = window.location.pathname;

  if (__path !== "/") {
    $(document).prop("title", pretitle + title);
  }

  $(".loading").hide();

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});