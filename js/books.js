const books = [
    { title: 'The Art of Learning', author: 'Josh Waitzkin', image: 'assets/book1.jpg' },
    { title: 'The Code Breakers', author: 'David Kahn', image: 'assets/book2.jpg' }
];
function displayBooks() {
    const container = document.getElementById('booksContainer');
    container.innerHTML = '';
    books.forEach((book, index) => {
        const div = document.createElement('div');
        div.className = 'book';
        div.innerHTML = `
            <img src="${book.image}" alt="${book.title}" />
            <p><strong>Title:</strong> ${book.title}</p>
            <p><strong>Author:</strong> ${book.author}</p>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;
        container.appendChild(div);
    });
}
function searchBooks() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query));
    const container = document.getElementById('booksContainer');
    container.innerHTML = '';
    filteredBooks.forEach((book, index) => {
        const div = document.createElement('div');
        div.className = 'book';
        div.innerHTML = `
            <img src="${book.image}" alt="${book.title}" />
            <p><strong>Title:</strong> ${book.title}</p>
            <p><strong>Author:</strong> ${book.author}</p>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;
        container.appendChild(div);
    });
}
window.onload = displayBooks;