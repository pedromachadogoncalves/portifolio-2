function maior() {
    let numero1;
    let numero2;

    numero1 = Number(prompt("Digite o primeiro numero"));
    numero2 = Number(prompt("Digite o segundo numero"));
    
    if(numero1 > numero2){
        alert("O numero " + numero1 + " e maior que o numero " +  numero2 + ".");
    }
   else if (numero1 < numero2) {
     alert("O numero " + numero2 + " E igual a " +  numero1 + ".");
   
   } 
    else{
         alert(" Os numeros sao iguais ");
    }



}