let nameInput = document.getElementById("nameInput")
const addGuestButton = document.getElementById("submitBtn");
let guestListContainer = document.querySelector("#guestListDisplay ul")
// this is the initialization of an array that will store the list items to local storage

let guestList= JSON.parse(localStorage.getItem('guestList')) || [];

function saveGuestListToLocalStorage() {
  // converts the array into a JSON string since local storage only stores strings.
  localStorage.setItem('guestList', JSON.stringify(guestList));
  
}
// function excecution when the submit buttin in clicked
function addGuest(event) {
  // prevents the form fromrefreshing the page
  event.preventDefault(); 
    // this one will get the current value in the input field using value and remove the white spaces using trim()
const guestName = nameInput.value.trim()
// validation to make sure that the name is valid
if (guestName ==="") {
    alert("please enter a valid name")
    return;
}
// this one will add a guest name on to the guest list using the push property of an array
guestList.push(guestName)
//  ensures persistence even after restoring
saveGuestListToLocalStorage();

// code to create a list item on the webpage.
  const newListItem = document.createElement("li")

//   sets the the text content of the new list item into guest name to add what was added in the input
newListItem.textContent =guestName;
//  append the li to the ul on the webpage.

guestListContainer.appendChild(newListItem);
// clear the input field to get ready for another name to be added.
nameInput.value="";
}
function renderAllGuests() {
    // Clear any existing content in the DOM list before rendering
    guestListContainer.innerHTML = '';

    // Iterate over the guestList array and create/append list items for each guest
    guestList.forEach(guestName => {
        const newListItem = document.createElement("li");
        newListItem.textContent = guestName;
        guestListContainer.appendChild(newListItem);
    });
}
renderAllGuests()