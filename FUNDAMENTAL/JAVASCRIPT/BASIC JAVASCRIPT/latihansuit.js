

var tanya = true;
var comp = Math.random ();
var hasil = ''


while(tanya){
var player = prompt('Kamu memilih Apa? \ngunting\nbatu\nkertas');


    if(comp < 0.34){
        comp = 'gunting'
        }
    else if(comp >= 0.34 && comp <= 0.66){
        comp = 'batu'
        }
    else{
        comp = 'kertas'
    }
    console.log(comp)

    if( player == comp){
        hasil = 'SERI'
    }else if( player == 'batu'){
    //     if(comp == batu){
    //         hasil = 'KALAH'
    //     }else{
    //         hasil = 'MENANG'
    //    } 
    hasil = (comp == 'gunting') ? 'MENANG!' : 'KALAH!'
    }else if(player == 'gunting'){
        hasil = (comp == 'batu') ? 'KALAH!' : 'MENANG!'
    }else{
        hasil = 'KAMU MEMILIH PILIHAN YANG SALAH'
    }

    alert('Kamu memilih ' + player + ' dan komputer memilih ' + comp + '\n HASILNYA: ' + hasil)

    tanya = confirm('APAKAH KAMU INGIN MENCOBA LAGI?')
}

