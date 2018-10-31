// //***tipos de variables.. */

// var name= "stuar";
// console.log("el tipo de name es: ", typeof name);

// var age= 17;
// console.log("el tipo de name es: ", typeof age);

// var active= true;
// console.log("el tipo de name es: ", typeof active);

// //***conversiones numericas */
//  var age2=parseInt(prompt("ingrese su edad"));
//  if(isNaN(age2))
//  alert("inserte un numero")
//  else{
//     alert("su edad es ",+age2)  
//  }
//  alert(age2);

//  //***ejercicio 1: mostrar la sumatoria y la media de los numeros introducidos por pantalla hasta que el numero sea negativo */

//  var sum=0;
//  var average=0;
//  var count=0;
//  var num=25;
//  while(num>0) {
// var num= parseInt(prompt("ingrese un numero"));
// if(!isNaN(num) && num>=0) {
//     sum+=num;
//     count++;
// }
//  }
//  average=sum/count;
//  alert("la sumatoria es", +sum+ "el promedio es" +average);

//  //***mostrar todos los numeros que hay entre un rango inicial y final suministrado por el usuario */

//  var rank= parseInt(prompt("ingrese el primer rango"));
//  var rank2= parseInt(prompt("ingrese el segundo rango"));

//  if (!isNaN(rank) && !isNaN(rank2) && rank>0 && rank2>0 && rank<rank2){
//      document.write("<h1> de "+rank+"hasta "+rank2+"hay estos numeros </h1>")
//      for (let index = rank; index<=rank2; index++) {
//         console.log(index)
//     document.write("<b><br>"+index+"</br></b>")
//      }
//  }

// ***pedir por pantalla un numero y hasta ese numero decir cuales son los divisores de ese numero */

// var num3= parseInt(prompt("ingrese el numero"));
// document.write("<h1> los divisores de "+num3+"son </h1>")
// for (let index = 0; index<=num3; index++) {
    
//     if(num3%index==0){
//         console.log(index);
//         document.write("<b><br>"+index+"</br></b>")
//     }
    
// }

// var num4= parseInt(prompt("ingrese un numero"));
//  while(isNaN(num4)){
//      alert("digite nuevamente el numero")
//  num4= parseInt(prompt("ingrese un numero"));
//  }

//  if(num4%2==0){
// alert("este numero es par")
//  }
//  if(num4%2==1){
//     alert("este numero es impar")
//      }
 
//  else {
//      alert("no dijito nada correcto")
//  }

var user= prompt("ingrese su nombre");
var num5= parseInt(prompt("ingrese su contraseña"));
count=0;
while(!isNaN(num5)  && num5!='1234' && count<6){
var num5= parseInt(prompt("ingrese su contraseña"));
count++;
alert("contraseña incorrecta");

if(num5='1234' && count<6 ){
alert("contraseña correcta")
}

else {
alert("usuario bloqueado")
}
}





 
 
