let num1 = 2
const num2 = 3
var msg = "Olá amigos! Esse é o número:"

console.log(msg , num1);
console.log(num1+num2);
console.log(typeof num1);
console.log(typeof msg);
//métodos são funcionalidades prontas da linguagem e que podem receber parâmetros 

function  Somar (){
    n1 = 2;
    n2 = 5;
    console.log("o resultado é:", + n1 + n2)
}

Somar()

function SomarComParametros (n1,n2) {
    let resultado = "o resultado é: " + (n1 + n2)
    console.log(resultado)
}

const Teste =(n) =>{
        let result = n % 2

    if (result ==1){
        return "Número impar"
    }
    
    return "Número par"
}

console.log(Teste(2))
console.log(Teste(7))
Teste(5)// não tem console 