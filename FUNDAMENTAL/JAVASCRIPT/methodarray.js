// METHOD ARRAY
//  1.join
//  join, MENGUBAH ARRAY MENJADI STRING DAN MENAMPILKANNYA SECARA DEFAULT
//  TANDA () DALAM METHOD JOIN MERUPAKAN SEPARATOR, BERGUNA UNTUK MEMILIH TANDA DALAM MEMISAHKAN NILAI ARRAY

// var arr = ['scorpio', 'leo', 'capricorn', 'aries', 'pisces']
// console.log(arr.join(' - '))

//  2.push & pop
//  push, MENAMBAHKAN ELEMEN PADA AKHIR ARRAY
//  pop, MENGHAPUS ELEMEN PADA AKHIR ARRAY

// arr.push('taurus')
// arr.push('taurus', 'libra')
// console.log(arr.join(' - '))

// arr.pop()
// arr.pop()
// console.log(arr.join(' - '))

// 3.unshift & shift
// unshift, MENAMBAHKAN ELEMEN PERTAMA PADA ARRAY
// shift, MENGHAPUS ELEMEN PERTAMA PADA ARRAY

// arr.unshift('taurus','libra')
// console.log(arr.join(' - '))

// arr.shift()
// console.log(arr.join(' - '))

// 4.length
// length, MENGHITUNG JUMLAH ELEMEN DALAM ARRAY

// console.log(arr.length)

// 5.splice
// splice, DIGUNAKAN UNTUK MEYISIPKAN ATAU MENGHAPUS ELEMEN DI DALAM ARRAY
// splice(indexAwal, jumlah elemen yang ingin dihapus(opsional), elemenBaru1, elemenbaru2, ....(opsional)

// arr.splice(1, 0, 'libra', 'gemini')
// console.log(arr.join(' - '))

// arr.splice(1, 2)
// console.log(arr.join(' - '))

// arr.splice(1, 2, 'libra', 'gemini')
// console.log(arr.join(' - '))

// 6.slice
// slice, DIGUNAKAN UNTUK MENGIRIS / MENGAMBIL BEBERAPA BAGIAN ARRAY UNTUK DIJADIKAN ARRAY YANG BARU
// slice(indexawal, indexbaru)
// INDEX AWAL AKAN TERBAWA KE ARRAY YANG BARU SEDANGKAN INDEX AKHIR TIDAK

// var arr = ['scorpio', 'leo', 'capricorn', 'aries', 'pisces', 'libra', 'gemini']
// var arr2 = arr.slice(2,5)
// console.log(arr.join(' - '))
// console.log(arr2.join(' - '))

// 7. forEach
// forEach, DIGUNAKAN UNTUK MELAKUKAN LOOPING UNTUK ARRAY
// forEach = UNTUK SETIAP ELEMEN DI DALAM ARRAY, LAKUKAN .....

var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var nama = ['noir', 'ken', 'rex', 'loyd', 'javier']

// for(var i = 0 ; i < angka.length ; i++){
//     console.log(angka[i])
// }

// JIKA DITULIS MENGGUNAKAN forEach akan menjadi

// angka.forEach(function(e){
//     console.log(e)
// })

nama.forEach(function(e, i){
    console.log('Mahasiswa ke-' + [i + 1] + ' yang bernama ' + e + ' merupakan pemenang')
})