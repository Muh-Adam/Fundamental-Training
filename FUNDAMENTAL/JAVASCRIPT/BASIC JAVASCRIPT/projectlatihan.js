
var penumpang = [];

var tambahPenumpang = function(namaPenumpang){
    // jika angkot kosong
    if(penumpang.length == 0){
        penumpang.push(namaPenumpang);
        // kembalikan isi array dan keluar dari function
        return penumpang;
    }else{
        // telusuri seluruh kursi dari awal
        for(var i = 0; i < penumpang.length; i++){
            // tambah penumpang di kursi tersebut
            if(penumpang[i] == undefined){
                // jika ada kursi kosong
                penumpang[i] = namaPenumpang;
                // kembalikan isi array & keluar dari function
                return penumpang;

                // jika sudah ada nama yang sama
            }else if(penumpang[i] == namaPenumpang){
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang + ' Sudah ada di dalam angkot');
                // kembalikan isi array dan keluar dari function
                return penumpang;

                // jika seluruh kursi terisi
            }else if(i == penumpang.length -1){
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
}



var hapusPenumpang = function(namaPenumpang){
    if(penumpang.length == 0){
        console.log('Angkot masih kosong');
        return penumpang;
    }else{
        for(var j = 0 ; j  < penumpang.length ; j++){
            if( penumpang[j] == namaPenumpang){
                penumpang[j] = undefined;
                return penumpang;
            }else if (j == penumpang.length - 1){
                console.log('Tidak ada penumpang bernama ' + namaPenumpang + ' di dalam angkot');
                return penumpang;
            }
        }
    }
}































//     if(penumpang.length == 0){
//         console.log('Angkot masih kosong');
//         return penumpang;
//     }
//     for(var j = penumpang.length; j >= 0 ; j--){
//     if(namaPenumpang == penumpang[j]){
//         penumpang[j] == undefined;
//         return penumpang;
//     }else if( namaPenumpang != penumpang[j]){
//         console.log(namaPenumpang + ' Tidak ada di angkot');
//         return penumpang;
//         }
//     }
// }