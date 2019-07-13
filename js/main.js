// assigning button as variable
const button = document.getElementById("submit");
// function that occurs when button is clicked
const buttonClick = function() {
	// grab text in the input box and assign to a variable
	const inputText = document.getElementById("input").value;
	// assign div containing the h1 to a variable
	const heading = document.getElementById("heading");
	// rewrite the html inside the div to display what was submitted
	heading.innerHTML = "<h1>" + inputText + "</h1>";
	// reset input text on form to blank after clicking submit button
	document.getElementById("form").reset();
};
// add event listener to button
button.addEventListener("click", buttonClick);