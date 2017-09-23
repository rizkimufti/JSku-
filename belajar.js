// document.write("hello Hai")

// // int angka = 0;
// var angka = 69 // type data integer
// var text = 'anu' // type data string
// var bool = true // or false -> boolean

// angka = angka+'1'; // karena ditambah string siAngka = string
// angka += angka;

// document.write('<br>angka : '+angka) 
// document.write('<br>text : '+text)
// document.write('<br>boolean : '+bool)

// // <br> -> front-end
// // '\n' -> console


// // console
// console.log("hello Log")
// document.getElementById('tes').innerHTML = "aku paragraf"

// konkat text1 & text2 ke idgabung ?

// var text1 = document.getElementById('text1').innerText
// var text2 = document.getElementById('text2').innerText

// gabung ke satu variable
// var total = parseInt(text1)+parseInt(text2) 
// parseInt(parameter) -> membuat string menjadi integer

// document.getElementById('gabung').innerHTML = total

// ================
// kondisi

// IKI BAHASA C
//int a = 1,b = 2;
// if(a>b){
//     // statment
// }

// // conditional statment
// var angka1 = 69
// var angka2 = 96
// // JS lang
// console.log('apakah '+angka1+' = '+angka2+' :\n')
// if(angka1 == angka2){
//     if(angka1==69){
//         console.log('bazeng!')
//     }
//     console.log('benar')
// }else{
//     if(angka2==69){
//         console.log('hmm')
//     }else{
//         console.log('jangkrik')
//     }
//     console.log('salah')
// }

// loop-ing
// C
// int i;
// for(i=0;i<5;i++){
//     printf('%d',i);
// }

// JS

// var i = 0
// for(i;i<5;i++){
//     console.log(i)
// }

// var i = 0
// while(i<5){
//     console.log(i)
//     i++
// }

// kondisi dalam perulangan
// var i = 1
// for(i ; ; i++){
//     if(i==4)
//         continue
//     else
//         console.log(i)

//     if(i==5) break

// // sama aja yang di atas
//     // if(i==4){
//     //     // break
//     //     continue // 
//     // }else{
//     //     console.log(i)
//     // }
//     // if(i==5) break
// }

// array C
// int angka[] = {1,2,3,4,5};
// for(int i=0;i<angka.length;i++){
//     printf("angka ke-%d",angka[i]);
// }


// array JS
// var arr = [1,2,3,4,5]
// var arrX = ['Abas',17,'Demak','Udinus']

// // console.log('Angka : '+arr+'\n')
// // console.log('Id : '+arrX+'\n')

// // for(i=0;i<arrX.length;i++){ // length -> untuk mencari panjang dari sebuah array
// //     console.log(arrX[i])
// // }

// var idx = 0;while(idx<arrX.length){
//     if(idx==0){
//         console.log('nama : '+arrX[idx])
//     }else if(idx==1){
//         console.log('umur : '+arrX[idx])
//     }else if(idx==2){
//         console.log('alamat : '+arrX[idx])
//     }else{
//         console.log('univ : '+arrX[idx])
//     }
//     // console.log(arrX[idx])
//     idx++
// }

// var nama = 'Abas'
// console.log('panjang (Abas) : '+nama.length+' karakter')


// FUNCTION / fungsi

// C -> fungsi / prosedure
// header.h
// int tambah(int a, int b); // mengenbalikan nilai berupa (int)
// void cetakAku();

// // fungsi.c
// int tambah(int a, int b){
//     return a+b;
// }
// void cetakAku(){
//     printf("Aku");
// }

// JS
// fungsi
// function tambah(a,b){
//     return a+b
// }
// // prosedur
// function cetakAku(){
//     // console.log('Aku')
//     return 'aku'
// }

// // cetakAku()
// // console.log(tambah(10,20)) // output : 30

// // if(tambah(1,1)==2){
// //     cetakAku()
// // }else{
// //     console.log('salah')
// // }


// // tambahan
// var x = 1
// var y = 1

// // membuat fungsi dengan deklarasi
// var isAku = function(){
//     if(cetakAku()=='oraAku'){
//         // mengembalikan value boolean
//         return true; 
//     }else{
//         return false;
//     }
// }

// console.log(isAku()?'aku benar':'aku salah')
// tanda (?) menanyakan sebuah fungsi boolean

// input 
// var input = prompt() 
// var input2 = prompt()

// console.log(input+input2)
