// Get all product cards and discount input
const cards = document.querySelectorAll('.card');
const discountInput = document.getElementById('discountInput');

function updatePrices() {
  let discountPercent = parseFloat(discountInput.value);

  if (isNaN(discountPercent) || discountPercent < 0) {
    discountPercent = 0;
  }
  if (discountPercent > 100) {
    discountPercent = 100;
  }

  cards.forEach((card) => {
    const originalPrice = parseFloat(card.dataset.price);
    const discountedPrice = (originalPrice * (1 - discountPercent / 100)).toFixed(2);

    const originalPriceEl = card.querySelector('.original-price');
    const discountTagEl = card.querySelector('.discount-tag');
    const discountedPriceEl = card.querySelector('.discounted-price');

    if (discountPercent > 0) {
      
      originalPriceEl.classList.add('discounted');
      originalPriceEl.textContent = `$${originalPrice.toFixed(2)}`;

     
      discountTagEl.textContent = `-${discountPercent}%`;

      
      discountedPriceEl.textContent = `$${discountedPrice}`;
    } else {
      
      originalPriceEl.classList.remove('discounted');
      originalPriceEl.textContent = `$${originalPrice.toFixed(2)}`;

      discountTagEl.textContent = '';
      discountedPriceEl.textContent = '';
    }
  });
}

updatePrices();
discountInput.addEventListener('input', updatePrices);
