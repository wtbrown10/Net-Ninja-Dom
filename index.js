const list = document.querySelector("#book-list ul");

list.addEventListener("click", function (e) {
  if (e.target.className == "delete") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

//add book list

const addForm = document.forms["add-book"];

addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;

  // create elements
  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const deleteBtn = document.createElement("span");

  //add text content
  deleteBtn.textContent = "delete";
  bookName.textContent = value;

  //add  classes
  bookName.classList.add("name");
  deleteBtn.classList.add("delete");

  //append to document
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});

//hide books
const hideBox = document.querySelector("#hide");
hideBox.addEventListener("change", function (e) {
  if (hideBox.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});
