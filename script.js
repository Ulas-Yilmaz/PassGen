let kucukHarf = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let buyukHarf = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let rakam = ["0","1","2","3","4","5","6","7","9"];
let ozelKarakter = ["-","_","!","?","@","(",")","[","]",".","*","/","#","$","%","&","<",">","+"];

function sifreOlustur() {
    let uzunluk = Number(document.getElementById("uzunlukDeger").textContent);
    let sifre = "";

    if(!document.getElementById("kucukHarf").checked && !document.getElementById("buyukHarf").checked && !document.getElementById("rakam").checked && !document.getElementById("ozelKarakter").checked){
        return;
    }

    for(let i = 0; i < uzunluk; ) {
        let siralama = Math.floor(Math.random() * 4);

        if(siralama == 0 && document.getElementById("kucukHarf").checked){
            let kucukHarfSayi = Math.floor(Math.random() * 26);
            sifre += kucukHarf[kucukHarfSayi];
            i++;
        }else if(siralama == 1 && document.getElementById("buyukHarf").checked){
            let buyukHarfSayi = Math.floor(Math.random() * 26);
            sifre += buyukHarf[buyukHarfSayi];
            i++;
        }else if(siralama == 2 && document.getElementById("rakam").checked){
            let rakamSayi = Math.floor(Math.random() * 9);
            sifre += rakam[rakamSayi];
            i++;
        }else if(siralama == 3 && document.getElementById("ozelKarakter").checked){
            let karkaterSayi = Math.floor(Math.random() * 19);
            sifre += ozelKarakter[karkaterSayi];
            i++;
        }
    }

    document.getElementById("password").value = sifre;
}

function kopyala() {
    if(document.getElementById("password").value == ""){
        return;
    }else {
        navigator.clipboard.writeText(document.getElementById("password").value);
    }
}