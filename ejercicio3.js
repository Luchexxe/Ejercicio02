//* ====== EJERCICIO 3 ======

const numeros = [19, 12, 6, -31, 45, 50, -27, 1, 9, 99, 11,"A"];

//* CONSIGNA: Contamos con un listado de números y se solicita crear una función que reciba como parámetro un arreglo de numeros
//* y devuelva el valor mínimo del arreglo.
//* Si el arreglo cuenta con algun valor que no sea un número, devolver false, de lo contrario devolver el valor mínimo.
//* NOTA: No se puede hacer uso de la clase Math y su método min().


function eje3(arr)
{
  let max=numeros[0];
  let min=numeros[0];

arr.forEach((value,i,a)=>
{
if(!isNaN(value))
{
    if(arr[i]>max)
    {
        max=arr[i];
    }
    if(arr[i]<min)
    {
        min=arr[i];
    }
}
   
else
{
    console.log(false+": "+value+" no es un numero");
}

});

console.log(max);
console.log(min);
}
eje3(numeros);