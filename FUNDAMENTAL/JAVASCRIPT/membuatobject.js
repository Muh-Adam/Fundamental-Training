// MEMBUAT OBJECT

// LITERAL OBJECT / OBJEK LITERAL

var mahasiswa1 = {
    nama : 'Noir Astrael',
    universitas : 'Harvard university',
    jurusan : 'Teknik informatika',
    Nim : 90407050,
}

var mahasiswa2 = {
    nama : 'Alex',
    universitas : 'oxford university',
    jurusan : 'Teknik sipil',
    Nim : 93802830,
}



// FUNCTION DECLARATION

var buatObjekMahasiswa = function(nama, universitas, jurusan, Nim){
    var mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.universitas = universitas;
    mahasiswa.jurusan = jurusan;
    mahasiswa.Nim = Nim;
    return mahasiswa;
}

// var mahasiswa3 = buatObjekMahasiswa('javier', 'Stanford university', 'Teknik militer', '023098402')
// console.log(mahasiswa3)



// CONSTRUCTION
// PEMBUATAN OBJEK MENGGUNAKAN CONSTRUCTION HARUS MENGGUNAKAN METHOD this. AGAR OBJEK DAPAT TERDAFTAR PADA SUATU VARIABEL

var mahasiswa = function(nama, universitas, jurusan, Nim){
    this.nama = nama;
    this.universitas =universitas;
    this.jurusan = jurusan;
    this.Nim = Nim;
}

// DALAM PEMANGGILAN FUNCTION DALAM METODE INI, HARUS MENGGUNAKAN KEYWORD 'new' AGAR FUNCTION DAPAT DIPANGGIL
var mahasiswa3 = new mahasiswa('javier', 'Stanford university', 'Teknik militer', '023098402')
console.log(mahasiswa3)