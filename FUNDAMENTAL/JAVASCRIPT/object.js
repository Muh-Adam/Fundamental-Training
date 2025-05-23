// OBJECT
// OBJECT DALAM JS ADALAH KUMPULAN NILAI YANG MEMILIKI NAMA
// OBJEK DITANDAI DENGAN PENGGUNAAN {}

var Mahasiswa = {

    nama : 'Noir Astrael',
    umur : 18,
    ipsemester : [3.95, 3.98, 3.97, 4.0, 4.0],
    ipkumulatif : function(){
        var total = 0;
        var ips = this.ipsemester
        for(var i = 0 ; i < ips.length ; i++){
            total += ips[i]
        }
        return total/ips.length;
    }

}

console.log(ipkumulatif)

