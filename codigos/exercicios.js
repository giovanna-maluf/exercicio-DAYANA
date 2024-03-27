
    // Exercício 1: Soma de dois números
let num1 = 10;
let num2 = 5;
let soma = num1 + num2;
document.getElementById("resultado1").textContent = "A soma é: " + soma;

// Exercício 2: Diferença entre dois números
let num3 = 10;
let num4 = 5;
let diferenca = num3 - num4;
document.getElementById("resultado2").textContent = "A diferença é: " + diferenca;

// Exercício 3: Produto de dois números
let num5 = 10;
let num6 = 5;
let produto = num5 * num6;
document.getElementById("resultado3").textContent = "O produto é: " + produto;

// Exercício 4: Divisão do primeiro pelo segundo número
let num7 = 10;
let num8 = 5;
let divisao = num7 / num8;
document.getElementById("resultado4").textContent = "O resultado da divisão é: " + divisao;

// Exercício 5: Determinar se um número é par ou ímpar
let numero = 7;

function parOuImpar(num) {
    if (num % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}

document.getElementById("resultado5").textContent = "O número " + numero + " é " + parOuImpar(numero);