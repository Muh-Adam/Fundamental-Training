// DOM MANIPULATION

// DOM MANIPULATION METHOD
// - MANIPULASI ELEMEN
// - MANIPULASI NODE


// MANIPULASI ELEMEN
// element.innerHTML()
// element.style.<property>
// element.setAttribute()
// element.classList()
// Dan sebagainya


// element.innerHTML()          ===> Mengubah elemen HTMLdari elemen yang dipilih

// const judul = document.querySelector('#judul');
// judul.innerHTML = '<em>Muhammad Adam</em>';


// elemen.style()           ===> Mengubah properti CSS dari elemen yang dipilih

// judul.style.color = 'lightgrey'
// judul.style.backgroundColor = 'brown'


// element.setAttribute()           ===> Menambahkan attribut dari elemen yang dipilih
// Untuk pengelolaan attribut, kuta bisa menggunakan beberapa metode
// element.getAttribute()
// element.setAttribute() 
// element.removeAttribute()

const h1 = document.getElementsByTagName('h1')[0];
h1.setAttribute('name', 'Muhammad Adam');

const sectionA = document.querySelector('section#a');
sectionA.removeAttribute('href')