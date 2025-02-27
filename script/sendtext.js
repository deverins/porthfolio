function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var description = document.getElementById("description").value;

    // Create a mailto link with the collected information
    var mailtoLink = "mailto:olayiwolapamilerin34@gmail.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + description);

    // Open the mail client with the populated mailto link
    window.location.href = mailtoLink;
  }