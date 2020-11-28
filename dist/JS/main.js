document.addEventListener('DOMContentLoaded', function() {
    let menu = document.querySelector('.burger-menu');
    let menuBody = document.querySelector('.menu__body');

    if (menu != null) {
        menu.addEventListener('click', function() {
        let group = [menu, menuBody];

        group.forEach(element => {
            element.classList.toggle('.active')
        });
        
        body.classList.toggle('.lock');
    });
    }

    function ibg() {

        let ibg=document.querySelectorAll(".ibg");

        for (var i = 0; i < ibg.length; i++) {
            if(ibg[i].querySelector('.ibg-src')){
                ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
            }
        }
    }
    ibg();

});
