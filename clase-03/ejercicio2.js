function calcularImpuestos(edad, ingresos) { 
    if (edad >= 18 && ingresos >= 1000) { 
        return ingresos * 0.4;
     } 
     
     return 0; 
    }