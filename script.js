var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
let currentListItems = document.querySelectorAll("li"); //this row is necessary to add button and to make the list items toggable

function inputLength() {
	return input.value.length;
}

//the following function executes the two tasks of creating a delete button and adding a toggle ability to the GIVEN shopping list items
for ( i = 0; i < currentListItems.length; i++) {
createButton(currentListItems[i]);
addToggle(currentListItems[i]);
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	
	addToggle(li); // we add a toggle ability to each NEW list items here
	createButton(li); // we add a delete button to each NEW list items here
	}

function addToggle(listItem) {
	listItem.addEventListener("click", toggleThis);
}

function toggleThis(event) { 
	//check the event.target method on w3school
	event.target.classList.toggle("done");
}

function createButton(listItem) {
	let delBtn = document.createElement("button");
	let delBtnText = document.createTextNode("DELETE");
	delBtn.appendChild(delBtnText);
	listItem.appendChild(delBtn);
	// event target is currently a button, so we have to remove its parentnode, which is a list item
	delBtn.addEventListener("click", (function(event) { event.target.parentNode.remove(); } ));
	/* here's a nice website to overview the methods of using functions: 
	https://dmitripavlutin.com/6-ways-to-declare-javascript-functions/ */
}

//it is the same from this point
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


