/*
Atividade 1 =

console.log('helo world');

let numero= prompt ('digite um número:');
function verificarPar(numero) {
    if(numero % 2 === 0){
        console.log(numero + " é igual a par.");
    }else{
        console.log(numero + "é igual a impar.");
    }


}
    verificarPar(numero);

*/


/*
Atividade 2 =
let n1 = parseFloat(prompt ('digite um numero:'))
let n2= parseFloat(prompt ('Digite outro numero'))
 
function calcular(n1,n2){
    const soma=n1+n2;
    const subtracao=n1-n2;
    const multiplicacao=n1*n2;
    console.log(soma)
    console.log(subtracao)
    console.log(multiplicacao)
    if (n2===0){
        console.log("Não da para dividir por 0!")
    }else{
        const divisao= n1/n2;
        console.log(divisao)
    }
 }
 calcular(n1,n2);
*/
 



/*
Atividade 3 =

let numero=10
 do{
    console.log(numero);
    numero--;

 } while(numero>= 1);
*/

/*
Atividade 4 =

function inverterTexto(texto) {
    return texto.split('').reverse() .join(' ');
}

let palavra = prompt("Digite uma palavra");
let resultado = inverterTexto(palavra);

console.log(" a frase invertida é:",resultado);
 */

/* atividade 5=
function contarCaracteres(caracter){ // abrindo função
    console.log("Número de caracteres:",caracter.length); // lenght para contar número de caracteres
}
let resultado = prompt("Digite uma palavra:"); // para o cliente digitar a palavra
 contarCaracteres(resultado); //imprimir o resultado
 */

/*
Atividade 6=

 let carro = {
    marca: "Honda",
    modelo: "Civic Type-R",
    ano: 2022
 };
 console.log("Marca:",carro.marca);
 console.log("Modelo:",carro.modelo);
 console.log("Ano:",carro.ano);
*/


/*
Atividade 7=

function mensagemPersonalizada(nome) {
 console.log(`Olá, ${nome}!`); //uso de crases para  interpolação de strings
}

let nomeCliente = prompt("Digite seu nome:");
mensagemPersonalizada(nomeCliente);
*/

/*
Atividade 8 =

function media(n1,n2,n3){
    let resultado= (n1+n2+n3)/ 3 ;
    console.log(`Sua média é: ${resultado}`);
}

let n1=parseFloat(prompt("Digite o primeiro número:"));
let n2=parseFloat(prompt("Digite o segundo número:"));
let n3=parseFloat(prompt("Digite o terceiro número:"));

media(n1,n2,n3);
*/

/*
Atividade 9 =
for( let i=1;i<=20; i++){
    if (i % 3 === 0) { //se o resto da divisao de 3 resta 0,
        console.log( i + " é múltiplo de 3");
    }else{
        console.log( i+ " não é multiplo de 3");
    }
}
*/

function  verificaParli(palavra){
    let invertida = palavra.split('').reverse().join('');
    return palavra === invertida;
    
}

let palavra = prompt("Digite uma palavra para identificar se é um palíndromo:");
console.log(`A palavra ${palavra}" é um palíndromo? ${verificaParli(palavra)}`);




 