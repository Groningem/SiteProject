let menu = document.querySelector('.hamburger');
let overlay = document.querySelector('.overlay');
let nav = document.querySelector('.nav');
menu.addEventListener('click', function() {
    if(menu.classList.contains('pressed')) {
        menu.classList.remove('pressed');
        overlay.classList.remove('open');
        nav.classList.remove('open');
    } else {
        menu.classList.add('pressed');
        overlay.classList.add('open');
        nav.classList.add('open');
    }
})

overlay.addEventListener('click', function() {

})
