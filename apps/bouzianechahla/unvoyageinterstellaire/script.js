// Set the date we're counting down to
var countDownDate = new Date("Jan 12, 2020 23:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display the result in the element with id="demo"
document.getElementById("demo").innerHTML = days + "<span class=\"red-text\">d</span> " + hours + "<span class=\"red-text\">h</span> "
+ minutes + "<span class=\"red-text\">m</span> " + seconds + "<span class=\"red-text\">s</span> ";


// If the count down is finished, write some text
if (distance < 0) {
    clearInterval(x);
    $("#demo").html("0<span class=\"red-texts\">d</span> 0<span class=\"red-texts\">h</span> 0<span class=\"red-texts\">m</span> 0<span class=\"red-text\">s</span>");
    $("#result").show();
    $("form#result").submit(function () {
        if($("#ex2").val() == "bonne anniversaire bebe"){
            return true;
        }else{
            return false;
        }

    });
    
    
}
}, 1000);

