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
// button2.addEventListener('click', function(){
//     const random = Math.round(Math.random()*10+1)
//         if(random < 2){
//             body.style.backgroundColor='lightblue';
//         }else if(random < 4){
//             body.style.backgroundColor='grey';
//         }else if(random < 6){
//             body.style.backgroundColor='red';
//         }else if(random < 8){
//             body.style.backgroundColor='lightgreen';
//         }else{
//             body.style.backgroundColor='salmon';
//         } 
// })

// Cara yang lebih akurat
button2.addEventListener('click', function(){
    const r = Math.round(Math.random()*255 + 1);
    const g = Math.round(Math.random()*255 + 1);
    const b = Math.round(Math.random()*255 + 1);

    body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')'
})



// Color Range

const sMerah = document.querySelector('input[name = sMerah]');

sMerah.addEventListener('change', function(){
    const r = sMerah.value
    console.log(r)
})

