const chars = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\'', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~']


const boxs = document.querySelectorAll('.box')
const form = document.querySelector('form')

form.addEventListener('submit', e => {
    e.preventDefault() 
    let num = 0

    const input = form.querySelector('input')

    if(input.value == '') {
        num = 16
        console.log('ok');
    } else if (input.value < 5 || input.value > 16) {
        return false
    } else {
        num = input.value
    }

    boxs.forEach(box => {
        generate(box, num)
    });
})

function generate(box, number) {
    box.textContent = ''
    for(let i = 0; i < number; i++) {
        const num = Math.floor(Math.random() * 94)
        const char = chars[num]
        box.textContent += char
    }
}



