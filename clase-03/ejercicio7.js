function numeroDeCaracteres(str, caracter) { 
    let contador = 0; 
    
    for (let i = 0; i < str.length; i++) { 
        if (str[i] === caracter) { 
            contador++; 
        } 
    } 
    return contador; 
}