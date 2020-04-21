const cars = [
    {
        model: 'MERCEDES BENZ ',
        year: 2019,
        owner: 0,
        service: 1,
    },
    {
        model: ' BMW',
        year: 2015,
        owner: 1,
        service: 1,
    },
    {
        model: '  AUDI',
        year: 2001,
        owner: 0,
        service: 0,
    },
    {
        model: ' LEXUS',
        year: 2000,
        owner: 2,
        service: 0,
    }
]
const owner = [
    {
        name: 'Armen',
        index: 0,
    },
    {
        name: 'Narek',
        index: 1,
    },
    {
        name: 'Hayk',
        index: 2,
    }
]
const service = [
    {
        serviceName: 'Mec Aniv',
        index: 0,
    },
    {
        serviceName: 'Poqr Aniv',
        index: 1,
    },
];
//task1
// const hamar0 = cars
//     .filter((item) => item.service === 0);
// console.log(hamar0);
// const hamar1 = cars
//     .filter(item=>item.service===0);
// console.log(hamar1)    

//task2
// const person=owner.find(item=> {
//     item.name==="Narek"
//     return item.index
// })
// const quantity=cars.filter(mitem=>{
//     return person.index==mitem.owner
// })
// console.log(quantity)

// //task3
// const calc = cars.filter(item =>item.year > 2010)
// console.log(calc)

//task4
function test() {
    const elem = document.getElementById("block-1");
    let link = document.createElement('p');

    const cel = cars.map(item => item.model);

    link.innerHTML = `${cel} `;

    elem.appendChild(link);
}

//task5
// const next = cars.map(item =>item.year+=1)
// console.log(next);

//task6
let info = document.querySelector("button");

info.onclick = function(){
    let inputIn = document.querySelector("name");
    const cars = cars.fill(inputIn);

}