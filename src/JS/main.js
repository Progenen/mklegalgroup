document.addEventListener('DOMContentLoaded', function() {
    
    const menu = document.querySelector('.burger-menu');
    const menuBody = document.querySelectorAll('.header__menu');
    const mobileMenu = document.querySelector('.mobile__menu');

    if (menu != null) {

        if (screen.width < 1200) {
            menuBody.forEach(element => {
                mobileMenu.append(element);
            });
        }
    
        menu.addEventListener('click', function() {
            const group = [menu, mobileMenu]; 
            group.forEach(element => {
                element.classList.toggle('active');
            });
            document.body.classList.toggle('lock');
        });
    }
});