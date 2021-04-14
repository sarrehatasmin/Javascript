//Create an object
var student1={
    name:"Sarreha",
    district:"naogaon",
    age:23,
    cgpa:3.95,
    lang:"Bangla, English,Hindi",


}
console.log(student1.name);
console.log(student1.age);
console.log(student1.lang);
console.log(student1.district);
//adding constructor
function student(name,district,age,cgpa,lang){
    this.name=name;
    this.district=district;
    this.age=age;
    this.cgpa=cgpa;
    this.lang=lang;
}
var student1=new student("rikta","naogaon",25,3.97,"Bangla, English,Somali");
console.log(student1.name);
console.log(student1.district);
console.log(student1.age);
console.log(student1.cgpa);
console.log(student1.lang);

var student2=new student("ripa","Dhaka",20,3.80,"Bangla, English,Somali,Hindi");
console.log(student2.name);
console.log(student2.district);
console.log(student2.age);
console.log(student2.cgpa);
console.log(student2.lang);
//Adding function in a constructor
function student(name,district,age,cgpa,lang){
    this.name=name;
    this.district=district;
    this.age=age;
    this.cgpa=cgpa;
    this.lang=lang;
    this.display=function(){
        console.log(this.name);
console.log(this.district);
console.log(this.age);
console.log(this.cgpa);
console.log(this.lang);
    }
}
    var student3=new student("riku","bogura",27,4.00,"Bangla,Somali,Hindi");
    var student4=new student("ritu","Rajshahi",25,4.00,"Bangla,English");
    student3.display();
    student4.display();
    student2.display();