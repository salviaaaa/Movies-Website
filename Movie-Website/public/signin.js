$(document).ready(function() {
  // add event listener btn "send now"
  $("#submit-button").click(function(event) {
    
    // Prevent the form from submitting
    event.preventDefault();

    // Get the input fields and their values
    var email = $("#email").val().trim();
    var password = $("#password").val().trim();
    
    // Menghapus pesan error sebelumnya
    $("#email-error").text("").hide();
    $("#password-error").text("").hide();
    
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

    // If all validations pass
    if (valid) {
      // Check user credentials in Firebase
      const dbRef = ref(db);
      get(child(dbRef, `users/${email.replace('.', '_')}`)).then((snapshot) => {
          if (snapshot.exists()) {
              const userData = snapshot.val();
              if (userData.password === password) {
                  alert("Login successfully!");
                  window.location.href = "home.html"; // Redirect to home.html after successful login
              } else {
                  $("#password-error").text("Invalid password!").show();
              }
          } else {
              $("#email-error").text("No user found with this email!").show();
          }
      }).catch((error) => {
          console.error(error);
          alert("Error fetching user data!");
      });
    }
  });

  // add event listener btn "cancel"
  $("#cancel-button").click(function(event) {
    // Reset the form to clear all fields
    $("#signin-form")[0].reset();
    // Menghapus pesan error sebelumnya
    $("#email-error").text("").hide();
    $("#password-error").text("").hide();
  });
});