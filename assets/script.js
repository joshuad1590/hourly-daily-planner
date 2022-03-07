
// append the current date in the header
var currentDay = moment().format('MMM Do YYYY, dddd');
var timeNow = moment().hour();
$("#currentDay").html(currentDay);

// when savBtn is clicked it save info in localStorage
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    // Checks to see if items is in the past, present, or future

    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);
        console.log(blockTime, timeNow);
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
    })
 // saves the textarea of the hours in local storage
$("#8AM .description").val(localStorage.getItem("8AM"));
$("#9AM .description").val(localStorage.getItem("9AM"));
$("#10AM .description").val(localStorage.getItem("10AM"));
$("#11AM .description").val(localStorage.getItem("11AM"));
$("#12PM .description").val(localStorage.getItem("12PM"));
$("#1PM .description").val(localStorage.getItem("1PM"));
$("#2PM .description").val(localStorage.getItem("2PM"));
$("#3PM .description").val(localStorage.getItem("3PM"));
$("#4PM .description").val(localStorage.getItem("4PM"));
$("#5PM .description").val(localStorage.getItem("5PM"));
})
