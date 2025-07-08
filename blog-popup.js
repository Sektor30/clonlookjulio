document.addEventListener('DOMContentLoaded', function() {
    const blogPopup = document.querySelector('.blog-popup');
    let lastScrollTop = 0;
    const carouselHeight = document.querySelector('#mainCarousel').offsetHeight;

    // Mostrar el popup cuando se carga la página
    setTimeout(() => {
        blogPopup.style.display = 'block';
    }, 2000);

    // Escuchar el evento de scroll
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Si el scroll es mayor a 30px y va hacia abajo
        if (scrollTop > 30 && scrollTop > lastScrollTop) {
            blogPopup.style.display = 'none';
        }
        
        // Si el scroll está dentro del área del carrusel (cerca del inicio)
        if (scrollTop <= carouselHeight * 0.8) {
            blogPopup.style.display = 'block';
        }
        
        lastScrollTop = scrollTop;
    });
}); 