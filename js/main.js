'use strict'

const menuBtn = document.querySelector('#menu-btn')
const menu = document.querySelector('.links')

menuBtn.addEventListener("click",()=>{
    console.log('clicked')
    menu.classList.toggle('menu-active')
})
