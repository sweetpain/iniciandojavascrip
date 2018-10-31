
//***ciclo while */
//***realizar la sumatoria de numeros ingresados por pantalla, cuando el numero sea =0 me debe imorimir el resultado de la sumatoria.... */

var num= prompt("ingrese el numero");
var sum=0;
while (num!=0){
    sum=sum+num;
 var num= prompt("ingrese el segundo numero");

}

console.log("la sumatoria de estos numeros es", sum)

//***ciclo do while */

var sum=0;
do{
    var num= prompt("ingrese el numero");
    sum+=num;  
} while (num!=0);
