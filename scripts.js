document.addEventListener("DOMContentLoaded", function() {
    const books = document.querySelectorAll(".book");
    books.forEach(book => {
        book.addEventListener("click", function() {
            alert(`You selected: ${this.querySelector("p strong").textContent}`);
        });
    });
});
