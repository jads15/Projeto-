var nome = "João"
var Sexo = "Masculino"
switch(Sexo){
    case "Masculino":
    console.log('Bem vindo, '+ nome )
    break
    case "Feminino":
        console.log("Bem vinda, "+ nome)
       break
     default:
}
console.log("Escolha uma area geométrica")
area = "retângulo"
switch(area){
 case "triangulo":
 var b =6
 var h = 3
 var area = b*h/2
 console.log("A aréa é "+ area + "cm²") 
 break
case "retângulo":
 var b =2
var h = 5
var área = b*h
console.log("A área é "+ área+ "cm²")
break
case "ciruclo":
const pi =3.14
var r = 2
var área =pi*r**2
console.log("A área é "+ área+"cm²")
break
default:
}
console.log("Escolha um figura espacial para calcular o volume")
 var volume = "Cilindro"
 switch(volume){
 case "Paralelepipedo":
var comprimento =10;
 var base = 5;
 var altura = 2;
 var volume = comprimento*base*altura
 console.log("O volume é " + volume +"cm³" )
 break
case "Cilindro":
  pi = 3.4
  r = 3
  h = 5
var Volume = pi*r**2*h
console.log("O volume é "+ Volume + "cm³")
default: 
}
console.log("Fim")
