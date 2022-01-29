let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value; 
    let carne = carnePessoa(duracao);//outra forma

   let quantidadeTotalCarne =  (carne  * adultos  + (carne/2 * criancas));
   let quantidadeTotalCerveja =  (cervejaPessoa(duracao) * adultos);
   let quantidadeTotalBebidas =  (bebidasPessoa(duracao) * adultos  + (bebidasPessoa(duracao)/2 * criancas));

    resultado.innerHTML = `<p>${quantidadeTotalCarne/1000} Kilos de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(quantidadeTotalCerveja/355)} latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(quantidadeTotalBebidas/2000)}  pet´s de 2 litros de Bebidas</p>`

   console.log(quantidadeTotalCarne);
   console.log(quantidadeTotalCerveja);
   console.log(quantidadeTotalBebidas);
   
}

function carnePessoa(duracao){

if(duracao >= 6){
    return 650;
}
else{
    return 400;
}

}

function cervejaPessoa(duracao){

    if(duracao >= 6){
        return 2000;
    }
    else{
        return 1200;
    }
    
}

function bebidasPessoa(duracao){

    if(duracao >= 6){
        return 1500;
    }
    else{
        return 1000;
    }
    
}