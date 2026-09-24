function calcularTarifa(tipoVehiculo, hora, esFeriado) { 
    
    tipoVehiculo = tipoVehiculo.toLowerCase(); 
    
    let tarifaBase; 
    

    if (tipoVehiculo === "moto") { 
        tarifaBase = 150; 
    
    } else if (tipoVehiculo === "auto") { 
        tarifaBase = 300; 
    
    } else if (tipoVehiculo === "camion") { 
        tarifaBase = 600; 
    
    } else { 
        console.warn("Tipo de vehículo inválido."); 
        return 0; 
    } 
    
    let esHoraPico = 
    (hora >= 8 && hora <= 10) || 
    (hora >= 17 && hora <= 19); 

    if (esHoraPico && esFeriado === false) { 
        tarifaBase = tarifaBase * 1.30; 
    } 
    
    return tarifaBase; 
} 


function simularFilaCabina(cantidadVehiculos) { 
    
    let totalRecaudado = 0; 
    
    let tiposVehiculo = ["moto", "auto", "camion"]; 
    
    for (let i = 1; i <= cantidadVehiculos; i++) { 
        

        let indiceVehiculo = Math.floor( 
            Math.random() * tiposVehiculo.length
        ); 
         
        let tipoVehiculo = tiposVehiculo[indiceVehiculo]; 
         
        let hora = Math.floor(Math.random() * 24); 
          
        let esFeriado = Math.random() < 0.5; 
        
        let tarifa = calcularTarifa( tipoVehiculo, hora, esFeriado ); 
        
        totalRecaudado += tarifa; 
        
        console.log( `[Intento ${i}] Vehículo: ${tipoVehiculo} | Hora: ${hora} | Feriado: ${esFeriado} | Tarifa cobrada: $${tarifa}` 

        ); 
    } 

    return totalRecaudado; 
}