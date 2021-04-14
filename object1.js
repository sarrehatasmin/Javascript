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
