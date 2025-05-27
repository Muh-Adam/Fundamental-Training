// DOM Selection Method     &       Mengubah node root                            ===> Hasil
// getElementById()                                     ===> Element
// getElemenetsByTagName()                              ===> HTMLCollection
// getElementsByClassName()                             ===> HTMLCollection
// querrySelector()                                     ===> Element
// querrySelectorAll()                                  ===> NodeList


// getElementById()         ===> Element
// const judul = document.getElementById ('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = '#ccc';
// judul.innerHTML = 'Noir Astrael';


// getElementsByTagName()         ===> HTMLCollection
// const paragraf = document.getElementsByTagName('p');


// for(var i = 0 ; i < paragraf.length ; i++){
//     paragraf[i].style.backgroundColor = '#accffd';
// }

// paragraf[0].style.backgroundColor = '#eecbba';



// getElementByClassName()          ===> HTMLCollection
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'Ini diubah dari Javascript'




// querrySelector()         ===> Element
// querrySelector hanya dapat memilih satu elemen. Jika terdapat lebih dari satu elemen, querrySelector akan memilih elemen pertama

// const p4 = document.querySelector('#b p');
// p4.style.backgroundColor = 'aqua';


// const item2 = document.querySelector('section#b ul li:nth-child(2)');
// item2.style.backgroundColor = 'brown';


// // querrySelectorAll()          ===> NodeList
// const p = document.querySelectorAll('p');

// for(var i = 0 ; i < p.length ; i++){
//     p[i].style.backgroundColor = 'orange';
//     p[i].style.fontStyle = 'italic';
// }




// Mengubah Node Root
// Untuk mempersempit selection
const sectionB = document.getElementById('b');
const p = sectionB.querySelector('p')
p.style.backgroundColor = 'orange'