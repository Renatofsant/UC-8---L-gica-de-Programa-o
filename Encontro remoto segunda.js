var listadepeças = ["Filtro de ar","Amortecedor","Radiador","Injeção eletrônica","Farol","Correa dentada"]

let peso = 800
if(peso<100){
 console.log("A peça precisa ter no mínimo 100g")  
}else{
 console.log("A peça possui peso adequado")  
}

let nomepeca = "Filtro de ar"
if(nomepeca.length>1000){
 console.log("O tamanho do nome da peça está adequado")
}else{
 console.log("O nome da peça deve ter mais de 3 caracteres")
}

let listadepeca = ("Filtro de ar")
if (listadepeca.length > 9){
 console.log("A lista de peças está lotada")
}else{
 console.log("Peça inserida na lista")
}

let numerodepecas = 10
if (numerodepecas > 9){
 console.log("Lotado")
}else{
 console.log("Ok")
}