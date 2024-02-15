const car={
    Name : " Toyota supra ",
    Speed :300,
    Collor : " black",
    addSpeed : AddSpeed=(value)=>{
        return car.Speed+value;
    } 
}


console.log(car.Name);
console.log(car.Speed);



console.log(car.addSpeed(1));