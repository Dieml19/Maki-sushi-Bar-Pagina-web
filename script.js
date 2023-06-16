function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const burger = document.querySelector('.burger');
  
    navLinks.classList.toggle('fade');
    burger.classList.toggle('active');
  }