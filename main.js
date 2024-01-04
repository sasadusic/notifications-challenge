const items = document.querySelectorAll('.item')
const num = document.querySelector('#num')
const mark = document.querySelector('#mark')

items.forEach(item => {
    item.onclick = () => {
        item.classList.toggle('completed')
        const number = document.querySelectorAll('.completed')
        console.log(number)
        num.innerHTML = number.length
    }
})

mark.onclick = () => {
    items.forEach(item => item.classList.remove('completed'))
    const number = document.querySelectorAll('.completed')
    console.log(number)
    num.innerHTML = number.length
}