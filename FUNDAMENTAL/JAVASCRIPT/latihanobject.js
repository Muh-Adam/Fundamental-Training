// membuat object Angkot

function objekAngkot(sopir, jalur, penumpang, kas){
    this.sopir = sopir;
    this.jalur = jalur;
    this.penumpang = penumpang;
    this.kas = kas;


    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar){
        if(this.penumpang.length === 0){
            console.log('Angkot masih kosong');
            return false;
        }
        for(var i = 0 ; i < this.penumpang.length ; i++){
            if(this.penumpang[i] == namaPenumpang){
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }





}


var angkot1 = new objekAngkot('lloyd', ['jakarta', 'bandung'], [], 0)

var angkot2 = new objekAngkot('kaor', ['bali', 'yogyakarta'], [], 0)