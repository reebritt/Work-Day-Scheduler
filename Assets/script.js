
// Display current day on the workday scheduler header
var today = moment().format("MMM Do YYYY"); 
$("#currentDay").text(today);

$(document).ready(function(){
    $("#hour9 .form").val(localStorage.getItem("hour9"));
    $("#hour10 .form").val(localStorage.getItem("hour10"));
    $("#hour11 .form").val(localStorage.getItem("hour11"));
    $("#hour12 .form").val(localStorage.getItem("hour12"));
    $("#hour1 .form").val(localStorage.getItem("hour1"));
    $("#hour2 .form").val(localStorage.getItem("hour2"));
    $("#hour3 .form").val(localStorage.getItem("hour3"));
    $("#hour4 .form").val(localStorage.getItem("hour4"));
    $("#hour5 .form").val(localStorage.getItem("hour5"));

    //add click event to save text in hour
    $(".saveBtn").on("click", function (){
        var input = $(this).siblings(".form").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, input);
    })

})
//Setting timeblocks 
//var timeBlock = $(".hour");
//var now = parseInt(moment().format(format("H")));

var current
//time-block{
//    moment().startOf('hour');
//    moment().minutes(0).seconds(0).milliseconds(0)
//}