const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-container p");
const itemDate = document.querySelector(".item-info h4");

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();
// const
const futureDate = new Date(tempYear, tempMonth, tempDay + 7, 11, 30, 0);

const year = futureDate.getFullYear();
const day = futureDate.getDate();
const month = months[futureDate.getMonth()];
const weekDay = weekdays[futureDate.getDay()];
itemDate.innerHTML = `ends on ${weekDay}. ${day} ${month} ${year} ${futureDate.toLocaleString(
  "en-US",
  { hour: "numeric", minute: "numeric", hour12: true }
)}`;

function getRemainingTime() {
  const currentDate = new Date().getTime();
  // 1s - 1000ms
  // 1m - 60s
  // 1hr - 60min
  // 1d - 24h
  const remainingTime = futureDate - currentDate;
  const oneDay = 24 * 60 * 60 * 1000; // day in milliseconds
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  let days = Math.floor(remainingTime / oneDay);
  let hours = Math.floor((remainingTime % oneDay) / oneHour);
  let minutes = Math.floor((remainingTime % oneHour) / oneMinute);
  let seconds = Math.floor((remainingTime % oneMinute) / 1000);
  const currentDates = [days, hours, minutes, seconds];
  items.forEach((item, index) => {
    item.innerHTML = formatDate(currentDates[index]);
    if (remainingTime < 0) {
      clearInterval(countDown);
      deadline.style.gridTemplateColumns = "1fr";
      deadline.innerHTML = `<h4 class="expired">sorry, the date has expired</h4>`;
    }
  });
}

function formatDate(date) {
  if (date < 10) {
    return `0${date}`;
  }
  return date;
}

let countDown = setInterval(getRemainingTime, 1000);
