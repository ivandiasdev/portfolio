function abrirMenu(){
    let menuMobile = document.querySelector('.header-mobile')
        if(menuMobile.classList.contains('abrir')) {
            menuMobile.classList.remove('abrir');
        } else {
            menuMobile.classList.add('abrir');
        }
    }
const btn = document.getElementById('btnTop')

btn.addEventListener('click', function(){
    window.scrollTo(0,0)
})
document.addEventListener('scroll',ocultar)

function ocultar(){
    if(window.scrollY >10){
        btn.style.display = 'flex'
    } else{
        btn.style.display = 'none'
    }
}
ocultar()
