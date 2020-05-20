var books = document.querySelectorAll("#book-list li .name");

Array.from(books).forEach(function (book) {
  book.textContent += " (Book Title)";
});

const booklist = document.querySelector("#book-list");
// booklist.innerHTML = "<h2>Books and More Books</h2>";
booklist.innerHTML += "<p>This is how you add HTML</p>";
