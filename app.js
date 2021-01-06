//selectors
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");
const input = document.querySelector("input");
const submitButton = document.querySelector(".submitButton");

//create new list item
submitButton.addEventListener("click", () => {
  if (!(input.value === "")) {
    const listItem = document.createElement("li");
    listItem.innerText = input.value;
    //create a remove button for new list items
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.className = "sideButton";
    removeButton.addEventListener("click", () => {
      ul.removeChild(removeButton.parentNode);
    });
    listItem.appendChild(removeButton);
    //append listItem to ul
    ul.appendChild(listItem);

    //clear input tag
    input.value = "";
  }
});

//creating a remove button for existing list items
li.forEach((listItem) => {
  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.className = "sideButton";
  removeButton.addEventListener("click", () => {
    ul.removeChild(removeButton.parentNode);
  });
  // console.log(removeButton);
  listItem.appendChild(removeButton);
});
