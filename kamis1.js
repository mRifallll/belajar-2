// 1. menampilkan nama dengan function
function shoutOut(){
    return "Halo Function!";
} console.log(shoutOut())
  
// 2. membuat perkalian dengan function 
function calculateMultiply(){
    return num1*num2
}
    var num1 = 5;
    var num2 = 6;
    var hasil = calculateMultiply(num1,num2);

    console.log(hasil);

// 3. menyatukan kata dengan function 
function processSentence(){
     return "Nama saya"+' '+this.nama +' '+"umur saya"+' '+ this.age+' '+ "tahun, alamat saya di"+' '+this.address+' ' + "dan saya punya hobby yaitu"+ ' '+ this.hobby
     }        
 nama = 'Agus,';
 age = '30';
 address = "Jln. Malioboro, Yogjakarta";
 hobby = "gaming";
     
var fullSentence = processSentence(nama,age,address,hobby);
console.log(fullSentence);
