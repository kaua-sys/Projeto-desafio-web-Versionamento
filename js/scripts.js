console.log("teste");

/*Coméntario de múltiplas linhas,ou seja posso 
escrever, posso desrever algo nesse tipo de comentário
*/

//Criando Variáveis
let idade = 17;
var nome = "Pedro";
const altura = 1.80
let admin = false
let moderador = false

console.log("Sua idade é: " + idade);
console.log('Seu nome é: ',nome);
console.log(`Sua altura é:   ${altura}`); 

//Teste do If
if (idade >=18) {
     console.log("Maior de Idade")  
}  else {
    console.log("Menor de Idade")
}

if (altura > 1.75) {
    console.log("Acima da Média")
} else if (altura = 1.75) {
    console.log("Média")
} else {
    console.log("Abaixo da Média")
}

//Operadores Matemáticos
/*
    + SOMA
    - SUBTRAÇÃo
    * MULTIPLICAÇÃO
    / DIVISÃO
    % MÓDULO(RESTO DA DIVISÃO)
*/

//Operadores Relacionais
/*
    = Atribuição
    == Comparação ou igual
    === Comparação estrita (compara tanto o valor quanto o tipo se é string ou number)
    > Maior que
    < Menor que
    >= Maior ou Igual
    <= Menor ou Igual
    != Diferente
*/

//Operadores Lógico
/*
     && E
    || Ou
*/

//Teste do ||
if(admin == true || moderador == true) {
    console.log("Acesso Permitido")
} else {
    console.log("Acesso Negado")
}