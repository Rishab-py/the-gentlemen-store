document.addEventListener('DOMContentLoaded', function () {
    const cart = [];
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Add item to cart
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.getAttribute('data-product-id');
            const productPrice = parseFloat(this.getAttribute('data-product-price'));

            // Add product to cart
            cart.push({ productId, productPrice });

            // Update the cart display
            updateCart();
        });
    });

    // Update cart display
    function updateCart() {
        cartItemsElement.innerHTML = '';
        let totalPrice = 0;

        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.textContent = `Product ID: ${item.productId}, Price: $${item.productPrice}`;
            cartItemsElement.appendChild(itemElement);
            totalPrice += item.productPrice;
        });

        totalPriceElement.textContent = totalPrice.toFixed(2);
    }

    // Checkout
    document.getElementById('checkout').addEventListener('click', function () {
        alert('Checkout process (not implemented in this demo)');
    });
});
