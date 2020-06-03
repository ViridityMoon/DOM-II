// Mouse over for .text-content
const textMouseOver = document.querySelectorAll('.text-content');
textMouseOver[0].addEventListener('mouseover', function(event){
    event.target.style.color = 'red';
    setTimeout(function() {
        event.target.style.color = "black";
    }, 500)
})

//
textMouseOver[1].addEventListener('scroll', function(event) {
    event.target.style.color = 'red';
    setTimeout(function() {
        event.target.style.color = "black";
    }, 500)
})

// Double Click for Home nav link
document.querySelector('.nav-link').addEventListener('dblclick', function (event) {
    event.target.style['font-size'] = '7rem'
    setTimeout(function() {
        event.target.style['font-size'] = '1.8rem'
    }, 500)
})

// On Click for .content-pick
document.querySelector('.content-pick').addEventListener('click', function (event) {
    event.target.style['display'] = 'none'
})

// Mouse Enter for first .btn
document.querySelector('.btn').addEventListener('mouseenter', function (event) {
    event.target.style['background-color'] = 'red';
    setTimeout(function() {
        event.target.style['background-color'] = '#17A2B8'
    }, 1000)
})

// Scroll for .intro
document.querySelector('.intro').addEventListener('scroll', event =>{
    event.preventDefault();
    event.target.style.border = '1px solid black';
})