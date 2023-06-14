let btn = document.querySelectorAll('.btn');
console.log(btn);
const colors = ['red', 'blue', 'orange', 'pink', 'purple', 'dark']

for (let i = 0; i < 8; i++) {
    btn[i].onclick = () => {
        btn[i].classList.toggle(colors[i]);
    }

}




