// Event untuk Menghapus elemen

const close = document.querySelectorAll('.close');

// close.forEach(function(el){
//     el.addEventListener('click',function(e){
//     e.target.parentElement.style.display = 'none';
//     });
// });



// Prevent Default
// Digunakan untuk menghapus event default pada suatu element. contohnya Menghapus event pada elemen <a></a> sehingga mencegah berpindah ke halaman yang dituju

// close.forEach(function(el){
//     el.addEventListener('click',function(e){
//     e.target.parentElement.style.display = 'none';
//     // contoh penggunaan Prevent Default
//     e.preventDefault();
//     // stopPropagation digunakan agar event tidak mencapai objek tertentu
//     e.stopPropagation()
//     });
// });


// Event Bubbling
// Digunakan untuk menghubungkan event pada child element dengan parent element

// const cards = document.querySelectorAll('.card');

// cards.forEach(function(card){
//     card.addEventListener('click', function(e){
//         alert('ok');
//     });
// })



// Cara yang lebih efektif yang memungkinkan kita menambahkan elemen secara real time
const container = document.querySelector('.container');

container.addEventListener('click', function(e){
    if(e.target.className == 'close'){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
})