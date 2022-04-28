// get date today and assign to variable dateToday
const dateToday = new Date();
const dateTodayMs = dateToday.getTime();

// set variable dateEndsIn 15 days after dateToday
const month = dateToday.getMonth();
const date = dateToday.getDate();
const year = dateToday.getFullYear();
let dateEndsIn = new Date(year, month, date, 23, 59);
dateEndsIn = dateEndsIn.setDate(dateEndsIn.getDate() + 15);

// subtract dateTodayMs from dateEndsIn and assign to dateDiff

const dateDiff = dateEndsIn - dateTodayMs;
// get days, hours, mins, and secs left before dateEndsIn
const dayMs = 24 * 60 * 60 * 1000;
const hourMs = 60 * 60 * 1000;
const minMs = 60 * 1000
const daysLeft = Math.floor(dateDiff / dayMs);
const hoursLeft = Math.floor((dateDiff % dayMs) / hourMs);
const minsLeft = Math.floor((dateDiff % hourMs) / minMs);
const secsLeft = Math.floor((dateDiff % minMs) / 1000);

// display days, hours, mins, and secs left
const days = document.querySelector('.giveaway__days-left');
const hours = document.querySelector('.giveaway__hours-left');
const mins = document.querySelector('.giveaway__mins-left');
const secs = document.querySelector('.giveaway__secs-left');

days.textContent = formatNum(daysLeft);
hours.textContent = formatNum(hoursLeft);
mins.textContent = formatNum(minsLeft);
secs.textContent = formatNum(secsLeft);

function formatNum(num) {
  if (num <= 9) {
    num = `0${num}`;
  }

  return num;
}