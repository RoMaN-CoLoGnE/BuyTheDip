const moment = require('moment');
require('moment-timezone');

document.addEventListener('DOMContentLoaded', function () {
  function updateTimes() {
    // Aktuelle Zeit in UTC
    let now = moment.utc();

    // Frankfurt Zeit
    let frankfurtTime = now.tz('Europe/Berlin');
    document.getElementById('time-frankfurt').textContent =
      formatTime(frankfurtTime);

    // Dubai Zeit
    let dubaiTime = now.tz('Asia/Dubai');
    document.getElementById('time-dubai').textContent = formatTime(dubaiTime);

    // Tokyo Zeit
    let tokyoTime = now.tz('Asia/Tokyo');
    document.getElementById('time-tokyo').textContent = formatTime(tokyoTime);

    // Sydney Zeit
    let sydneyTime = now.tz('Australia/Sydney');
    document.getElementById('time-sydney').textContent = formatTime(sydneyTime);

    // Los Angeles Zeit
    let losAngelesTime = now.tz('America/Los_Angeles');
    document.getElementById('time-los-angeles').textContent =
      formatTime(losAngelesTime);

    // New York Zeit
    let newYorkTime = now.tz('America/New_York');
    document.getElementById('time-new-york').textContent =
      formatTime(newYorkTime);

    // Bangkok Zeit
    let bangkokTime = now.tz('Asia/Bangkok');
    document.getElementById('time-bangkok').textContent =
      formatTime(bangkokTime);

    // Auckland Zeit
    let aucklandTime = now.tz('Pacific/Auckland');
    document.getElementById('time-auckland').textContent =
      formatTime(aucklandTime);
  }

  function formatTime(time) {
    return time.format('HH:mm:ss');
  }

  setInterval(updateTimes, 1000); // Aktualisieren alle 1 Sekunde
});

// document.addEventListener('DOMContentLoaded', function () {
//   function updateTimes() {
//     let now = new Date();

//     // Франкфурт +2 UTC
//     let frankfurtTime = new Date(
//       now.getUTCFullYear(),
//       now.getUTCMonth(),
//       now.getUTCDate(),
//       now.getUTCHours() + 2,
//       now.getUTCMinutes(),
//       now.getUTCSeconds()
//     );
//     document.getElementById('time-frankfurt').textContent =
//       formatTime(frankfurtTime);

//     // Дубай +4 UTC
//     let dubaiTime = new Date(
//       now.getUTCFullYear(),
//       now.getUTCMonth(),
//       now.getUTCDate(),
//       now.getUTCHours() + 4,
//       now.getUTCMinutes(),
//       now.getUTCSeconds()
//     );
//     document.getElementById('time-dubai').textContent = formatTime(dubaiTime);

//     // Токио +9 UTC
//     let tokyoTime = new Date(
//       now.getUTCFullYear(),
//       now.getUTCMonth(),
//       now.getUTCDate(),
//       now.getUTCHours() + 9,
//       now.getUTCMinutes(),
//       now.getUTCSeconds()
//     );
//     document.getElementById('time-tokyo').textContent = formatTime(tokyoTime);

//     // Сидней +10 UTC
//     let sydneyTime = new Date(
//       now.getUTCFullYear(),
//       now.getUTCMonth(),
//       now.getUTCDate(),
//       now.getUTCHours() + 10,
//       now.getUTCMinutes(),
//       now.getUTCSeconds()
//     );
//     document.getElementById('time-sydney').textContent = formatTime(sydneyTime);

//     // Лос-Анджелес -7 UTC
//     let losAngelesTime = new Date(
//       now.getUTCFullYear(),
//       now.getUTCMonth(),
//       now.getUTCDate(),
//       now.getUTCHours() - 7,
//       now.getUTCMinutes(),
//       now.getUTCSeconds()
//     );
//     document.getElementById('time-los-angeles').textContent =
//       formatTime(losAngelesTime);

//     // Нью-Йорк -4 UTC
//     let newYorkTime = new Date(
//       now.getUTCFullYear(),
//       now.getUTCMonth(),
//       now.getUTCDate(),
//       now.getUTCHours() - 4,
//       now.getUTCMinutes(),
//       now.getUTCSeconds()
//     );
//     document.getElementById('time-new-york').textContent =
//       formatTime(newYorkTime);

//     // Бангкок +7 UTC
//     let bangkokTime = new Date(
//       now.getUTCFullYear(),
//       now.getUTCMonth(),
//       now.getUTCDate(),
//       now.getUTCHours() + 7,
//       now.getUTCMinutes(),
//       now.getUTCSeconds()
//     );
//     document.getElementById('time-bangkok').textContent =
//       formatTime(bangkokTime);

//     // Окленд +12 UTC
//     let aucklandTime = new Date(
//       now.getUTCFullYear(),
//       now.getUTCMonth(),
//       now.getUTCDate(),
//       now.getUTCHours() + 12,
//       now.getUTCMinutes(),
//       now.getUTCSeconds()
//     );
//     document.getElementById('time-auckland').textContent =
//       formatTime(aucklandTime);
//   }

//   function formatTime(time) {
//     return (
//       ('0' + time.getHours()).slice(-2) +
//       ':' +
//       ('0' + time.getMinutes()).slice(-2) +
//       ':' +
//       ('0' + time.getSeconds()).slice(-2)
//     );
//   }

//   setInterval(updateTimes, 1000); // обновлять каждую секунду
// });
