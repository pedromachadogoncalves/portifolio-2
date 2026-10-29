const { use } = require("react");

function aleatorio(){
    let min = 1;
    let max  = 100 ;
    let dif = max - min;
    let aleatorio = Math.random();
    let num = min + Math.trunc(dif * aleatorio);
    
    
    
    if(num == 67){
        let mostrar = document.getElementById('resultado');
    mostrar.innerHTML = `<p> ${num} voce e um beta mogado vou morder seu pezinho de noite</p>`;
    
    }
    if(num == 13){
        let mostrar = document.getElementById('resultado');
    mostrar.innerHTML = `<p> ${num} petista </p>`;
    }
    
    
    
    else{
    let mostrar = document.getElementById('resultado');
    mostrar.innerHTML = `<p> Acabei de pensar no numero ${num}.</p>`;
    }

    }
