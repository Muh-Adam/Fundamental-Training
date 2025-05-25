// SWITCH
// PENGGUNAANNYA MENGGUNAKAN SEBUAH CASE, APABILA NILAI YANG DIMASUKKAN SAMA DENGAN CASE, AKANMENIMBULKAN AKSI YANG SUDAH  DITENTUKAN
// DALAM PENGGUNAAN SWITCH KITA HARUS MEMPERHATIKAN TIPE DATA AGAR SESUAI DENGAN CASE


// var food = prompt('Masukkan makanan yang ada di menu \nNasi\nTelur\nDaging\nIkan\nHamburger\nPizza')

// switch(food){
//     case 'Nasi':
//         alert('Makanan Sehat')
//         break;
//     case 'Telur':
//         alert('Makanan Sehat')
//         break;
//     case 'Daging':
//         alert('Makanan Sehat')
//         break;
//     case 'Ikan':
//         alert('Makanan Sehat')
//         break;
//     case 'Hamburger':
//         alert('Makanan Tidak Sehat')
//         break;
//     case 'Pizza':
//         alert('Makanan Tidak Sehat')
//         break;
//     default:
//     alert('Anda tidak memasukkan makanan yang ada di menu!')
//     break;
// }

var food = prompt('Masukkan makanan yang ada di menu \nNasi\nTelur\nDaging\nIkan\nHamburger\nPizza')

// JIKA TIDAK ADA BREAK, MAKA ACTION AKAN DILANJUTKAN HINGGA MENEMUKAN BREAK
switch(food){
    case 'Nasi':
    case 'Telur':
    case 'Daging':
    case 'Ikan':
        alert('Makanan Sehat')
        break;
    case 'Hamburger':
    case 'Pizza':
        alert('Makanan Tidak Sehat')
        break;
    default:
    alert('Anda tidak memasukkan makanan yang ada di menu!')
    break;
}