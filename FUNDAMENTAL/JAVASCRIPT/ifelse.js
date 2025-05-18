// IF ELSE

var ulang = true

while(ulang){

    var number = prompt('Berapa Umur Kamu?')
    if(number <= 18){
        alert('Kamu masih kecil')
    }else{
        alert('Kamu sudah besar')
    }
    var ulang = confirm('Mau coba lagi?');
  
}
