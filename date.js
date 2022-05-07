let dateElementList = document.querySelectorAll("._date");
let monthElementList = document.querySelectorAll("._month");
let yearElementList = document.querySelectorAll("._year");
let regLinks = document.querySelectorAll(".reg-cstm-link");
let timeLinks = document.querySelectorAll("._time");

let len = dateElementList.length;
// console.log(regLinks);

for (let i = 0; i < regLinks.length; i++) {
  let m = moment();
  let hours = m.hours();
  let minutes = m.minutes();
  // console.log(hours, minutes);

  if (hours >= 11 && hours <= 19) {
    if ((hours == 19 && minutes < 30) || hours < 19)
      regLinks[i].setAttribute(
        "href",
        "https://event.webinarjam.com/register/56/wg93ys4g"
      );
    if (hours == 19 && minutes > 30) {
      regLinks[i].setAttribute(
        "href",
        "https://event.webinarjam.com/register/19/5092vam"
      );
    }
  } else {
    regLinks[i].setAttribute(
      "href",
      "https://event.webinarjam.com/register/19/5092vam"
    );
  }
}

for (let i = 0; i < timeLinks.length; i++) {
  let m = moment();
  let hours = m.hours();
  let minutes = m.minutes();

  if (hours >= 11 && hours <= 19) {
    if ((hours == 19 && minutes < 30) || hours < 19)
      timeLinks[i].innerHTML = "7:30 PM";
    if (hours == 19 && minutes > 30) {
      timeLinks[i].innerHTML = "11:00 AM";
    }
  } else {
    timeLinks[i].innerHTML = "11:00 AM";
  }
}

function redirect1() {
  let m = moment();
  let hours = m.hours();
  let minutes = m.minutes();
  // console.log(hours, minutes);

  if (hours >= 11 && hours <= 19) {
    if ((hours == 19 && minutes < 30) || hours < 19)
      window.location.href =
        "https://event.webinarjam.com/register/56/wg93ys4g";

    if (hours == 19 && minutes > 30) {
      window.location.href = "https://event.webinarjam.com/register/19/5092vam";
    }
  } else {
    window.location.href = "https://event.webinarjam.com/register/19/5092vam";
  }
}

for (let i = 0; i < len; i++) {
  let dateElement = dateElementList[i];
  let monthElement = monthElementList[i];
  let yearElement = yearElementList[i];

  // console.log(dateElement, monthElement, yearElement);

  let m = moment();

  let hours = m.hours();
  let minutes = m.minutes();
  // console.log(hours, minutes);
  if (hours >= 19 && hours <= 23 && minutes <= 59) {
    if (hours === 19 && minutes > 30) {
      m.add({
        days: 1,
      });
    } else if (hours > 19) {
      m.add({
        days: 1,
      });
    }
  }

  let weekDay = m.format("dddd");
  let month = m.format("MMMM");
  let day = m.format("Do");
  let year = m.format("YYYY");

  function myFunction(x) {
    if (x.matches) {
      // If media query matches
      month = month.slice(0, 3);
      let sup = day[day.length - 2] + day[day.length - 1];
      let dayString = "";

      for (let i = 0; i < day.length - 2; i++) {
        dayString += day[i];
      }

      dateElement.innerHTML = `<span class = "._date">${dayString}<sup>${sup}</sup></span>`;
      monthElement.textContent = month;
      yearElement.textContent = year;
    } else {
      month = month;
      let sup = day[day.length - 2] + day[day.length - 1];
      let dayString = "";

      for (let i = 0; i < day.length - 2; i++) {
        dayString += day[i];
      }

      dateElement.innerHTML = `<span class = "._date">${dayString}<sup>${sup}</sup></span>`;
      monthElement.textContent = month;
      yearElement.textContent = year;
    }
  }

  var x = window.matchMedia("(max-width: 700px)");
  myFunction(x); // Call listener function at run time
  x.addListener(myFunction); // Attach listener function on state changes
}

// console.log(weekDay, month, day, year);
