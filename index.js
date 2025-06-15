const guestForm = document.getElementById("guestForm");
const guestNameInput = document.getElementById("guestName");
const guestListElement = document.getElementById("guestList");
const categoryInput = document.getElementById("category");

let guestList = []; // No localStorage

function renderGuests() {
  guestListElement.innerHTML = "";

  guestList.forEach((guest, index) => {
    const li = document.createElement("li");

    const categoryTag = document.createElement("span");
    categoryTag.textContent = guest.category;
    categoryTag.classList.add("category-tag", `category-${guest.category}`);

    const nameSpan = document.createElement("span");
    nameSpan.textContent = guest.name;
    nameSpan.contentEditable = false;

    const rsvpBtn = document.createElement("button");
    rsvpBtn.textContent = guest.rsvp ? "Attending" : "Not Attending";
    rsvpBtn.style.marginLeft = "10px";
    rsvpBtn.addEventListener("click", () => {
      guest.rsvp = !guest.rsvp;
      renderGuests();
    });

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
      const newName = prompt("Enter new name:", guest.name);
      if (newName) {
        guest.name = newName.trim();
        renderGuests();
      }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";
    deleteBtn.addEventListener("click", () => {
      guestList.splice(index, 1);
      renderGuests();
    });

    const timestamp = document.createElement("span");
    timestamp.textContent = `Added: ${guest.time}`;
    timestamp.classList.add("timestamp");

    const leftSection = document.createElement("div");
    leftSection.appendChild(categoryTag);
    leftSection.appendChild(nameSpan);
    leftSection.appendChild(timestamp);

    const rightSection = document.createElement("div");
    rightSection.appendChild(rsvpBtn);
    rightSection.appendChild(editBtn);
    rightSection.appendChild(deleteBtn);

    li.appendChild(leftSection);
    li.appendChild(rightSection);

    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";

    guestListElement.appendChild(li);
  });
}

guestForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const guestName = guestNameInput.value.trim();
  const category = categoryInput.value;

  if (guestList.length >= 10) {
    alert("Guest limit reached (max 10).");
    return;
  }

  if (!guestName) {
    alert("Please enter a guest name.");
    return;
  }

  const guest = {
    name: guestName,
    category: category,
    rsvp: false,
    time: new Date().toLocaleString(),
  };

  guestList.push(guest);
  renderGuests();
  guestForm.reset();
});
function renderGuests() {
  guestListElement.innerHTML = "";

  guestList.forEach((guest, index) => {
    const li = document.createElement("li");

    const categoryTag = document.createElement("span");
    categoryTag.textContent = guest.category;
    categoryTag.classList.add("category-tag", `category-${guest.category}`);

    const nameSpan = document.createElement("span");
    nameSpan.textContent = guest.name;

    const rsvpBtn = document.createElement("button");
    rsvpBtn.textContent = guest.rsvp ? "Attending" : "Not Attending";
    rsvpBtn.style.marginRight = "8px";
    rsvpBtn.addEventListener("click", () => {
      guest.rsvp = !guest.rsvp;
      renderGuests();
    });

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.style.marginRight = "8px";
    editBtn.addEventListener("click", () => {
      const newName = prompt("Enter new name:", guest.name);
      if (newName) {
        guest.name = newName.trim();
        renderGuests();
      }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";
    deleteBtn.addEventListener("click", () => {
      guestList.splice(index, 1);
      renderGuests();
    });

    const timestamp = document.createElement("span");
    timestamp.textContent = `Added: ${guest.time}`;
    timestamp.classList.add("timestamp");

    const leftSection = document.createElement("div");
    leftSection.appendChild(categoryTag);
    leftSection.appendChild(nameSpan);
    leftSection.appendChild(timestamp);

    const rightSection = document.createElement("div");
    rightSection.style.display = "flex";
    rightSection.style.gap = "8px"; // This adds spacing between buttons
    rightSection.appendChild(rsvpBtn);
    rightSection.appendChild(editBtn);
    rightSection.appendChild(deleteBtn);

    li.appendChild(leftSection);
    li.appendChild(rightSection);

    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    li.style.marginBottom = "10px";

    guestListElement.appendChild(li);
  });
}
