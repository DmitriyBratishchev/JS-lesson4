"use strict";

const createClock = setInterval(displayTime, 1000);

function displayTime() {
  let d = new Date();
  let date = d.getDate();
  let day = Days[d.getDay()];
  let month = Months[d.getMonth()];
  let year = d.getFullYear();
  let hour = d.getHours();
  let minute = d.getMinutes();
  let second = d.getSeconds();
  document.querySelector(".fullDate").textContent =
    date + " " + month + " " + year + " года" + ", ";
  document.querySelector(".day").textContent = day + ",";
  document.querySelector(".time").textContent =
    hour +
    " час" +
    getEnding(hour, hourEndings) +
    " " +
    minute +
    " минут" +
    getEnding(minute, msEndings) +
    " " +
    second +
    " секунд" +
    getEnding(second, msEndings) +
    ".";

  // console.log( 'Сегодня ' + date + ' ' + month + ' ' + year + ' года' + ', '
  // + day + ', '
  // + hour + ' час' + getEnding(hour, hourEndings) + ' '
  // + minute + ' минут' + getEnding(minute, msEndings) + ' '
  // + second + ' секунд' + getEnding(second, msEndings) + '.' )
}
