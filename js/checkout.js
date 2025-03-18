
// Stripe Checkout Logic
const stripe = Stripe('your-publishable-key');

document.getElementById('checkout-total').textContent = '$' + localStorage.getItem('cartTotal');

document.getElementById('pay-button').addEventListener('click', async () => {
  // This is a placeholder, in reality you trigger Stripe session from backend
  alert('Redirecting to payment (demo)...');
  window.location.href = 'thankyou.html';
});
