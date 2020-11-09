// Define Variables 
var currentDay = $("#currentDay");
var time = moment().format("MMM. Do, YYYY h:mm a");
var dayContent = (localStorage.getItem("input"));

// Append Current Date and time to the top of the page
console.log(time)
$("#currentDay").text(time);


// Colorblocks

var rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format("H"));

// console.log(rows);
// console.log(currentHour);

// ????WHY DOESN'T THIS WORK????
// Array.from(rows).forEach(row => {
//     let
//         rowIdString = row.id,
//         rowHour;
//     if (rowIdString) {
//         rowHour = parseInt(rowIdString);
//     }
//     // Sets the row colors after comparing the current hour to the row hour
//     if (rowHour) {
//         // This will set the current hour to red
//         if (currentHour === rowHour) {
//             setColor(row, "red");
//         }
//         // This will set the future hours to green
//         else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) 
//             setColor(row, "green");
//         // This will set the past hours to grey
//         else if ((currentHour > rowHour) && (currentHour < rowHour + 6))
//             setColor(row, "lightgrey");
//         // This will set any other hours to whtie
//         else {
//             setColor(row, "white");
//         }
//     }
// });

// Save Button 
$(".saveBtn").on("click", function(){
    console.log("You clicked save!")
    var dayInput = $(this).siblings(".description").val();
    var setHour = $(this).parent().attr("id");
    console.log(dayInput, setHour)
    localStorage.setItem(setHour, dayInput);
    // This will refresh the page when the save button is clicked, updating the time and the planner text.
    // location.reload();
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


// ColorBlocking
// in a function
$(document).ready(function(){
    // Define current time
    console.log(time)
    // Var for the timeblocks 
    var timeBlock = $("textarea").addClass("time-block");
    console.log(timeBlock);
    // Compare for past, present or future
    if (setHour > time) {
        var pastBlock = $("textarea").addClass("past-block");
        $(pastBlock).attr(".past");
        console.log(pastBlock);

    }
    // If the id of the parent of the timeBlock is < > =, set a color
    // If past, grey
    // for each loop
    // what you need to target within the loop (timeblock)
    // evaluation 
    // use addclass and removeclass 
})
