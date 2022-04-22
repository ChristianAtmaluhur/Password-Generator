const chars = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\'', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~']

const generateBtn = document.querySelector('.generate-btn');
const boxs = document.querySelectorAll('.box')

generateBtn.addEventListener('click', () => {
    boxs.forEach(box => {
        generate(box)
        if(box.textContent.length > 17) {
            box.textContent = ''
            generate(box)
        }
    });
});

function generate(box) {
    for(let i = 0; i < 16; i++) {
        const num = Math.floor(Math.random() * 94)
        const char = chars[num]
        box.textContent += char
    }
}



