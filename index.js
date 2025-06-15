// variable declarations for the buttons, the input names
let addGuest = document.getElementById("guestName")
// this is a guest list array that has not been declared
let guestList = []
let deleteBtn = document.getElementById("deleteBtn")
// this function will add a guest name when the add guest button is clicked.
 function addGuestName(event) {
    // prevents the form from submitting
    event. preventDefeult();
    // a variable that takes in the content keyed in the addguest variable
    const guestName = addGuest.value.trim()
    guestList.push(guestName)
    //  condition to make sure a valid name is entered
    if (guestName ==="") {
        alert("enter a valid name")
        return;
        
    }
    // condition to limit the number of guests in a lis
    if (guestList >10) {
        alert("the list is full you cannot have more than 10 guests")
        
    }
    
 }
