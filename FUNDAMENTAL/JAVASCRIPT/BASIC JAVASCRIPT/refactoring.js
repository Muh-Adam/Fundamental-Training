// REFACTORING
// SEBUAH PROSES MENGUBAH KODE AGAR MENJADI LEBIH BAIK TANPA MENGUBAH FUNGSIONALITASNYA

// CONTOH
// KODE AWAL
// function volume (a,b){

//         var total ;
//         var volumeA ;
//         var volumeB ;

//         volumeA = a*a*a

//         volumeB = b*b*b

//         total = volumeA + volumeB

//         return total;
// }

// // REFACRORING
// function volume (a,b){

//         var total ;
//         var volumeB ;

//         volumeB = b*b*b

//         total = a*a*a + volumeB

//         return total;
// }

// // REFACTORING
// function volume (a,b){

//         var total ; 

//         total = a*a*a + b*b*b

//         return total;
// }



// KODE AKHIR
function volume (a,b){
    return a * a * a + b * b * b
}


var coba = volume(3,3)
console.log(coba)