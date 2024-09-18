document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('size-form');
    const errorMessage = document.getElementById('error-message');
    const buyButton = document.getElementById('buy-button');

    buyButton.addEventListener('click', function(event) {
        errorMessage.textContent = '';

        const sizeSelected = form.querySelector('input[name="size"]:checked');

        if (!sizeSelected) {

            event.preventDefault();

            errorMessage.textContent = 'Por favor, selecione um tamanho antes de adicionar ao carrinho.';
        } else {
            form.submit();
        }
    });
});

