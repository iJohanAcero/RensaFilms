$(function () {

    // Archivo: custom.js
    // Descripción general:
    // Este fichero contiene comportamientos del frontend:
    // - Cambia la clase del header cuando se hace scroll para fijarlo.
    // - Inicializa un carrusel (Owl Carousel) para proyectos destacados.
    // - Anima contadores numéricos.
    // - Muestra/oculta y maneja el botón "ir arriba" con desplazamiento suave.
    // - Inicializa AOS (animaciones al hacer scroll).

    // Header Scroll
    // Agrega o quita la clase "fixed-header" al elemento <header>
    // cuando la página se desplaza más de 60px. Permite estilos CSS
    // para un header fijo después de hacer scroll.
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 60) {
            $("header").addClass("fixed-header");
        } else {
            $("header").removeClass("fixed-header");
        }
    });


    // Featured Owl Carousel
    // Inicializa Owl Carousel en el contenedor de proyectos destacados.
    // Opciones:
    // - center: centra el ítem activo
    // - loop: bucle infinito
    // - margin: espacio entre ítems
    // - autoplay: reproducción automática (5s)
    // - responsive: número de ítems según ancho de pantalla
    $('.featured-projects-slider .owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })


    // Count
    // Anima elementos con la clase .count incrementando el valor
    // desde 0 hasta el número presente en el texto del elemento.
    // Usa jQuery.animate para una animación suave (1 segundo).
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });


    // ScrollToTop
    // Función que hace scroll suave hasta la parte superior de la página.
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Referencia al botón "ir arriba" y asignación del evento click.
    // Se asume que existe un elemento con id="scrollToTopBtn" en el DOM.
    const btn = document.getElementById("scrollToTopBtn");
    btn.addEventListener("click", scrollToTop);

    // Muestra u oculta el botón "ir arriba" según la posición de scroll.
    // Si se ha hecho scroll más de 100px, muestra el botón (display: flex),
    // en caso contrario lo oculta (display: none).
    window.onscroll = function () {
        const btn = document.getElementById("scrollToTopBtn");
        if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
            btn.style.display = "flex";
        } else {
            btn.style.display = "none";
        }
    };


    // Aos
    // Inicializa la librería AOS para animaciones al hacer scroll.
    // La opción once:true hace que cada animación solo se ejecute una vez.
    AOS.init({
        once: true,
    });

});

