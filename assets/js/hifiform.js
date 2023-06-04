function sendJSON(){
			
	let result = document.querySelector('.result');
	let senderemail = document.querySelector('#senderemail');
	let sendername = document.querySelector('#sendername');
	let hifisetupid = document.querySelector('#hifisetupid');
	
	// Creating a XHR object
	let xhr = new XMLHttpRequest();
	let url = "https://prod-26.westeurope.logic.azure.com/workflows/d6db27358f80434ba0cd477bfe2325da/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=sM17fd913-GhCh-zD9MPwpseRrFU_-ZCoIB5kmLITqU";

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
		  alert(`Done, SUCCESSFULLY committed to our anonym email service..`); // response is the server response
		}
	  };
}
