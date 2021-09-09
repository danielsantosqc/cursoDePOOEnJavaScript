// clase 5

// OBJETOS LITERALES
const daniel = {
  name: "daniel",
  age: 33,
  cursosAprobados: [
    "Curso definitivo de HTML y CSS",
    "Curso practico de HTML y CSS"
  ],
  aprobarCurso(nuevoCursito){
    this.cursosAprobados.push(nuevoCursito);
  }
};

// hacer que daniel aprueve otro curso
// daniel.cursosAprobados.push("Curso de JavaScript")

// ----------------------------------------------------------------------

// PROTOTIPOS DE FUNCIONES
function Student(name, age,cursosAprobados){
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
  // this.aprobarCurso = function(nuevoCursito){
  //   this.cursosAprobados.push(nuevoCursito); 
  // }
}
//INSTANCIA DE PROTOTIPO
Student.prototype.aprobarCurso = function(nuevoCursito){ 
    this.cursosAprobados.push(nuevoCursito);
}

const juanito = new Student("Juanito", 15, ["Curso de videojuegos", "prework"]);


// --------------------------CLASE 06------------------------------------

//PROTOTIPOS CON SISTAXIS DE CLASES
// class Student2 {
//   constructor(name, age, cursosAprobados){
//     this.name = name;
//     this.age = age;
//     this.cursosAprobados = cursosAprobados;

//   }
//   aprobarCurso(nuevoCursito){
//     this.cursosAprobados.push(nuevoCursito);
//   }
// }

// const miguelito = new Student2('Miguel', 25, ['Curso de analisis de datos en Pyton', 'Git y GitHub'])

class Student2 { //otra opcion que es mas bella de usar
  constructor({
    cursosAprobados = [],
    name, 
    age,
    email 
  }){
    this.email = email;
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;

  }
  aprobarCurso(nuevoCursito){
    this.cursosAprobados.push(nuevoCursito);
  }
}

const miguelito = new Student2(
  {
    name:'Miguel',
    age: 25, 
    cursosAprobados:['Curso de analisis de datos en Pyton', 'Git y GitHub'],
    email: "miguelito@platzi.com"
  });