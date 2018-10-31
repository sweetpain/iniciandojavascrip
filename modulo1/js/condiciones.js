/***realizar un script que pida al usuario dos numeros y diga si son iguales */
var num1= prompt("ingrese su edad")


if (num1>0 && num1<=2){
    console.log("bebe")
}

else if  (num1>3 && num1<=10){
    console.log("niño")
}

else if  (num1>11 && num1<=27){
console.log("joven")
}

else if  (num1>28 && num1<=45){
    console.log("adulto")
    }

    else if  (num1>46 && num1<=60){
        console.log("adulto")
        }

        else if  (num1>60 && num1<=100){
            console.log("anciano")
            }

            else if  (num1>101 && num1<=1000){
                console.log("esta muerto")
                }

  //***operador terniario */  
  var aux=0;
  if(a==b){
      aux=5;
      console.log(aux);
  } 
  else{
aux=10;
console.log(aux);
  }     
  //***esto minimiza todo el anterior ejemplo */
  var result= a==b? 10 : 20
  console.log(result);

  var year= prompt=("introduzca un año");
  var result2= year != 2018? true : false;

  //***switch */
  var day= prompt("introduzca un dia de la semana");

  switch (day){
      case "sabado":
      console.log("voy a ir al cine")
      break;

      case "domingo":
      console.log("voy hacer de todo")
      break;

      case "lunes":
      console.log("voy a trabajar")
      break;

      default:
       console.log("no es un dia valido")
  }