interface Player{
    volume: number,
    second: number,
    song: string,
    detail: Detail
};

interface Detail{
    author: string,
    year:number
};

const player:Player = {
    volume: 5,
    second: 0,
    song: "Player",
    detail: {
        author: "La Ganga Activa",
        year: 2018
    }
};

const{
    volume, second, song, detail:{author, year}
}  = player;

console.log(`The current volume is ${volume}`);
console.log(`The current second is ${second}`);
console.log(`The current song is ${song}`);
console.log(`The current author is ${author}`);
console.log(`The current year is ${year}`);


const numeros: number[] = [1,2,3,4,5,6,7,8,9]

const [elPrimero] = numeros;

interface Product{
    desc: string,
    price: number
};

const smartphone:Product = {
    desc: "Xiaomi POCO X3",
    price: 400
};

const computer:Product = {
    desc: "Laptop",
    price: 1000
};

const calcularIsv = (products:Product[]):number[] => {
    let total:number = 0;

    products.forEach(({price}, index) => {
        total += price;
    });

    return [total, total * 0.15];
}

const articles: Product[] = [smartphone, computer];

const [total, isv] = calcularIsv(articles);
console.log(`The total is ${total}`);
console.log(`The ISV is ${isv}`);




function makeShitter<T extends {new(...args:any[]):{}}>(constructor:T){
    return class extends constructor{
        takeAShit = () => {
            console.log('Shitting!');
        };

        shitterProve = "Notot";
    };
}

@makeShitter
class NoShitter{
    constructor(public name:string){

    }
}

let shitter = new NoShitter("I'm not a shitter");
console.log(shitter);