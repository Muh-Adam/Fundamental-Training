// VARIABEL SCOPE
// VARIABEL SCOPE YANG DIGUNAKAN PADA JS ADALAH FUNCTION SCOPE
// FUNCTION SCOPE MEMUNGKINKAN KITA MEMBUAT FARIABEL DALAM SUATU FUNCTION YANG HANYA BERFUNGSI DI DALAM FUNCTION TERSEBUT
// CONTOH

// function scope(){
//     var a = 1
// }

// console.log(a) //console tidak akan bisa mendeteksi variabel a karena variabel a ada di dalam function

var a = 1

function scope(){
    console.log(a)
}

scope()