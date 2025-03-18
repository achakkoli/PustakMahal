let cart = [];
function addToCart(index) {
    cart.push(books[index]);
    alert(books[index].title + ' added to cart!');
    displayCart();
}
function displayCart() {
    const container = document.getElementById('cartItems');
    container.innerHTML = '';
    cart.forEach((item, idx) => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <p><strong>Title:</strong> ${item.title}</p>
            <button onclick="removeFromCart(${idx})">Remove</button>
        `;
        container.appendChild(div);
    });
}
function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}
function checkout() {
    if (!isLoggedIn) {
        alert('Please login before checkout!');
        return;
    }
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert('Checkout successful! Thank you for your purchase.');
    cart = [];
    displayCart();
}