
let btnMenuMob = document.querySelector('#btn-menu-mob')
let line1 = document.querySelector('.line-menumob-1')
let line2 = document.querySelector('.line-menumob-2')

btnMenuMob.addEventListener("click", () => {
    line1.classList.toggle('ativo1')
    line2.classList.toggle('ativo2')
})