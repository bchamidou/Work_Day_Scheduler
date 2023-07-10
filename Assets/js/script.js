// Set the date at the top of the page 

var d=dayjs().format('MMM D, YYYY');

$("#currentDay").text(dayjs().format('dddd, MMMM D YYYY, h:mm:ss a'));

$(document).ready(function () {

  timeStatus(); 
  renderText ();

});
  
  var timeBlock;
  var description;  

    // Save the data to localStorage on click
  $(".saveBtn").on("click", function() {
    timeBlock = $(this).siblings(".hour").text();
    console.log(timeBlock);
    description = $(this).siblings(".description").val();
    console.log(description);
    localStorage.setItem(timeBlock, JSON.stringify(description));
    
    timeStatus(); 
    renderText ();
    
  });

  // Delete the data to localStorage on click
  $(".deleteBtn").click(function() {
    description = $(this).siblings(".description").val("");
    description = $(this).siblings(".description").val();
    timeBlock = $(this).siblings(".hour").text();
    localStorage.setItem(timeBlock, JSON.stringify(description));
     
    timeStatus(); 
    renderText ();

  });
  
  function timeStatus() {
    //get current number of hours.
    var timeNow = dayjs().hour();
    console.log("Current Time" +  timeNow);
  
    // loop over time blocks to know if they are past, present or future
    $(".description").each(function () {
      var timeBlock = parseInt($(this).attr("id"));
      console.log(timeBlock);

      if (timeBlock < timeNow) {
          $(this).addClass("past");
        } else if (timeBlock === timeNow) {
          $(this).addClass("present");
        } else {
          $(this).addClass("future");
        }
    });
  }  
  
//  // Load any saved data from localStorage

    function renderText () {   
      var saveEventText9 = JSON.parse(localStorage.getItem("9AM"));
    $("#9").val("");
    $("#9").val(saveEventText9);
  
    var saveEventText10 = JSON.parse(localStorage.getItem("10AM"));
    $("#10").val("");
    $("#10").val(saveEventText10);
    
    var saveEventText11 = JSON.parse(localStorage.getItem("11AM"));
    $("#11").val("");
    $("#11").val(saveEventText11);
    
    var saveEventText12 = JSON.parse(localStorage.getItem("12AM"));
    $("#12").val("");
    $("#12").val(saveEventText12);
    
    var saveEventText1 = JSON.parse(localStorage.getItem("1PM"));
    $("#13").val("");
    $("#13").val(saveEventText1);
  
    var saveEventText2 = JSON.parse(localStorage.getItem("2PM"));
    $("#14").val("");
    $("#14").val(saveEventText2);
  
    var saveEventText3 = JSON.parse(localStorage.getItem("3PM"));
    $("#15").val("");
    $("#15").val(saveEventText3);
  
    var saveEventText4 = JSON.parse(localStorage.getItem("4PM"));
    $("#16").val("");
    $("#16").val(saveEventText4);
  
    var saveEventText5 = JSON.parse(localStorage.getItem("5PM"));
    $("#17").val("");
    $("#17").val(saveEventText5);
  
  };

