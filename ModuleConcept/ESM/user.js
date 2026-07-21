class userDetails{
    
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    display(){
        console.log(this.name, this.age);
    }

    
}
const student1 = new userDetails("rahul",20);
student1.display();
export{ userDetails };