
//***pedir datos por teclado */

var nombre= prompt ("ingrese su nombre");
console.log("este es mi nombre",nombre);
alert(nombre);

var edad= prompt("ingrese su edad");
console.log("esta es mi edad",edad);
alert(edad);

//***variables numericas */
var num= 5;
console.log("mum",num);

//***variables de texto */
var palabras="palabras";
console.log("palabras",palabras);

//***variables booleanas */
var activo= true;
console.log("true",activo);

//***variables tipo arreglos  */
var colores=["red","cyan",activo,num];
console.log("colores",colores);

//***variables de tipo objeto u object */
var vehiculo= {
    tipo:"automovil",modelo:2018,usado:true
};

//***constantes */
const edad1=15;
console.log("edad const",edad1);

//***concatenacion variables */

var anio= 2018;
var promedio= "25";
console.log("la concatenacion de ",+anio+" y "+promedio+" es ",anio+Number(promedio));

let num1=25;
let num2=25;
console.log("la concatenacion de ",+num1+" y "+num2+" es ",String (num1) + String (num2));

//***ventanas */

/*alert: es un metodo que espera una cadena*/
alert(("la concatenacion de ",+num1+" y "+num2+" es "+String (num1) + String (num2)))
/*prompt:es un metodo que recibe un parametro o un valor por defecto como esta en el ejemplo */
var modelo= prompt("el modelo del carro es ",2018);
/*conf:es un metodo que permite tomar una decicion*/
var conf= confirm("desea salir de la aplicacion")
console.log("decicion", conf);