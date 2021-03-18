$('.owl-carousel').owlCarousel({
    loop:false, /*verdadeiro faz loop, falso não*/
    margin:10,
    nav:false, /*botão de navegação false dessabilita*/
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5 /*coloca cinco elementos na tela */
        }
    }
})