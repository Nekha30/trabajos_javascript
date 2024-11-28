const calificaciones = [
    [8, 7, 9 ], //alumno 1
    [6, 9, 7 ], //alumno 2 
    [10, 8, 7], //alumno 3 
]

console.log(calificaciones);

let alumno2 = calificaciones [1][1];
console.log("Calificacion de la segunda materia del alumno 2: " + alumno2);

calificaciones [0][2] = 7
console.log(calificaciones);
console.log("La nota del alumno fue modificada con exito")

let promAlumno1 = (calificaciones [0][0] + calificaciones [0][1] + calificaciones [0][2]) / 3 
console.log("El promedio del alumno es : " + promAlumno1);
let promAlumno2 = (calificaciones [1][0] + calificaciones [1][1] + calificaciones [1][2]) / 3 
console.log("El promedio del alumno es : " + promAlumno2);
let promAlumno3 = (calificaciones [2][0] + calificaciones [2][1] + calificaciones [2][2]) / 3 
console.log("El promedio del alumno es : " + promAlumno3);
