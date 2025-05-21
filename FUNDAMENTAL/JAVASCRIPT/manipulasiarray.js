// MANIPULASI ARRAY

// 1.MENAMBAHKAN ARRAY
// APABILA MELEWATKAN SATU KEY, MAKA NILAI DARI KEY YANG DILEWATKAN AKAN TETAP TERHITUNG DAN NILAINYA MENJADI UNDEFINED
// var arr = []
// arr [0] = 'scorpio'
// arr [1] = 'leo'
// arr [2] = 'aries'
// arr [3] = 'pisces'
// arr [4] = 'sagitarius'

// console.log(arr[4])

// 2. MENGHAPUS ARRAY
// var arr1 = ['scorpio', 'leo', 'capricorn', 'aries', 'pisces']
// arr1 [1] = undefined

// console.log(arr1)

// 3. MENAMPILKAN ISI ARRAY
// var arr2 = ['scorpio', 'leo', 'capricorn', 'aries', 'pisces']
// console.log(arr2)

// ATAU

// for(var i = 0 ; i < arr2.length ; i++){
//     console.log(arr[i])
// }

// for(var i = 0 ; i < arr2.length ; i++){
//     console.log('Zodiak kamu adalah No.' + [i+1] + ' yaitu ' + arr2[i])
// }

// METHOD ARRAY
//  1.join
//  join, MENGUBAH ARRAY MENJADI STRING DAN MENAMPILKANNYA SECARA DEFAULT
//  TANDA () DALAM METHOD JOIN MERUPAKAN SEPARATOR, BERGUNA UNTUK MEMILIH TANDA DALAM MEMISAHKAN NILAI ARRAY

var arr = ['scorpio', 'leo', 'capricorn', 'aries', 'pisces']
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

arr.shift()
console.log(arr.join(' - '))

// 4.length
// length, MENGHITUNG JUMLAH ELEMEN DALAM ARRAY

console.log(arr.length)