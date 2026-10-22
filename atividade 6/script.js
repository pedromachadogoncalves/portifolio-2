function site(){
    let nome;
    let mostrar;

    nome = prompt("Qual e o nome");
    mostrar = document.getElementById('mostrar');

    mostrar.innerHTML = `<p>Ola! ${nome}! Seja bem vindo`


}