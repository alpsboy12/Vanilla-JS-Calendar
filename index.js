const day = document.querySelector(".day");
const date = document.querySelector(".date");
const todayMonthYear = document.querySelector(".todayMonthYear");
const leftArrow = document.querySelector(".fa-arrow-left");
const rightArrow = document.querySelector(".fa-arrow-right");
const tableBody = document.querySelector("tbody");

const monthArray = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
const dayArray = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

const today = new Date();
let month = today.getMonth();
let year = today.getFullYear();

// Sunday = 0 and Saturday = 6. This sets current day 
day.innerText = dayArray[today.getDay()];
date.innerText = today.getDate();
todayMonthYear.innerText = `${monthArray[month]} ${year}`;

// Function to generate dates and places each dates on the right table date.
function generateCalendar() {
  const startOfMonth = new Date(year,month).getDay();
  const numberOfDays = 32 - new Date(year,month,32).getDate();
  let num = 1;
  for (let i = 0; i < 6; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < startOfMonth) {
        const td = document.createElement("td");
        tr.appendChild(td);
      } else if ( num > numberOfDays) {
        break;
      }else {
        const td = document.createElement("td");
        td.textContent = num;
        if (num == today.getDate() && month == today.getMonth()) {
          td.classList.add("highlighter");
        }
        tr.appendChild(td);
        num++;
        td.addEventListener("click",showClickedDate => {
          date.innerText = td.innerText;
          day.innerText = dayArray[new Date(year,month,date.innerText).getDay()]; 
        });
      }
    }
    tableBody.appendChild(tr);
  }
}

// Function to show previous month.
function showPreviousCalendar() {;
  if (month == 0) {
    month = 11;
    year = year - 1;
    todayMonthYear.innerText = `${monthArray[month]} ${year}`;
  }else {
    month = month - 1;
    todayMonthYear.innerText = `${monthArray[month]} ${year}`;
  }
  tableBody.innerHTML = "";
  generateCalendar();
}

// Function to show next month.
function showNextCalendar() {
  if (month == 11) {
    month = 0;
    year = year + 1;
    todayMonthYear.innerText = `${monthArray[month]} ${year}`;
  }else {
    month = month + 1;
    todayMonthYear.innerText = `${monthArray[month]} ${year}`;
  }
  tableBody.innerHTML = "";
  generateCalendar();
}

generateCalendar();

leftArrow.addEventListener("click",showPreviousCalendar);
rightArrow.addEventListener("click",showNextCalendar);