function sendJSON(){
			
	let result = document.querySelector('.result');
	let senderemail = document.querySelector('#senderemail');
	let sendername = document.querySelector('#sendername');
	let hifisetupid = document.querySelector('#hifisetupid');
	
	// Creating a XHR object
	let xhr = new XMLHttpRequest();
	let url = "https://prod-30.germanywestcentral.logic.azure.com:443/workflows/e25b4e2695804a6ab6fa924cc73a87ab/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=vtJZqHRJyA8reuozG5U6m1LuwZ-a3Lsf2HqDFGfrChg";
     
	// open a connection
	xhr.open("POST", url, true);

	// Set the request header i.e. which type of content you are sending
	xhr.setRequestHeader("Content-Type", "application/json");

	xhr.onerror = function() { // only triggers if the request couldn't be made at all
		alert(`Network Error`);
	  };

	// Create a state change callback
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {

			// Print received data from server
			var resp  = JSON.parse(xhr.responseText);
			result.innerHTML = xhr.responseText;
			//document.getElementById("hifiform").innerHTML =
			//this.responseText;
		}
	};

	// Converting JSON data to string
	var data = JSON.stringify({ "sendername": sendername.value, "senderemail": senderemail.value, "hifisetupid": hifisetupid.value });

	// Sending data with the request
	xhr.send(data);

	xhr.onload = function() {
		if (xhr.status != 200) { // analyze HTTP status of the response
		  alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
		} else { // show the result
		  alert(`Done, ERFOLGREICH übermittelt, solltest Du aber Deine E-Mail nicht eingegeben haben, dann wird KEINE Anfrage versendet!`); // response is the server response
		}
	  };
}
