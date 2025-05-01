document.addEventListener("DOMContentLoaded", function() {
  
  const subscribeForm = document.getElementById("subscribe-form"); 

 if (subscribeForm) {
  subscribeForm.addEventListener ("submit", function (event) {
   const email = document.getElementByID ("email");
   const password = document.getElementById("pw");
   const confirmPassword = document.getElementById("pw-conf");

   
      
        if (!email.value.includes("@")) {
        alert("Please enter a valid email address.");
        email.focus();
        event.preventDefault();
        return;
      }

      
      if (password.value !== confirmPassword.value) {
        alert("Passwords do not match.");
        password.focus();
        event.preventDefault();
        return;
      }
    });
  }

  
  const showPassword = document.getElementById("showPassword");
  const pwField = document.getElementById("pw");
  const pwConfField = document.getElementById("pw-conf");

  if (showPassword && pwField && pwConfField) {
    showPassword.addEventListener("change", function() {
      const type = this.checked ? "text" : "password";
      pwField.type = type;
      pwConfField.type = type;
    });
  }
});

