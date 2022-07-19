// display live time
var currentDate = moment();
$("#currentDay").text(currentDate);
function hourTracker() {
  // get current number of hours.
  var currentDate = moment().hour();
}

var now = new Date().getHours();
// color code for current, past and future time
function colorCode() {
  console.log(typeof now);
  if (now > 9) {
    $(".col-hr9").addClass("past");
  } else if (now >= 9 && now < 10) {
    $(".col-hr9").addClass("present");
  } else if (now < 9) {
    $(".col-hr9").addClass("future");
  }
  if (now > 10) {
    $(".col-hr10").addClass("past");
  } else if (now >= 10 && now < 11) {
    $(".col-hr10").addClass("present");
  } else if (now < 10) {
    $(".col-hr10").addClass("future");
  }
  if (now > 11) {
    $(".col-hr11").addClass("past");
  } else if (now >= 11 && now < 12) {
    $(".col-hr11").addClass("present");
  } else if (now < 11) {
    $(".col-hr11").addClass("future");
  }
  if (now > 12) {
    $(".col-hr12").addClass("past");
  } else if (now >= 12 && now < 13) {
    $(".col-hr12").addClass("present");
  } else if (now < 12) {
    $(".col-hr12").addClass("future");
  }
  if (now > 13) {
    $(".col-hr13").addClass("past");
  } else if (now >= 13 && now < 14) {
    $(".col-hr13").addClass("present");
  } else if (now < 13) {
    $(".col-hr13").addClass("future");
  }
  if (now > 14) {
    $(".col-hr14").addClass("past");
  } else if (now >= 14 && now < 15) {
    $(".col-hr14").addClass("present");
  } else if (now < 14) {
    $(".col-hr14").addClass("future");
  }
  if (now > 15) {
    $(".col-hr15").addClass("past");
  } else if (now >= 15 && now < 16) {
    $(".col-hr15").addClass("present");
  } else if (now < 15) {
    $(".col-hr15").addClass("future");
  }
  if (now > 16) {
    $(".col-hr16").addClass("past");
  } else if (now >= 16 && now < 17) {
    $(".col-hr16").addClass("present");
  } else if (now < 16) {
    $(".col-hr16").addClass("future");
  }
  if (now > 17) {
    $(".col-hr17").addClass("past");
  } else if (now >= 17 && now < 18) {
    $(".col-hr17").addClass("present");
  } else if (now < 17) {
    $(".col-hr17").addClass("future");
  }
}
colorCode();
$(".saveBtn").on("click", function () {
  // get nearby values.
  console.log(this);
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  console.log(time, text);

  // set items in local storage.
  localStorage.setItem(time, text);
});

$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
