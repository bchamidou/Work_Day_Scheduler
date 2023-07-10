// Set the date at the top of the page 

var d=dayjs().format('MMM D, YYYY')

$("#currentDay").text(dayjs().format('dddd, MMMM D YYYY, h:mm:ss a'));

$(document).ready(function () {

  timeStatus(); 

});
  
  var timeBlock;
  var description;  

    // Save the data to localStorage on click
  $(".saveBtn").on("click", function() {
    timeBlock = $(this).parent().attr("id");
    console.log(timeBlock);
    description = $(this).siblings(".description").val();
    console.log(description);
    localStorage.setItem(timeBlock, JSON.stringify(description));
    
  });

  // Delete the data to localStorage on click
  $(".deleteBtn").click(function() {
    description = $(this).siblings(".description").val("");
    description = $(this).siblings(".description").val();
    timeBlock = $(this).siblings(".hour").text();
    localStorage.setItem(timeBlock, JSON.stringify(description));

    timeStatus(); 

  });
  
  function timeStatus() {
    //get current number of hours.
    var timeNow = dayjs().hour();
    console.log("Current Time" +  timeNow);
  
    // loop over time blocks to know if they are past, present or future

    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour-")[1]);
        console.log(blockTime);

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
  }  

 //
 // Load any saved data from localStorage

$(".description").each(function() {
  var timeBlock = $(this).parent().attr("id");
  var savedData = localStorage.getItem(timeBlock); 
  if (savedData) {
    $(this).val(savedData);
  }
});

