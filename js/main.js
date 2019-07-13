const button = document.getElementById("enter");
const buttonClick = function() {
	// console.log("button listening");
	const inputText = document.getElementById("input").value;
	// console.log(inputText);
	const heading = document.getElementById("heading");
	heading.innerhtml = inputText;
	console.log(heading.innerhtml);
	heading.setAttribute("visibility", "visible");
	console.log(heading.getAttribute("visibility"));
	// document.getElementById("form").reset();

};
button.addEventListener("click", buttonClick);
// add event listener to button
// on click, grab input text as variable
// reset input text on form to blank
// write to innerhtml of h1
// remove h1 visibility attribute