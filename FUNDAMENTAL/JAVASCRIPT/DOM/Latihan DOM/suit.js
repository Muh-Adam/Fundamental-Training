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
    if(player == 'gunting')return (comp == 'batu')? 'Menang': 'Kalah';
    if(player == 'batu')return (comp == 'kertas')? 'Kalah': 'Menang';
}


// Menangkap elemen gunting, batu, kertas
const pGunting = document.querySelector('.gunting');
const pBatu = document.querySelector('.batu');
const pKertas = document.querySelector('.kertas');

// Membuat event
pGunting.addEventListener('click', function(){
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pGunting.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    const imgComputer = document.querySelector('.img-computer')
    imgComputer.setAttribute('src', 'img/' + pilihanComputer)
})