// Membuat function untuk pilihan computer

function getPilihanComputer(){
    const comp = Math.round(Math.random()*9);

    if(comp <= 3)return 'gunting'
    if(comp <= 6)return 'batu'
    return 'kertas'
}

// Menentukan hasil

function getHasil(comp, player){
    if(comp == player)return 'Seri!'
    if(player == 'gunting')return (comp == 'kertas')? 'Menang!': 'Kalah!';
    if(player == 'batu')return (comp == 'gunting')? 'Menang!' :'Kalah!';
    if(player == 'kertas')return (comp == 'batu')? 'Menang!' :'Kalah!';
}


// Menangkap elemen gunting, batu, kertas
const pGunting = document.querySelector('.gunting');
const pBatu = document.querySelector('.batu');
const pKertas = document.querySelector('.kertas');

// // Membuat event
// pGunting.addEventListener('click', function(){
//     // Menentukan pilihan computer dan player serta hasil
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGunting.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     // Mengubah gambar computer
//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.jpg');

//     // Menuliskan Hasil
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil
// });

// pBatu.addEventListener('click', function(){
//     // Menentukan pilihan computer dan player serta hasil
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pBatu.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     // Mengubah gambar computer
//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.jpg');

//     // Menuliskan Hasil
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil
// });

// pKertas.addEventListener('click', function(){
//     // Menentukan pilihan computer dan player serta hasil
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pKertas.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     // Mengubah gambar computer
//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.jpg');

//     // Menuliskan Hasil
//     const info = document.querySelector('.info');
//     info.innerHTML = hasil
// })



// Mengganti gambar yang ada pada computer
function putar(){
    const imgComputer = document.querySelector('.img-computer');
    const gambar = ['gunting', 'batu', 'kertas'];
    let i = 0
    const waktuMulai = new Date().getTime()

    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.jpg');
        if(i == gambar.length) i = 0;
    }, 100)
}



// Menentukan cara yang lebih efektif
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
    // Menentukan pilihan computer dan player serta hasil
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    // Mengacak gambar computer
    putar()

    setTimeout(function(){
        // Mengubah gambar computer
    const imgComputer = document.querySelector('.img-computer');
    imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.jpg');

    // Menuliskan Hasil
    const info = document.querySelector('.info');
    info.innerHTML = hasil
    }, 1000);
    });
    
});