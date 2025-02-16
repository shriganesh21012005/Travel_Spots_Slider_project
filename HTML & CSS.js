let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

document.addEventListener('keydown', function (event) {
    if (event.keyCode === 39) { // Check if right arrow key is pressed  
        let items = document.querySelectorAll('.item')
        document.querySelector('.slide').appendChild(items[0])
    }
});


prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

document.addEventListener('keydown', function (event) {
    if (event.keyCode === 37) { // 37 is the key code for the left arrow key  
        let items = document.querySelectorAll('.item')
        document.querySelector('.slide').prepend(items[items.length - 1])
    }
});