const studenti = [
    { ime: 'Pero', prosek: 7.1, grad: 'Berovo' },
    { ime: 'Stojko', prosek: 6, grad: 'Kavadarci' },
    { ime: 'Stojna', prosek: 10, grad: 'Veles' },
    { ime: 'Mara', prosek: 5, grad: 'Kichevo' },
    { ime: 'Petka', prosek: 8.3, grad: 'Skopje' },
    { ime: 'Mitre', prosek: 7.5, grad: 'Ohrid' },
    { ime: 'Risto', prosek: 9, grad: 'Strumica' },
    { ime: 'Tosho', prosek: 8.3, grad: 'Gevgelija' },
  ];

//   Da se presmeta vkupniot prosek na site studenti

let avg = 0;
studenti.forEach((student) =>  avg += student.prosek);
console.log(avg / studenti.length);
console.log("--------");

// da se isfiltriraat site studenti sto imaat pomalku od 4 ednakvo so 4 karakteri

const imeLength = studenti.filter((student) => student.ime.length <= 4);
console.log(imeLength);
console.log("--------");

// Da se pronajde studentot od Strumica

const studentStrumica = studenti.find ((student) => student.grad === "Strumica");
console.log(studentStrumica);
console.log("--------");

// da kreirate horoskop funkcija - parametar mesec(bonus i denovi)




function getHoroscope( den , mesec) {
    let Sign;

    switch (mesec) {
        case 1:
            Sign = (den <= 19)? "Jarec": "Vodolija";
            break;
        case 2:
            Sign = (den <= 18)? "Vodolija": "Ribi";
            break;
        case 3:
            Sign = (den <= 20)? "Ribi": "Oven"; 
            break;
        case 4:
            Sign = (den <= 19)? "Oven": "Bik";
            break;
        case 5:
            Sign = (den <= 20)? "Bik": "Bliznak";
            break;
        case 6:
            Sign = (den <= 20)? "Bliznak": "Rak";
            break;
        case 7:
            Sign = (den <= 22)? "Rak": "Lav";
            break;
        case 8:
            Sign = (den <= 22)? "Lav": "Devica";
            break;  
        case 9:
            Sign = (den <= 22)? "Devica": "Vaga";
            break; 
        case 10:
            Sign = (den <= 22)? "Vaga": "Skorpija";
            break; 
        case 11:
            Sign = (den <= 21)? "Skorpija": "Strelec";
            break; 
        case 12:
            Sign = (den <= 21)? "Strelec": "Jarec";
            break;
    }

    return Sign;
          
    };

    function horoskopskiZnak (den , mesec) {
        const horoskop1 = getHoroscope(den , mesec);
        return horoskop1;
    }
 
    const den = new Date().getDate();
    const mesec = new Date().getMonth() +1;

    const znak = horoskopskiZnak(den, mesec);

    console.log(`Tvojot horoskopski znak e ${znak}.`);

    console.log("--------");

    // da kreirame funkcija sto presmetuva plostina na pravoaglonik

    const Plostina = function getPlostina(a ,b) {
        return a * b;
    }
   let a = 5;
   let b = 5;
   console.log(Plostina(a , b));

//    da kreirame funkcija sto presmetuva perimetar na pravoagolnik

const Perimetar = function getPerimetar(a,b) {
    return 2 * (a + b);
}
let c = 6;
let d = 8;
console.log(Perimetar (c,d));

