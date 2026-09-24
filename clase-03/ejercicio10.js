function evaluarAccesoApp(edad, tienePermisoDocente, esInvitado) { 
    
    if (esInvitado === true) { 
        return false; 
    } 
    
    if (edad >= 18 || (edad < 18 && tienePermisoDocente === true)) { 
        return true; 
    } 
    
    return false; 
}