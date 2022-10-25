
Percorrer de Zero até o número de alunos

Se o número for par, escreva ‘par’ e o número correspondente

Se o número for ímpar, escreva ‘ímpar’ e o número correspondente  

Se o número for zero, escreva ‘zero’ e o número correspondente


let numerodealunos = 20
for(let contador = 0; contador <= numerodealunos; contador++){
    
    if(contador == 0){
        console.log(contador+ "- O número atual é zero")

    }else if(contador % 2 == 0){
        console.log(contador+ "- O número é par")
        
    }else{
        console.log(contador+ "- O número é ímpar")
    }
}



