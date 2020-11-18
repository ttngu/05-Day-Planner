// Define Variables 
var currentDay = $("#currentDay");
var time = moment().format("MMM. Do, YYYY h:mm a");
var dayContent = (localStorage.getItem("input"));

// Append Current Date and time to the top of the page
console.log(time)
$("#currentDay").text(time);


// Set timeblock colors
var timeOfday = ["9", "10", "11", "12", "13", "14", "15", "16", "17", "18"]
colorBlock();

function colorBlock() {
    var currentHour = parseInt(moment().format("H"));
    
  for(var i = 0; i < timeOfday.length; i++) {
    // Future hours green
    if (parseInt(timeOfday[i]) > currentHour) {
      $("#hour-" + timeOfday[i]).attr("style", "background-color: #58ce7b");
      console.log("past");
    // Past Hours to grey 
    } 
    else if (parseInt(timeOfday[i]) < currentHour) {
      $("#hour-" + timeOfday[i]).attr("style", "background-color: lightgray");
    
    // Current hours to red
    } 
    else if (parseInt(timeOfday[i]) == currentHour) {
      $("#hour-" + timeOfday[i]).attr("style", "background-color: #fc665e");
    
    }
  }
}

// Save Button 
$(".saveBtn").on("click", function(){
    console.log("You clicked save!")
    var dayInput = $(this).siblings(".description").val();
    var setHour = $(this).parent().attr("id");
    console.log(dayInput, setHour)
    localStorage.setItem(setHour, dayInput);
    // This will refresh the page when the save button is clicked, updating the time and the planner text.
    location.reload();
});

// This saves the text and gets the items from local storage
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
$("#hour-18 .description").val(localStorage.getItem("hour-18"));



