$(document).ready(function() {
  // var pretitle = "JCC Blog - ";
  // var pretitle_empty = "JCC Blog";
  // var title = $("#title").text();
  // var __path = window.location.pathname;

  // if (__path !== "/") {
  //   if (!!title) {
  //     $(document).prop("title", pretitle + title);
  //   } else {
  //     $(document).prop("title", pretitle_empty);
  //   }
  // }

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  $(".loading").hide();
});
