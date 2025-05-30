// EVENTS
// "Event pada javascript merepresentasikan sebuah kejadian yang terjadi di dalam DOM. Kejadian tersebut bisa dilakukan oleh user(mouse event, keyboard event, dll), ataupun dilakukan secara otomatis oleh API(animasi selesai dijalankan, halaman selesai di load, dll)."



// Cara 'Mendengarkan' event
// - Event handler
//  ~ Inline HTML Attribute
//  ~ Element Method
// - addEventListener()

// Event Handler hanya bisa menjalankan satu event
// addEventListener bisa menjalankan banyak event

// Inline HTML Attribute
const p3 = document.querySelector('.p3');

function ubahWarnaP3(){
    p3.style.backgroundColor = 'lightblue';
}


// Element Method
const p2 = document.querySelector('.p2');

function ubahWarnaP2(){
    p2.style.backgroundColor = 'lightblue';
}

p2.onclick = ubahWarnaP2;


// addEventListener()
const p4 = document.querySelector('section#b p');
addEventListener('click', function(){
    p4.style.color = 'red';
});



// Menabahkan list item baru
addEventListener('click', function(){
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const Textli = document.createTextNode('List Item Baru');

    liBaru.appendChild(Textli);
    ul.appendChild(liBaru);
})




// addEventListener
const p1 = document.querySelector('.p1');

addEventListener('click', function(){
    p1.style.backgroundColor = 'blue';
})

addEventListener('click', function(){
    p1.style.color = 'red'
})