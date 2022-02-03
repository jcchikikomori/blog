// BulmaJS
require("bulmajs")

// LazyYouTube
require("@justinribeiro/lite-youtube")

// DayJS
const dayjs = require("dayjs")

// JQuery
import $  from "jquery"
window.$ = window.jQuery = $

// Google Analytics
// TODO: Use a different bundle
window.dataLayer = window.dataLayer || []
function gtag(){dataLayer.push(arguments)}
gtag('js', new Date())
gtag('config', 'UA-53297367-3')

$(function() {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").on("click", function() {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active")
    $(".navbar-menu").toggleClass("is-active")
  })

  $(".loading").fadeOut()

  $("#year").text(dayjs().format("YYYY"))
})
