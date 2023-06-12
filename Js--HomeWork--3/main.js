let select = document.querySelector('.select')
let btn = document.querySelector('.btn')
let out = document.querySelector(".out")
let compChoice = Math.round(getRandomArbitrary(1, 4));
let out2 = document.querySelector('.out2')
let a = 1
let b = 2
let c = 3
let d = 4











btn.onclick = () => {
    console.log(Math.round(getRandomArbitrary(1, 4)));
    if (a = select.value) {
        out.innerHTML = 'vs ' + select.value



    }
    if (compChoice = a) {
        out2.innerHTML = 'Ножиці'

    }















}








function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(getRandomArbitrary(1, 4));