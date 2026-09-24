function procesarCompraMovil(precioBase, descuentoPct) { 

    function aplicarDescuento(precio, descuento) { 
     return precio - (precio * descuento / 100); 
    } 
    
    const sumarIva = function(precio) { 
        return precio + (precio * 0.21); 
    }; 
    
    const redondear = (valor) => { 
        return Number(valor.toFixed(2)); 
    }; 
    
    let precioDescontado = aplicarDescuento(precioBase, descuentoPct); 
    let precioConIva = sumarIva(precioDescontado); 
    let precioFinal = redondear(precioConIva); 
    
    return precioFinal; 
}