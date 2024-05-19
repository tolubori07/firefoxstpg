 function getDate(){
 const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
 const months = ["January","February","March","April","May","June","July","August","September","October","Novermber","December"]
  let now = new Date(Date.now());
  let day = days[now.getDay()];
   let date = now.getDate();
   let month = months[now.getMonth()];
   let year = now.getFullYear();
   let currentDate = day + ", " + date + " " + month + ", " + year;
  document.getElementById("date").innerHTML = currentDate; 
 }
 setInterval(getDate,1000)

setInterval(showTime, 1000);
        function showTime() {
        	let time = new Date();
        	let hour = time.getHours();
        	let min = time.getMinutes();
        	let sec = time.getSeconds();
        	am_pm = "AM";
        
        	if (hour > 12) { 
        		am_pm = "PM";
        	}
        	if (hour == 0) {
        		hr = 12;
        		am_pm = "AM";
        	}
			hour = hour < 10 ? "0" + hour : hour;
        	min = min < 10 ? "0" + min : min;
        	sec = sec < 10 ? "0" + sec : sec
        	
        	let currentTime = hour + ":"
        		+ min + ":" + sec + " "+am_pm;
        
        	document.getElementById("clock").innerHTML = currentTime;
        }
        
        showTime();


