/* ------------------------- */
/* ----- SCROLL LENTO ----- */
/* ----------------------- */

const back = document.querySelector('.back');

back.addEventListener('click', (e) => {
    e.preventDefault(); // Previne o comportamento padrão do link

    // Seleciona o elemento de destino (o topo da página)
    document.querySelector('#inicio').scrollIntoView({
        behavior: 'smooth' // Define o comportamento suave da rolagem
    });

});

/* ----------------------------- */
/* ----- ANIMAÇÃO DO SITE ----- */
/* --------------------------- */

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const elements = document.querySelectorAll('.hidden');

elements.forEach((element)=> myObserver.observe(element));  