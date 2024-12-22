const countdownElement = document.getElementById("countdown");

// Set the target date and time
const targetDate = new Date("2024-12-24T22:30:00").getTime();

// Store the target date in localStorage if not already set
if (!localStorage.getItem("countdownTarget")) {
  localStorage.setItem("countdownTarget", targetDate);
}

// Retrieve the target date from localStorage
const storedTargetDate = parseInt(localStorage.getItem("countdownTarget"));

// Function to calculate and display the countdown
function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = storedTargetDate - now;

  if (timeRemaining > 0) {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    countdownElement.textContent = "Time's up!";
    clearInterval(countdownInterval);
  }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();