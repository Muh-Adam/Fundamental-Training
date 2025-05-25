// VARIABEL SCOPE
// VARIABEL SCOPE YANG DIGUNAKAN PADA JS ADALAH FUNCTION SCOPE
// FUNCTION SCOPE MEMUNGKINKAN KITA MEMBUAT FARIABEL DALAM SUATU FUNCTION YANG HANYA BERFUNGSI DI DALAM FUNCTION TERSEBUT
// CONTOH
// VAIABEL YANG ADA DI LUAR FUNCTION DISEBUT VARIABEL GLOBAL
// VARIABEL YANG ADA DI DALAM FUNCTION DISEBUT VARIABEL LOKAL


// function scope(){
//     var a = 1
// }

// console.log(a) //console tidak akan bisa mendeteksi variabel a karena variabel a ada di dalam function

var a = 1

function scope(){
    console.log(a)          // variabel a yang ada didalam function ini dapat diambil dari variabel dari luar function
}

scope()