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
