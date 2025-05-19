// IF ELSE

// var angkot = 1

// for(angkot ; angkot<=10 ; angkot++){
//     if(angkot <= 6){
//         console.log('Angkot No.' + angkot + ' Beroperasi dengan baik.');
//         }else{
//             console.log('Angkot No.' + angkot + ' Tidak beroperasi dengan baik.')
//         }
// }


// var jmlAngkot = 10
// var angkotBeroperasi = 6
// var noAngkotLembur = 8

// for(var angkot = 1 ; angkot <= jmlAngkot ; angkot++){

//     if(angkot <= angkotBeroperasi){
//         console.log('Angkot No.' + angkot + ' Beroperasi dengan baik')
//     }else if(angkot == noAngkotLembur ){
//         console.log('Angkot No.' + angkot + ' Sedang lembur')
//     }else{
//         console.log('Angkot No.' + angkot + ' Tidak beroperasi')
//     }
// }


// var jmlAngkot = 10
// var angkotBeroperasi = 6
// var noAngkotLembur = 8

// for(var angkot = 1 ; angkot <= jmlAngkot ; angkot++){

//     if(angkot <= angkotBeroperasi){
//         console.log('Angkot No.' + angkot + ' Beroperasi dengan baik')
//     }else if(angkot === 8 || angkot ===10 ){                                    //MENGGUNAKAN OPERATOR LOGIKA YAITU || / ATAU
//         console.log('Angkot No.' + angkot + ' Sedang lembur')
//     }else{
//         console.log('Angkot No.' + angkot + ' Tidak beroperasi')
//     }
// }


var jmlAngkot = 10
var angkotBeroperasi = 6
var noAngkotLembur = 8

for(var angkot = 1 ; angkot <= jmlAngkot ; angkot++){

    if(angkot <= angkotBeroperasi && angkot !== 5){
        console.log('Angkot No.' + angkot + ' Beroperasi dengan baik')
    }else if(angkot === 8 || angkot ===10 || angkot === 5){                                    //MENGGUNAKAN OPERATOR LOGIKA YAITU || / ATAU
        console.log('Angkot No.' + angkot + ' Sedang lembur')
    }else{
        console.log('Angkot No.' + angkot + ' Tidak beroperasi')
    }
}