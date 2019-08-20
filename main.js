let fruta = "manzana"
console.log("soy" + fruta);

let user1 = "piedra"
let user2 = "papel"

if(user1 == user2) {
    console.log("empate");
} else {
    switch (user1) {
        case "piedra":
            if(user2 == "papel") {console.log("pierdes")} else {console.log("ganas")}
            break;
        case "papel":
            if(user2 == "tijera") {console.log("pierdes")} else {console.log("ganas")}
            break;
        case "tijera":
            if(user2 == "piedra") {console.log("pierdes")} else {console.log("ganas")}
            break;

          //  resultado = user2 == (if ternario)


    }
}


for (let index = 0; index <= 100; index++) {
    let resultado = index % 2
    if(resultado == 0) {console.log(index + " es par")} else {console.log(index + " es impar")}
    
}