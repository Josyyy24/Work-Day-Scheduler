//HTML and CSS will load first 
$(document).ready(function () {

//Variable for the current day
var today = dayjs().format(`dddd, MMMM D`);
$(`#currentDay`).text(today);

//Sets present hour variable as an integer
var presenthour = parseInt(dayjs().format(`H`), 10);

//This is for the saveBtn click listener
$(".saveBtn").on("click", function () {
  
//Retrieves values from id attribute
var hour = $(this).parent().attr("id");
var event = $(this).siblings(".description").val();
  
localStorage.setItem(hour, event)
});

//This function is for the clear button
let clearButton = document.getElementById("clearBtn");
clearButton.addEventListener("click", function() {
  localStorage.clear()
  window.location.reload()
});

//This function ensures that the current time frames are colored accordingly
function timeSto() {
$(`.time-block`).each(function () {

//Sets timeframe as an integer
var timeframe = parseInt(this.id.split(`-`)[1], 10);

if (presenthour > timeframe) {
$(this).addClass(`past`).removeClass(`present`);
} else if (presenthour === timeframe) {
$(this).addClass(`present`).removeClass(`past future`);
} else if (presenthour < timeframe) {
$(this).addClass(`future`).removeClass(`present past`); }
});
};

//Loops over set values
for (var hour = 9; hour <= 17; hour++) {
$(`#hour-` + hour + ` .description`).val(localStorage.getItem(`hour-` + hour));
};

timeSto();

//This converts the AM to PM time
function displayAmorPm(hour) {
  var b = ""
  if (hour <= 12) {
    b = "AM"
  } else {
    b ="PM" 
  }
  hour = hour % 12
  hour = hour ? hour : 12
  return hour + " " + b 
  }
});

function getlocalStorage(hour) {
  let inputval = localStorage.getItem(hour)
  if (true) {
    $("input").data(`input${hour}`)
    var text = $(`input#inputText${hour}`).val(inputval)
    console.log(text)
  }
}

//This function updates the color
function updateColor() {
  var hour = new Date().getHours();
  for (var i =9; i <=17; i++) {
    console.log(hour, i)
    if (hour == i) {
      $(`#inputText${i}`).css("background", "red")
    } else if (hour < i) {
      $(`#inputText${i}`).css("background", "lightgreen")
    } else if (hour > i) {
      $(`inputText${i}`).css("background", "grey")
    }
    }
    }

    setInterval(function () {
      updateColor()
    }, 1000);
    
//This creates the row elements
row = $(`<div class="row">`)
col1 = $(`<div class = "col-lg-2 hour">${displayAmorPm(i)}</div>`)
col2 = $(`<div class = "col-lg-8 inputcontent"><input data-input="${i}" id="inputText${i}" class="form-control inputText" type="text name="userInput"></div>`)
col3 = $(`<div class ="col-lg-2"><button data-id="${i}" id="savePlanner" class="btn btn-success btn-block"><i class="fas fa-save"></i> Save</button></div>`)
row.append(col1)
row.append(col2)
row.append(col3)
$("#display-planner").append(row)
getlocalStorage(i) 

  //This checks the time and adds the classes for background indicators
  if (blockTime < timeNow) {
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");
  }
  else if (blockTime === timeNow) {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
  }
  else {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
  }

  $("#9hour .description").val(localStorage.getItem("9hour"));
  $("#10hour .description").val(localStorage.getItem("10hour"));
  $("#11hour .description").val(localStorage.getItem("11hour"));
  $("#12hour .description").val(localStorage.getItem("12hour"));
  $("#1hour .description").val(localStorage.getItem("1hour"));
  $("#2hour .description").val(localStorage.getItem("2hour"));
  $("#3hour .description").val(localStorage.getItem("3hour"));
  $("#4hour .description").val(localStorage.getItem("4hour"));
  $("#5hour .description").val(localStorage.getItem("5hour")); 
