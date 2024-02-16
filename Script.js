const car={
    Name : " Toyota supra ",
    Speed :300,
    Collor : " black",
    addSpeed : AddSpeed=(value)=>{
        return car.Speed+value;
    } 
}
const tryArray=[
    'Ikbal Handnini',
    'Mahasiswa',
    'Teknik Informatika'
]

let Mahasiswa2= new Array(
    "Ujang Mustopa",
    "34 Tahun",
    "TasikMalaya"
)


    for (let index = 0; index < tryArray.length; index++) {
        console.log(tryArray[index])
        console.log(Mahasiswa2[index])
        if(Mahasiswa2[2]){
            Mahasiswa2[2]="Garut"
        }
        console.log(tryArray.toString());
        console.log(Mahasiswa2.toString());
    
    }
    

    