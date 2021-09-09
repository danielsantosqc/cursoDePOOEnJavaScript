class PlatziClass{
  constructor({
    name,
    videoID,

  }){
    this.name = name;
    this.videoID = videoID;
  }
}

// --------------courses-----------------

class Course {
  constructor({
    name,
    classes = [],
  }
  ){
    this._name = name;
    this.classes = classes;
  }
  get name(){
    return this._name;
  }
  set name (newName){
    if(newName === "Curso malito de progrmacion Basica")
    {
      console.error("Weyyy... no hagas eso..")
    }else{
      this._name = newName;
    }
  }
}

const cursoProgBasica = new Course({
  name:"Curso gratis de progrmacion basica",
})

const cursoDefinitivoHtml = new Course({
  name:"Curso definitivo de HTML y CSS",
})
const cursoPracticoHtml = new Course({
  name:"Curso practico de HTML y CSS",
})


// --------------learningPaths--------------
class LearningPath{
  constructor({
    name,
    courses = [],
  }){
    this.name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new LearningPath({
  name:"Escuela de desarrollo Web",
  courses: [
    cursoProgBasica,
    cursoDefinitivoHtml,
    cursoPracticoHtml,
  ]
})
const escuelaData = new LearningPath({
  name:"Escuela de Data Science",
  courses: [
    cursoProgBasica,
    "Curso DataBusines",
    "Curso Dataviz",
  ]
}) 
const escuelaVgs = new LearningPath({
  name:"Escuela de dVIdeojuegos",
  courses: [
    cursoProgBasica,
    "Curso Unity",
    "Curso de Unreal",
  ]
})

// ---------------------studens -------------------
class Student {
  constructor({
    name,
    username,
    email,
    twitter = undefined,
    instagram = undefined, 
    facebook = undefined,
    approveCourses = [],
    learningPaths = [],   
  }
  ){
    this.name = name;
    this.username = username;
    this.email = email;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approveCourses = approveCourses;
    this.learningPaths = learningPaths;
  }
}

const juan2 = new Student({
  name: "JuanDC",
  email: "juanito@gmail.com",
  username: " juanitofeliz",
  twitter: "juanito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
  ]

});

const miguel2 = new Student({
  name: "miguelDC",
  email: "miguelito@gmail.com",
  username: " miguelitofeliz",
  twitter: "miguelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData
  ]

});