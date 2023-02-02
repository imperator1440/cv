const menuBody = document.querySelector('.menu__body');
const menuLinks = document.querySelectorAll('.menu__link[data-goto]' );
const iconMenu = document.querySelector('.menu__icon');

if(iconMenu){
  iconMenu.addEventListener("click", function(e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });  
}

if (menuLinks.length > 0) {
  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
        const gotoSection = document.querySelector(menuLink.dataset.goto);
        const gotoSectionValue = gotoSection.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight;
      
        if(iconMenu.classList.contains('_active')){
          document.body.classList.remove("_lock");
          iconMenu.classList.remove('_active');
          menuBody.classList.remove('_active');
        }

        window.scrollTo({
         top: gotoSectionValue,
         behavior: "smooth"
       });
       e.preventDefault();
      }
    });
  });
}