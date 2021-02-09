
function rankGreeting (event) {
	
	
	// get which radio button was chosen
	
	let rankChoice = $("input[name=rank]:checked").val();
	
	// get first name
	
	let firstName = $("input#firstName").val();
	
	// get last name
	
	let lastName = $("input#lastName").val();
	
	// create greeting
	
	let message = `Hello, ${rankChoice}  ${firstName} ${lastName}.`;
	
	// write greeting in the paragraph
	
	$("p#greeting").text(message);
	

	// stop form from submitting
	event.preventDefault();
}

// tell js to wait until form is ready to do the function
$(document).ready(function (){
	$("form").submit(rankGreeting);
});