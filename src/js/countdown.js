// Set the target date and time
const targetDate = new Date('2023-11-12T20:30:00Z').getTime();

// Update the countdown function
function updateCountdown() {
  const currentDate = new Date().getTime();
  const remainingTime = targetDate - currentDate;

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  const countdownElement = document.getElementById('countdown');
  countdownElement.innerHTML =
    days +
    ' Days ' +
    hours +
    ' Hours ' +
    minutes +
    ' Minutes ' +
    seconds +
    ' Seconds ';

  if (remainingTime <= 0) {
    countdownElement.innerHTML = 'Countdown expired!';
  }
}

// Initialize the countdown
updateCountdown();

// Update the countdown every 1 second
setInterval(updateCountdown, 1000);
