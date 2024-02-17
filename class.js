class Mahasiswa{
    constructor(Nama,Nim,Alamat){
        this.Nama = Nama;
        this.Nim = Nim;
        this.Alamat = Alamat;
    }
    greeting(){
        return `Hello ${this.Nama}`
    }
}


class Determinant{
    constructor(x1,x2,x3,x4){
        //[X1   x2]
        //[x3   x4]
        this.x1 = x1
        this.x2 = x2
        this.x3 = x3
        this.x4 = x4
    }
    rumus(){
        return `${(this.x1*this.x4)-(this.x2*this.x3)}`
    }
}

class newMahasiswa extends Mahasiswa {
    constructor(Nama,Nim,Alamat,ttl){
        super(Nama,Nim,Alamat);
        this.ttl= ttl
    }
}

maba = new newMahasiswa(
    "Ujang sopian",
    10222191,
    "Padakembang",
    Date()
)



console.log(maba);

Mahasiswa2 = new Mahasiswa("Ikbal Handini",130903,"Tasikmalaya")
console.log(Mahasiswa2);
determinantTest= new Determinant(1,1,1,1)

console.log(`Hasil Perhitungan Determinan adalah = ${determinantTest.rumus()}`);
