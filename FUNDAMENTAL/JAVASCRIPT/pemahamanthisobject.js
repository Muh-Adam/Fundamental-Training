// cara 1 function declaration
function Halo(){
    console.log(this)
    console.log('Halo')
}

Halo()
// DALAM FUNCTION DECLARATION, this MENGEMBALIKAN OBJECT GLOBAL



// cara 2 objek literal
var obj = {}
obj.halo = function(){
    console.log(this)
    console.log('halo')
}

obj.halo()
// DALAM OBJEK LITERAL, this MENGEMBALIKAN OBJEK YANG BERSANGKUTAN



// cara 3 constructor
function Hai(){
    console.log(this)
    console.log('halo')
}

new Hai()