document.addEventListener('DOMContentLoaded', function() {
    
    const menu = document.querySelector('.burger-menu');
    const menuBody = document.querySelector('.menu__body');

    if (menu != null) {
        menu.addEventListener('click', function() {
            const group = [menu, menuBody]; 
            group.forEach(element => {
                element.classList.toggle('.active')
            });
            body.classList.toggle('.lock');
        });
    }
});