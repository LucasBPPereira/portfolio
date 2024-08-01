const headerCtn = document.querySelector('.header__container');
const menuHamb = document.querySelector('.header-menu');
const navHeader = document.querySelector('.header__nav__container');
const backdrop = document.getElementById('backdrop');

const largura = window.innerWidth;

window.onload = () => {
    backdrop.style.display = 'none';    

    window.addEventListener('mouseup', function (event) {

        if (largura < 600) {
            menuHamb.addEventListener('click', () => {
                menuHamb.classList.add('hide');
                navHeader.classList.remove('hide');
                headerCtn.classList.add('header__container-mobile');
                backdrop.style.display = 'block';
            })

            if (event.target != headerCtn && event.target.parentNode != headerCtn) {
                navHeader.classList.add('hide');
                menuHamb.classList.remove('hide')
                headerCtn.classList.remove('header__container-mobile')
                backdrop.style.display = 'none';
            }
        }

        if (largura > 600) {
            menuHamb.addEventListener('click', () => {
                menuHamb.classList.add('hide');
                navHeader.classList.remove('hide');
                headerCtn.classList.add('header__container-mobile');
                headerCtn.style.justifyContent = "space-between";
            });

            if (event.target != headerCtn && event.target.parentNode != headerCtn) {
                navHeader.classList.add('hide');
                menuHamb.classList.remove('hide')
                headerCtn.classList.remove('header__container-mobile')
                headerCtn.style.justifyContent = "center"
                headerCtn.style.border = "none";
            }
        }
    });
}
