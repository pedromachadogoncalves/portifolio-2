
let numero

function parouimpar(){
     numero = Number(prompt("imforme um numero"))

resultado = numero % 2;

if(numero == 13){
     alert("jose e petista ");
}

if(resultado == 0){
     alert("o numero " + numero + " e par.");
}else{
     alert("o numero "  + numero + " e impar.");
}

}