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
        // Redirect to signin.html
        window.location.href = "signin.html";
      }
    });

    // add event listener btn "cancel"
    $("#cancel-button").click(function(event) {
      // Reset the form to clear all fields
      $("#signup-form")[0].reset();
      // Menghapus pesan error sebelumnya
      $("#email-error").text("").hide();
      $("#password-error").text("").hide();
      $("#confirm-password-error").text("").hide();
    });
});