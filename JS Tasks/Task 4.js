function showDate() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var monthIndex = currentDate.getMonth();
    var year = currentDate.getFullYear();
    
    var formattedDate = day + "/" + monthNames[monthIndex] + "/" + year;
    
    document.getElementById("date").textContent =  formattedDate;
}

// Add a click event listener to the button
document.getElementById("datebtn").addEventListener("click", showDate);

function showTime() {
    var currentTime = new Date();
    
    document.getElementById("time").textContent = currentTime.toString();
}

// Add a click event listener to the button
document.getElementById("timebutton").addEventListener("click", showTime);