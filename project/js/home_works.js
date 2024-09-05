
// дз часть 1
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^\w{5,30}@gmail.com$/g
gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'NOT'
        gmailResult.style.color = 'red'
    }
}


// дз часть 2

const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const moveBlock = () => {
    if (positionX < 449) {
        positionX++
        childBlock.style.left = `${positionX}px`
       requestAnimationFrame(moveBlock)
    }
}
moveBlock()


