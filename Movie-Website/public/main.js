$(document).ready(function() {
  // Initialize a Swiper object for popular content slideshows
  var swiper = new Swiper(".popular-content", {
    slidesPerView: 1, // Displays one slide per view
    spaceBetween: 10, // Distance between slides
    autoplay: { // Settings to automatically play slideshow
      delay: 5500, // Delay time between slides (in milliseconds)
      disableOnInteraction: false // Does not auto disable on user interaction
    },
    pagination: { // Configure pagination (slide numbering)
      el: ".swiper-pagination", // Location of the pagination element
      clickable: true // Allows the user to click on the slide number
    },
    navigation: { // Configure navigation buttons
      nextEl: ".swiper-button-next", // Next slide button
      prevEl: ".swiper-button-prev" // Previous slide button
    },
    breakpoints: { // Breakpoints for responsive slideshows
      280: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      510: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      758: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }
  });

  // Get the movie playback button element
  let playButton = $(".bx.bx-right-arrow.play-movie");
  // Gets the video container element
  let video = $(".video-container");
  // Get the video element
  let myvideo = $("#myvideo")[0];
  // Get the button element to close the video
  let closebtn = $(".close-video");

  // Event listener for movie play button clicks
  playButton.on("click", function() {
    // Add class to display video
    video.addClass("show-video");
    // Start video playback
    myvideo.play();
  });

  // Tambahkan event listener untuk tombol tutup video
  closebtn.on("click", function() {
    // Hapus class untuk menyembunyikan video
    video.removeClass("show-video");
    // Hentikan pemutaran video
    myvideo.pause();
    // Setel ulang waktu video ke awal
    myvideo.currentTime = 0;
  });


 /*============== 
VALIDATION FORM 
===============*/
$(document).ready(function() {
    // add event listener btn "send now"
    $("#submit-button").click(function(event) {
      
      // Prevent the form from submitting
      event.preventDefault();
  
      // Get the input fields and their values
      var email = $("#email").val().trim();
      var password = $("#password").val().trim();
      var confirmPassword = $("#confirm-password").val().trim();
  
      // Menghapus pesan error sebelumnya
      $("#email-error").text("").hide();
      $("#password-error").text("").hide();
      if ($("#confirm-password").length > 0) {
        $("#confirm-password-error").text("").hide();
      }
  
      // Validation checks
      var valid = true;
  
      // Check if the email field is empty
      if (email === "") {
        $("#email-error").text("Email is required.").show();
        valid = false;
      // Check if the email field contains an "@" symbol
      } else if (!email.includes("@gmail.com")) {
        $("#email-error").text("Please enter a valid email address.").show();
        valid = false;
      }

      if (password === "") {
        $("#password-error").text("Password is required.").show();
        valid = false;
      } else if (password.length < 8) {
        $("#password-error").text("Password must be at least 8 characters.").show();
        valid = false;
      }

      if ($("#confirm-password").length > 0) {
        if (confirmPassword === "") {
          $("#confirm-password-error").text("Confirm Password is required.").show();
          valid = false;
        } else if (password !== confirmPassword) {
          $("#confirm-password-error").text("Passwords do not match.").show();
          valid = false;
        }
      }
  
      // If all validations pass
      if (valid) {
        // Display a success message
        alert("Successfully!");
  
        // Reset the form to clear all fields
        $("#signin-form, #signup-form")[0].reset();
      }
    });
});

});