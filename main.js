function parametr(n){

    
    if(100 <= n && n<= 200) {
        console.log('Liczba znajduje się w przedziale');
        return true;
        
    }
    
    else {
        console.log('Liczba nie znajduje się w przedziale');
        return false;
    }
}
parametr(88);