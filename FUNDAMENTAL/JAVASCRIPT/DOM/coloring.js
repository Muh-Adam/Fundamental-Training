// Membuat variabel button
const button = document.querySelector('.button');
const body = document.body;


// Membuat event pada button
// button.addEventListener('click', function(){
//     body.style.backgroundColor='lightblue';
// })


button.addEventListener('click', function(){
    body.classList.toggle('biru-muda');
})



// Membuat Variabel button kedua
const button2 = document.createElement('button');
const textButton2 = document.createTextNode('Warna Random');

// Menghubungkan text dengan variabel button
button2.appendChild(textButton2);

// Memberikan attribute pada button
button2.setAttribute('type', 'button')

// Memasukkan Button Kedalam document
button.after(button2)



// Memberikan event pada button kedua
button2.addEventListener('click', function(){
    let random = Math.random()*10
    console.log(random)
})


