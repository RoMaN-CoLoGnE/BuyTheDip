// Function to update elapsed time since the target date
function updateElapsedTime() {
  const targetDate = new Date('2023-11-12T20:30:00+01:00'); // Target date and time (12th November 2023, 8:30 PM MET)
  const currentDate = new Date(); // Current date and time

  const timeDifference = currentDate - targetDate; // Difference between the two times

  if (timeDifference < 0) {
    // The target date is in the future
    document.querySelector('.countdown__time').textContent =
      'The target date is in the future.';
  } else {
    // Calculate elapsed days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update the countdown element
    const countdownElement = document.querySelector('.countdown__time');
    countdownElement.textContent = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
  }
}

// Update elapsed time every 1 second
setInterval(updateElapsedTime, 1000);

// Call the function when the page loads
updateElapsedTime();
