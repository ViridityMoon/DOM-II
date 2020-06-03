// 1: Mouse over for "Let's Go!" content
const textMouseOver = document.querySelectorAll('.text-content');
textMouseOver[0].addEventListener('mouseover', function(event){
    event.target.style.color = 'red';
    setTimeout(function() {
        event.target.style.color = "black";
    }, 500)
})

// 2: Scroll listener adds red border around "Adventure Awaits" content
window.addEventListener('scroll', function() {
    textMouseOver[1].style.border = '1px solid red';
})

// 3: Double Click for Home nav link
document.querySelector('.nav-container').addEventListener('dblclick', function (event) {
    event.target.style['font-size'] = '5rem'
    setTimeout(function() {
        event.target.style['font-size'] = '1.8rem'
    }, 500)
})

// 4: On Click for .content-pick removes piece by piece  
document.querySelector('.content-pick').addEventListener('click', function (event) {
    event.target.style['display'] = 'none'
})
const buttons = document.getElementsByClassName('btn');
// 5: Mouse Enter for first .btn changes to red
buttons[0].addEventListener('mouseenter', function (event) {
    event.target.style['background-color'] = 'red';
    setTimeout(function() {
        event.target.style['background-color'] = '#17A2B8'
    }, 1000)
})

// 6: Resizing affects the footer

window.addEventListener('resize', function(){
    document.querySelector('footer').style['background-color'] = 'black';
})

// 7: Copying second button makes it black

buttons[1].addEventListener('copy', function (event) {
    event.target.style['background-color'] = 'black'
})

// 8: Right clicking 3rd button makes it green

buttons[2].addEventListener('contextmenu', function(event) {
    event.target.style['background-color'] = 'green'
    setTimeout(function() {
        event.target.style['background-color'] = '#17A2B8'
    }, 500)
})

// 9: Moving mouse on the destination area makes the background blue

document.querySelector('.content-destination',).addEventListener('mousemove', function(event) {
    event.target.style['background-color'] = 'blue'
    setTimeout(function() {
        event.target.style['background-color'] = 'white'
    }, 500)
})

// 10: Mouse out

document.getElementById('image').addEventListener('mouseout', function(event) {
    event.target.style['display'] = 'none'
})