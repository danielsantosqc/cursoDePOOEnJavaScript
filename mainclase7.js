// comment-------------------
class Comment{
  constructor({content, studentName, studentRole = "estudiante",  }){
    this.  \
  }
}

function videoPlay(id){
  const urlSecreta = "https://videosecretisimo"
  console.log('Se esta reproduciendo desde la ulr:  '+ urlSecreta)
}
function videoStop(id){
  const urlSecreta = "https://videosecretisimo"
  console.log('Pausamos la ulr:  '+ urlSecreta)
}


class PlatziClass{
  constructor({
    name,
    videoID,

  }){
    this.name = name;
    this.videoID = videoID;
  }
  reproducir(){
    videoPlay(this.videoID);
  }
  pausar(){
    videoStop(this.videoID);
  }
}

// --------------courses-----------------

class Course {
  constructor({
    name,
    classes = [],
    isFree = false,
    lang = "spanish",
  }
  ){
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }
  get name(){
    return this._name;
  }
  set name (newName){
    if(newName === "Curso malito de programacion Basica")
    {
      console.error("Weyyy... no hagas eso..");
    }else{
      this._name = newName;
    }
  }
}

const cursoProgBasica = new Course({
  name:"Curso gratis de progrmacion basica",
  isFree:true,
})

const cursoDefinitivoHtml = new Course({
  name:"Curso definitivo de HTML y CSS",
})
const cursoPracticoHtml = new Course({
  name:"Curso practico de HTML y CSS",
  lang:'english',
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
// general class -----------
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
//  first type student------------
class FreeStudent extends Student{
  constructor(properties){
    super(properties);  
  }

  approveCourse(newCourse){
    if(newCourse.isFree){
      this.approveCourses.push(newCourse);
    }else{
      console.warn("lo sentimos, " +this.name+ " solo puedes tomar cursos abiertos");
    }
  }
}
// second type student--------------
class BasicStudent extends Student{
  constructor(properties){
    super(properties);
  }

  approveCourse(newCourse){
    if(newCourse.lang !== "english"){
      this.approveCourses.push(newCourse);
    }else{
      console.warn("lo sentimos, " +this.name+ " no puedes tomar cursos en ingles");
    }
  }
}
// third type student--------------
class ExpertStudent extends Student{
  constructor(properties){
    super(properties);
  }

  approveCourse(newCourse){
    console.warn("lo sentimos, " +this.name+ " solo puedes tomar cursos abiertos");
  }
}

const juan = new FreeStudent({
  name: "JuanDC",
  email: "juanito@gmail.com",
  username: " juanitofeliz",
  twitter: "juanito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
  ]

});

const miguel = new BasicStudent({
  name: "miguelDC",
  email: "miguelito@gmail.0com",
  username: " miguelitofeliz",
  twitter: "miguelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData
  ]

});