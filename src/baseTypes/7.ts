/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum dayOfTheWeek {
  Monday = "MONDAY",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

function isWeekend(dayOfTheWeek) {
  if (dayOfTheWeek.Saturday || dayOfTheWeek.Sunday) {
    return true;
  } else {
    return false;
  }
}

console.log(isWeekend(dayOfTheWeek.Sunday));
