export const myProfile=[
    "Muhamad Ikbal handini",
    "20 tahun",
    "13 September 2003",
    "Mahasiswa informatika"
]

for(const x of myProfile){
    console.log(x);
}


const Profile={
    name : "Muhamad Ikbal handini",
    age : "20 tahun",
    Birhtday : "13 September 2003",
    AS :"Mahasiswa informatika",
    Hello :(name)=>{
        this,name
        return console.log(name)
    } 
}


const fruit = new Map([
    ["Jeruk",50000],
    ["Kalapa",10000]
])

fruit.set("Hurra",40000)


console.log(fruit.values())
fruit.delete("Hurra")
console.log(fruit.get("Hurra"));



fruit.forEach((value,key) => {
    console.log(`${key} =  ${value}`);
});


for(const x of fruit.entries()){
    console.log(x)
}

try {
    console.log()
} catch (error) {
    console.log(error.message)
}



Profile.Hello("Ikbal")



export const helloWord=()=>{
    try {
        alert('Hello word')
    } catch (error) {
        return error.message
    }
}