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
// setAttribute('attribute', 'value');

const h1 = document.getElementsByTagName('h1')[0];
h1.setAttribute('name', 'Muhammad Adam');

const sectionA = document.querySelector('section#a a');
sectionA.removeAttribute('href');



// element.classList.add()              ===> Menambahkan class
// element.classList.remove()           ===> Menghapus class
// element.classList.toggle()           ===> Menambahkan / Menghapus class pada suatu elemen, tergantung apakah pada elemen tersebut sudah ada class tersebut atau belum
// element.classList.item()             ===> Mencari class yang ada dalam elemen berdasarkan index
// element.classList.contains()         ===> Mencari class yang ada pada suatu elemen berdasarkan value / nama class
// element.classList.replace()          ===> Mengganti class yang ada dalam suatu elemen menggunakan class baru


const body = document.body;
body.classList.toggle('biru-muda');
body.classList.toggle('biru-muda');










// Manipulasi Node

// Method
// document.createElement()
// document.createTextNode()
// node.appendChild()
// node.insertBefore()
// parentNode.removeChild()
// parentNode.replaceChild()
// ......


// Buat Element Baru
const pBaru = document.createElement('p');
const textpBaru = document.createTextNode('Paragraph Baru');

// Menyimpan text kedalam Element
pBaru.appendChild(textpBaru);

// Simpan pBaru diakhir section A
const sectA = document.getElementById('a');

sectA.appendChild(pBaru);