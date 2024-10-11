// Este es un comentario 
/* este 
es comentario
varias lineas */

// alerta
// alert("Soy la cabra")

// variables
var nombre = "JESUS RAMIRO RIVERA BRACHO";
let nombre2 = "Andre Pierre Gignac";
let edad = 20;
let logica = true;
let estatura = 1.80;

// Mostrar en pantalla
let concatenacion = "la persona " + nombre + ", tiene la edad de: " + edad + " años.";
/*document.write("<h1>"+concatenacion+"</h1><br>");
document.write("la persona " +nombre+", tiene la edad de: "+edad+" años.");*/

// Mostrar en pantalla con document getElementById

let datos = document.getElementById("informacion");
datos.innerHTML = `
<br>
<hr>
<h1>La persona: ${nombre2}, tiene una edad de ${edad} años</h1>
<hr>
<br>
`;

let datos2 = document.getElementById("informacion2");
datos2.innerHTML = "<h2> la edad es:" + edad + "</h2>";

// Condiciones if
if (estatura >= 1.90) {
    document.write("Es una jirafa");
    datos2.innerHTML += `
    <hr>
    <h3>Es una persona alta</h3>
    `;
} else {
    document.write("Es un capo normal");
    datos2.innerHTML += `
    <hr>
    <h3>Es una persona promedio</h3>`;
}

// Ciclos
for (let i = 1; i <= 5; i++)
    datos.innerHTML += `<hr><h3>For: el numero es ${i}</h3>`;

let i = 1; // Definir `i` antes del ciclo while
while (i <= 5) {
    datos.innerHTML += `<hr><h3>While: el numero es: ${i}</h3>`;
    i++;
}
i = 1;
do{
    datos.innerHTML += `<hr><h3>DoWhile: el numero es: ${i}</h3>`;
    i++;

} while(i<=5)

//funciones

//1 Que no recibe parametros y no regresa valor
function suma()
{
    let n1=2;
    let n2=4;
    suma=n1+n2
    console.log("la suma es:"+suma);
    datos.innerHTML+=`<hr><h3>la suma es: ${suma}</h3>`
}
suma();
 
//2 Que no recibe parametros 
function suma2()
{
    let n1=2;
    let n2=4;
    suma=n1+n2
    return suma
    
}
let sum=suma2();
datos.innerHTML+=`<hr><h3>la suma es: ${sum}</h3>`

//3 que recibe parametros y no regresa valor
function suma3(numero1,numero2)
{
    let n1=numero1;
    let n2=numero2;
    suma=n1+n2
     datos.innerHTML+=`<hr><h3>la suma es: ${suma}</h3>`
    
}
suma3(3,4);

//4 Que recibe parametros y regresa valor
function suma4(numero1,numero2)
{
    let n1=numero1;
    let n2=numero2;
    suma=n1+n2
    return suma
    
}
sum=suma4(8,5);
datos.innerHTML+=`<hr><h3>la suma es: ${sum}</h3>`

//arreglos

let animales=[]
animales[0]="Perico"
animales[1]="Leon"
animales[2]="Perro"
datos.innerHTML+=`<hr><h3>El rey de la selva es: ${animales[1]}</h3>`

for(let i=0;i<3;i++)
{
    datos.innerHTML+=`<hr><h3>El rey de la selva es: ${animales[i]}</h3>`
}

animales.forEach(element => {
 datos.innerHTML+=`<hr><h3>El dnd: ${element}</h3>`
});

//funcion de flecha}

//funcion normal
function sumaR(a,b)
{
    return a+b
}
datos.innerHTML+=`<hr><h3>La suma r es: ${sumaR(3,6)}</h3>`
const sumaFlecha=(a,b)=>a+b;
datos.innerHTML+=`<hr><h3>La suma r es: ${sumaFlecha(3,2)}</h3>`