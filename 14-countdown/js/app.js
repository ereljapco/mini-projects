// set giveaway start date
const startFullDate = new Date(2022, 3, 28);

// set giveaway end date
const durationDays = 15;

const startMonth = startFullDate.getMonth();
const startDate = startFullDate.getDate();
const startYear = startFullDate.getFullYear();

let endFullDate = new Date(startYear, startMonth, startDate, 23, 59);
endFullDate.setDate(endFullDate.getDate() + durationDays);

// display remaining time until ending date
setInterval(displayRemainingTime, 1000, endFullDate);

// display ending date and time for the giveaway
displayEndingDate(endFullDate);

// display days, hours, mins, and secs left
function displayRemainingTime(endingDate) {
  // get date today and assign to variable dateToday
  const dateToday = new Date();
  const dateTodayMs = dateToday.getTime();

  // convert date to ms
  const dateEndsInMs = endingDate;

  // subtract dateTodayMs from dateEndsIn and assign to dateDiff
  const dateDiff = dateEndsInMs - dateTodayMs;

  // get days, hours, mins, and secs left before dateEndsIn
  const dayMs = 24 * 60 * 60 * 1000;
  const hourMs = 60 * 60 * 1000;
  const minMs = 60 * 1000
  const daysLeft = Math.floor(dateDiff / dayMs);
  const hoursLeft = Math.floor((dateDiff % dayMs) / hourMs);
  const minsLeft = Math.floor((dateDiff % hourMs) / minMs);
  const secsLeft = Math.floor((dateDiff % minMs) / 1000);

  const days = document.querySelector('.giveaway__days-left');
  const hours = document.querySelector('.giveaway__hours-left');
  const mins = document.querySelector('.giveaway__mins-left');
  const secs = document.querySelector('.giveaway__secs-left');

  days.textContent = formatNum(daysLeft);
  hours.textContent = formatNum(hoursLeft);
  mins.textContent = formatNum(minsLeft);
  secs.textContent = formatNum(secsLeft);
}

// format num into a 2-digit number
function formatNum(num) {
  if (num <= 9) {
    num = `0${num}`;
  }

  return num;
}

// display ending date and time for the giveaway
function displayEndingDate(endingDate) {
  let endMonth = endingDate.getMonth();
  const endDate = endingDate.getDate();
  const endYear = endingDate.getFullYear();
  const endHour = endingDate.getHours();
  const endMins = endingDate.getMinutes();
  let endDay = endingDate.getDay();
  endDay = weekDays[endDay];

  // convert endMonth into month
  endMonth = months[endMonth];

  // display dynamically on the page
  const date = document.querySelector('#date-date');
  const month = document.querySelector('#date-month');
  const year = document.querySelector('#date-year');
  const hour = document.querySelector('#date-hour');
  const mins = document.querySelector('#date-mins');
  const day = document.querySelector('#date-day');

  date.textContent = endDate;
  month.textContent = endMonth;
  year.textContent = endYear;
  hour.textContent = endHour;
  mins.textContent = endMins;
  day.textContent = endDay;
}