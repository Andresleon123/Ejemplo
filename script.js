itemForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre=productos = (document.getElementById('nombre-productos').value);
    const precio = parseFloat(document.getElementById('precio').value);
    const cantidad = parseInt(document.getElementById('cantidad').value);

    const itemRow = document.createElement('div');
    itemRow.classList.add('item-row');  
    itemRow.innerHTML = `
        <strong>${nombre-productos}</strong>
        <p>Price: $${precio.toFixed(2)}</p>
        <p>Quantity: ${cantidad}</p>
    `;
        LEONContainer.appendChild(itemRow);

        itemForm.reset();
});