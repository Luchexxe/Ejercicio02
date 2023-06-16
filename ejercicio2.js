//* ====== EJERCICIO 2 ======

const alumnosRegulares = ["Pablo", "Jorge", "Laura", "Francisco", "Carla"];
const alumnosEgresados = [];

//* Contamos con 2 (dos) arreglos, un listado con alumnos regulares y otro listado con alumnos egresados.

//* CONSIGNA: Crear una función que reciba 3 (tres) parámetros, un arreglo con el listado de alumnos regulares,
//* otro arreglo con el listado de alumnos egresados, y un tercer parámetro indicando el nombre del alumno que desea
//* pasar de "regular" a "egresado". La función debe devolver el listado de alumnos egresados.
//* Nota: El primero que egresa debe ser el primero de la lista "alumnosEgresados"
//* En caso de no contar con mas alumnos regulares devolver un objeto con el siguiente formato:
//* {
//*   ok: false,
//*   msg: 'Ya no existen mas alumnos regulares'
//* }

//* En caso de que el alumno pasado como argumento no se encuentre, devolver false.


function eje2(reg,egre,alum)
{
    if(reg.length>0)
    {

        let i=reg.find((value) =>
        {
          return value===alum;
        });
        if(i==alum)
        {
           
            egre.push(i);
          let index=  reg.indexOf(i);
            reg.splice(index,1);
            console.log(alumnosRegulares);
            console.log(alumnosEgresados);
            console.log("----------------");
        }
        else
        {
            console.log(false);
            console.log("----------------");
    
        }
    }
    else
    {
        console.log({ok: false,
            msg: 'Ya no existen mas alumnos regulares'})
            
    }
    

}

eje2(alumnosRegulares,alumnosEgresados,"Pablo");
eje2(alumnosRegulares,alumnosEgresados,"Jorge");
eje2(alumnosRegulares,alumnosEgresados,"Laura");
eje2(alumnosRegulares,alumnosEgresados,"Francisco");
eje2(alumnosRegulares,alumnosEgresados,"Jose");
eje2(alumnosRegulares,alumnosEgresados,"Carla");
eje2(alumnosRegulares,alumnosEgresados,"Luis");