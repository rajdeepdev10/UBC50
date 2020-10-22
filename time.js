
// const google_api = "AIzaSyABs1n0s1fDBFzzUp-zzEtLbMvwdsBB3yY";


//generates the current time and updates inserts it to the #time div
function get_time()
{
    const time = new Date();
    ubc_time = new Date().toLocaleTimeString("it-IT", {timeZone: "America/Los_Angeles"});

    const timeText = time.toLocaleTimeString("it-IT");
    
    document.getElementById("time").innerHTML = timeText;
    document.getElementById("ubc-time").innerHTML = ubc_time;
}

//runs the function every second
setInterval(get_time, 1000);

