// PARAMETER
// "PARAMETER ADALAH VARIABEL YANG DITULIS DALAM KURUNG PADA SAAT FUNCTION DIBUAT, DIGUNAKAN UNTUK MENAMPUNG NILAI YANG DIKIRIMKAN SAAT FUNCTION DIPANGGIL"

// ARGUMENT
// "NILAI YANG DIKIRIMKAN KE PARAMETER SAATT FUNGSI DIPANGGIL"

// function tambah (a, b){                     //a,b adalah parameter
//     return a + b;
// }

// function kali (a, b){
//     return a * b;
// }


// var penjumlahan = tambah(1,2)        //1,2 adalah argument
// console.log(penjumlahan)

// var hasil = kali(tambah(4,6), tambah(2, 3))    
// console.log(hasil)

// var ulang = true
// while(ulang){
//     var a = parseInt(prompt('Masukkan Angka Pertama'))
//     var b = parseInt(prompt('Masukkan Angka Kedua'))

//     var hasil = kali(tambah(a,b), tambah(a,b))
//     alert(hasil)
//     ulang = confirm('Ingin mencoba lagi?')
// }

// APABILA PARAMETER LEBIH SEDIKIT DARI ARGUMENT, MAKA ARGUMENT YANG KELEBIHAN AKAN DIABAIKAN
// function tambah (a, b){                     
//     return a + b;
// }


// var penjumlahan = tambah(1,2,3)        
// console.log(penjumlahan)

// APABILA PARAMETER LEBIH BANYAK DARI ARGUMENT, MAKA PARAMETER YANG KELEBIHAN AKAN DIISI DENGAN NILAI UNDEFINED
// function tambah (a, b, c){                     
//     return a + b + c;
// }


// var penjumlahan = tambah(1,2)        
// console.log(penjumlahan)


// VARIABEL ARGUMENTS
// ARRAY YANG BERISI NILAI YANG DIKIRIMKAN SAAT FUNGSI DIPANGGIL, BIASA DISEBUT PSEUDO VARIABEL
// function tambah(){
//     return arguments;
// }

// var coba = tambah (1, 4, 20, 'hi', true)
// console.log(coba)

// CONTOH LAIN DENGAN MENGGABUNGKAN LOOP DAN ARGUMENTS


function tambah(){
    var hasil = 0;
    for(var i = 0; i < arguments.length ; i++){
        hasil += arguments[i]
    }
    return hasil ;
}

var coba = tambah(1,2,3,4)
console.log(coba)
