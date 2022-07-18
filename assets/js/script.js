// display live time
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

function hourTracker() {
  //get current number of hours.
  var currentTime = moment().hour();
  // use of moment.js

  // loop over time blocks
  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);
    console.log(blockTime, currentTime);
    // To check the time and add the classes for background indicators
    if (blockTime < currentTime) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (blockTime === currentTime) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
}

$(".saveBtn").on("click", function () {
  //get nearby values.
  console.log(this);
  var text = $(this).siblings(".col-hr").val(); // taken the change from the sibling html description attribute
  var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute

  //set items in local storage.
  localStorage.setItem(time, text);
});

$("#hour9 .col-hr").val(localStorage.getItem("hour9"));
$("#hour10 .col-hr").val(localStorage.getItem("hour10"));
$("#hour11 .col-hr").val(localStorage.getItem("hour11"));
$("#hour12 .col-hr").val(localStorage.getItem("hour12"));
$("#hour13 .col-hr").val(localStorage.getItem("hour13"));
$("#hour14 .col-hr").val(localStorage.getItem("hour14"));
$("#hour15 .col-hr").val(localStorage.getItem("hour15"));
$("#hour16 .col-hr").val(localStorage.getItem("hour16"));
$("#hour17 .col-hr").val(localStorage.getItem("hour17"));
