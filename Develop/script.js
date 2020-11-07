// Define Variables 
var currentDay = $("#currentDay");
var time = moment().format("MMM. Do, YYYY h:mm a");

// Append Current Date and time to the top of the page
console.log(time)
$("#currentDay").append(time);