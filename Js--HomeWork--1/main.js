console.log(')))')
let name = 'Egor'
let btn = document.querySelector('.btn')
let inp1 = document.querySelector('.inp1')
let text = document.querySelector('.spn')
btn.onclick = () => {
    console.log('test');
    text.innerHTML = 'Здарова,' + inp1.value
}

console.log(')))')

let btn2 = document.querySelector('.btn2')
let inp2 = document.querySelector('.inp2')
let text2 = document.querySelector('.spn2')
btn2.onclick = () => {
    console.log('test2')
    text2.innerHTML = inp2.value - 2023 + 'Ваш теперіший вік'

}

let btn3 = document.querySelector('.btn3')
let inp3 = document.querySelector('.inp3')
let text3 = document.querySelector('.spn3')
btn3.onclick = () => {
    console.log('test3')
    text3.innerHTML = +inp3.value + +inp3.value + +inp3.value + +inp3.value + ' - Периметр Квадрату.'


}



















