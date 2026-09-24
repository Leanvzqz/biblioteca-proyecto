function bmi(peso, altura) { 
    let resultado = peso / (altura ** 2); 
    
    if (resultado < 18.5) { 
        return "Bajo de peso"; 
    } else if (resultado <= 24.9) { 
        return "Normal";
     } else if (resultado <= 29.9) { 
        return "Sobrepeso"; 
    } else { return "Obeso"; 
        
    } 
}