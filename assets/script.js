//HTML and CSS load first before running code
//The code will run until after the browser has finished rendering all the elements
const localeSettings = {};
dayjs.locale(localeSettings);
//Then you'll wait until the DOM is fully loaded before executing the code inside the function
$(function () {

  //This function gets the current hour of the day
  const currentHour = dayjs().format(`H`);

 //This function changes the color of each block when it's either "past, present, or future"
 function hourlyColor()  {
  $(`time-block`).each(function) {
    const blockHour = parseInt(this.id);
    $(this).toggleClass(`past`, blockHour < currentHour);
    $(this).toggleClass(`present`, blockHour === currentHour);
    $(this).toggleClass(`future`, blockHour > currentHour);
  });
 }

 //This function will save the user's input in a textarea to localStorage
 function textEntry() {
  $(`.saveBtn`).on(`click`, function) {
    const key = $(this).parent().attr(`id`);
    const value = $(this).siblings(`.description`).val();
    localStorage.setItem(key, value);
  });
 }
 //This function will refresh the color of each time block on whether it's in the past, present, or future
 function refreshColor() {
  $(`.time-block`).each(function() {
    const blockHour = parseInt(this.id);
    if (blockHour == currentHour) {
      $(this).removeClass(`past future`).addClass(`present`);
    } else if (blockHour < currentHour) {
      $(this).removeClass(`future present`).addClass(`past`);
    } else {
      $(this).removeClass(`past present`).addClass(`future`);
    }
  });
}

//This gets the user input from the localStorage
$(`.time-block`).each(function) {
  const key = $(this).attr(`id`);
  const value = localStorage.getItem(key);
  $(this).children(`.description`).val(value);
});

function updateTime() {
  const dateElement = $(`#date`);
  const timeElement = $(`#time`);
  const currentDate = dayjs().format(`dddd, MMMM D, YYYY`);
  const currentTime = dayjs().format(`hh:mm:ss A`);
  dateElement.text(currentDate);
  timeElement.text(currentTime);
}

//Main three functions
hourlyColor();
textEntry();
refreshColor();

setInterval(updateTime, 1000);
});