 function toggleMenu(){
        const menuToggle = document.querySelector('.menuToggle');
        menuToggle.classList.toggle('active');
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('active');
    }