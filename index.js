const day = document.querySelector(".day");
const date = document.querySelector(".date");
const todayMonthYear = document.querySelector(".todayMonthYear");
const leftArrow = document.querySelector(".fa-arrow-left");
const rightArrow = document.querySelector(".fa-arrow-right");
const tableBody = document.querySelector("tbody");

const MONTHARRAY = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
const DAYARRAY = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

const today = new Date();
let month = today.getMonth();
let year = today.getFullYear();

// Sunday = 0 and Saturday = 6. This sets current day 
day.innerText = DAYARRAY[today.getDay()];
date.innerText = today.getDate();
todayMonthYear.innerText = `${MONTHARRAY[month]} ${year}`;

// Function to generate dates and places each dates on the right table date.
function generateCalendar() {
  const startOfMonth = new Date(year,month).getDay();
  const numberOfDays = 32 - new Date(year,month,32).getDate();
  let num = 1;
  for (let i = 0; i < 6; i++) {
    const tableRow = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < startOfMonth) {
        const tableData = document.createElement("td");
        tableRow.appendChild(tableData);
      } else if ( num > numberOfDays) {
        break;
      }else {
        const tableData = document.createElement("td");
        tableData.textContent = num;
        if (num === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
          tableData.classList.add("highlighter");
        }
        tableRow.appendChild(tableData);
        num++;
        tableData.addEventListener("click",showClickedDate => {
          date.innerText = tableData.innerText;
          day.innerText = DAYARRAY[new Date(year,month,date.innerText).getDay()]; 
        });
      }
    }
    tableBody.appendChild(tableRow);
  }
}

// Function to show next Month or previous Month 1st day and date.
function showNextMonthDate() {
  if (month !== today.getMonth() || year !== today.getFullYear()) {
    day.innerText = DAYARRAY[new Date(year,month).getDay()];
    date.innerText = new Date(year,month).getDate();
  }else{
    day.innerText = DAYARRAY[today.getDay()];
    date.innerText = today.getDate();
  }
}

// Function to show previous month.
function showPreviousCalendar() {;
  if (month === 0) {
    month = 11;
    year--;
    todayMonthYear.innerText = `${MONTHARRAY[month]} ${year}`;
  }else {
    month--;
    todayMonthYear.innerText = `${MONTHARRAY[month]} ${year}`;
  }
  tableBody.innerHTML = "";
  showNextMonthDate();
  generateCalendar();
}

// Function to show next month.
function showNextCalendar() {
  if (month === 11) {
    month = 0;
    year++;
    todayMonthYear.innerText = `${MONTHARRAY[month]} ${year}`;
  }else {
    month++;
    todayMonthYear.innerText = `${MONTHARRAY[month]} ${year}`;
  }
  tableBody.innerHTML = "";
  showNextMonthDate();
  generateCalendar();
}

generateCalendar();

leftArrow.addEventListener("click",showPreviousCalendar);
rightArrow.addEventListener("click",showNextCalendar);