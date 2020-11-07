// Define Variables 
var currentDay = $("#currentDay");
var time = moment().format("MMM. Do, YYYY h:mm a");
var dayContent = (localStorage.getItem("description"));


// Append Current Date and time to the top of the page
console.log(time)
$("#currentDay").text(time);


// Colorblocks

var rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format("H"));

console.log(rows);
console.log(currentHour);

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

// Adding an event/text to timeblocks
// var inpKey = document.getElementsByClassName("col-md-10 description");
// var saveEvent = document.getElementsByClassName("btn"); 
// var outputValue = document.getElementsByClassName("col-md-10 description");


// Save Button 
$(".saveBtn").on("click", function(event){
    console.log("Hello!")
    var input = $("#" + event.target.value).val();
    console.log(input);
    console.log(dayContent);


    // This will refresh the page. Use this to save and show the event input to the planner **AT THE END**
    location.reload();
    
});