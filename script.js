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


function contarCaracteres(caracter){
    console.log("Número de caracteres:",caracter.length);
}
let resultado = prompt("Digite uma palavra:");
 contarCaracteres(resultado);
 
 