const audio = document.getElementById('myAudio');

audio.addEventListener('play', function () {
  console.log('Audio is playing');
});

audio.addEventListener('pause', function () {
  console.log('Audio is paused');
});

audio.addEventListener('ended', function () {
  console.log('Audio playback has ended');
});

audio.addEventListener('timeupdate', function () {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  console.log(
    `Current time: ${currentTime.toFixed(
      2
    )} seconds / Duration: ${duration.toFixed(2)} seconds`
  );
});
