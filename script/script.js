const back = document.querySelector('.back');

back.addEventListener('click', (e) => {
    e.preventDefault(); // Previne o comportamento padrão do link

    // Seleciona o elemento de destino (o topo da página)
    document.querySelector('#inicio').scrollIntoView({
        behavior: 'smooth' // Define o comportamento suave da rolagem
    });

});