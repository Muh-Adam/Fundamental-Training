// REKURSIF / RECURSIOR
// REKURSIF ADALAH FUNGSI YANG MEMANGGIL DIRINYA SENDIRI
// REKURSIF HARUS BERHENTI DAN MEMILIKI NILAI
// CONTOH
// BASE CASE ADALAH KONDISI AKHIR DARI SEBUAH REKURSIF YANG MENGHASILKAN NILAI

// function ulang(n){
//     if(n === 0)         //BASE CODE
//         return;         //BASE CODE

//     console.log(n)
//      ulang(n-1)
// }

// ulang(10)


function faktorial(n){
    if(n === 0)
        return 1;

    return n * faktorial(n-1)  
}


var nilai = faktorial(5)
console.log(nilai)