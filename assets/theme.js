// Add your JavaScript here
$(document).ready(function() {
    $('.add-to-cart-btn').on('click', function(e) {
        e.preventDefault();
        var variantId = $(this).data('variant-id'); // Get the variant ID from data attribute
        var quantity = 1; // Default quantity

    $(document).ready(function() {
    $('.add-to-cart-btn').on('click', function(e) {
        e.preventDefault();
        var variantId = $(this).data('variant-id'); // Get the variant ID from data attribute
        var quantity = 1; // Default quantity

        // Add the product to the cart using AJAX
        $.post('/cart/add.js', {
            quantity: quantity,
            id: variantId
        }).done(function() {
            alert('Product added to cart!');
            // Optionally redirect to the cart page
            // window.location.href = '/cart';
        }).fail(function() {
            alert('Error adding product to cart.');
        });
    });
});
