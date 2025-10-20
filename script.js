document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.getElementById("time");

  // Function to update current time in milliseconds
  function updateTime() {
    timeElement.textContent = Date.now();
  }

  // call function immediately on load
  updateTime();

  // update every second (1000 ms)
  setInterval(updateTime, 1000);
});

//
//
//
//
// Contact page
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const success = document.getElementById("success");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    // clear previous errors
    document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    // Validation
    if (name.value.trim() === "") {
      valid = false;
      document.getElementById("error-name").textContent = "Name is required.";
    }

    if (email.value.trim() === "") {
      valid = false;
      document.getElementById("error-email").textContent = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      valid = false;
      document.getElementById("error-email").textContent =
        "Enter a valid email.";
    }

    if (subject.value.trim() === "") {
      valid = false;
      document.getElementById("error-subject").textContent =
        "Subject is required.";
    }

    if (message.value.trim().length < 10) {
      valid = false;
      document.getElementById("error-message").textContent =
        "Message must be at least 10 characters.";
    }

    // Show success if all valid
    if (valid) {
      success.hidden = false;
      form.reset();
      document
        .querySelectorAll(".error")
        .forEach((el) => (el.textContent = ""));
    } else {
      success.hidden = true;
    }
  });
});
