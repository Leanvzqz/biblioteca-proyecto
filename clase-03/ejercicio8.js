function duplicar(arreglo) 
{ let nuevoArreglo = []; 
    for (let i = 0; i < arreglo.length; i++) { 
        nuevoArreglo.push(arreglo[i] * 2); 
    } 
    
    return nuevoArreglo; 
}