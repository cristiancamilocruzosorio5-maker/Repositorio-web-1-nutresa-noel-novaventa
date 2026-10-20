
function registrarIngrediente() {
    
    
    let nombre = prompt("Nombre del ingrediente:");
    let cantidad = prompt("Cantidad que necesitas:");
    let unidad = prompt("Unidad de medida (ej: gramos, tazas, ml):");

    let cantNum = parseFloat(cantidad);

    
    if (!nombre) {
        alert("Por favor escribe el nombre del ingrediente");
    } else if (!cantidad || isNaN(cantNum)) {
        alert("Escribe una cantidad válida");
    } else if (cantNum <= 0) {
        alert("La cantidad debe ser mayor a cero");
    } else if (!unidad) {
        alert("Escribe la unidad de medida");
    } else {
        
        alert("¡Ingrediente guardado! Nombre: " + nombre + " Cantidad: " + cantNum + " Unidad: " + unidad);
    }
}


registrarIngrediente();