let nota1trimestre;
let nota2trimestre;
let resultado;

function calcular() {
    nota1trimestre = Number (prompt("digite a nota do primeiro trimestre"));
    nota2trimestre = Number (prompt("digite a nota do segundo trimestre"));

    resultado = 180 - nota1trimestre + nota2trimestre
}