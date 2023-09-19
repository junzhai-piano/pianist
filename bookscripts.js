// script.js
const bookingForm = document.getElementById("booking-form");

bookingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const message = document.getElementById("message").value;

  // You can customize the behavior here, such as sending the data to a server or displaying a confirmation message.
  // For now, we'll just display an alert with the collected data.
  alert(
    `Booking Details:\nName: ${name}\nEmail: ${email}\nDate: ${date}\nTime: ${time}\nMessage: ${
      message || "N/A"
    }`
  );

  // Reset the form
  bookingForm.reset();
});
