document.addEventListener('DOMContentLoaded', () => {
  fetch('components/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar-placeholder').innerHTML = data;

      const navListItems = document.querySelectorAll('.nav-list li');
      navListItems.forEach(item => {
        item.addEventListener('mouseover', () => {
          if (!item.classList.contains('home')) {
            document.querySelector('.home').style.backgroundColor = '#fff';
          }
        });

        item.addEventListener('mouseout', () => {
          if (!item.classList.contains('home')) {
            document.querySelector('.home').style.backgroundColor = '#F2F3F5';
          }
        });
      });

      const pairs = [
        { optionClass: 'moreoptions', menuClass: 'innersidemenu' },
        { optionClass: 'aboutoptions', menuClass: 'aboutmenu' },
        { optionClass: 'blogoptions', menuClass: 'blogmenu' },
        { optionClass: 'contactoptions', menuClass: 'contactmenu' },
        { optionClass: 'helpoptions', menuClass: 'helpmenu' },
        { optionClass: 'erroroptions', menuClass: 'errormenu' }
      ];

      pairs.forEach(({ optionClass, menuClass }) => {
        const trigger = document.querySelector(`.${optionClass}`);
        const menu = document.querySelector(`.${menuClass}`);

        if (trigger && menu) {
          trigger.addEventListener('mouseenter', () => {
            menu.style.opacity = '1';
            menu.style.transform = 'translateY(0)';
            menu.style.visibility = 'visible';
          });

          trigger.addEventListener('mouseleave', () => {
            setTimeout(() => {
              if (!menu.matches(':hover') && !trigger.matches(':hover')) {
                menu.style.opacity = '';
                menu.style.transform = '';
                menu.style.visibility = '';
              }
            }, 100);
          });

          menu.addEventListener('mouseleave', () => {
            menu.style.opacity = '';
            menu.style.transform = '';
            menu.style.visibility = '';
          });
        }
      });




  fetch('components/menu.html')
  .then(response => response.text())
  .then(menuHtml => {
    document.body.insertAdjacentHTML('beforeend', menuHtml);

    const menuIcon = document.querySelector('.menuIcon');
    const sideMenu = document.getElementById('side-menu');
    const sideOverlay = document.getElementById('side-menu-overlay');
    const closeBtn = document.getElementById('close-side-menu');

    function openMenu() {
      sideMenu.classList.add('open');
      sideOverlay.style.display = 'block';
    }

    function closeMenu() {
      sideMenu.classList.remove('open');
      sideOverlay.style.display = 'none';
    }

    menuIcon.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    sideOverlay.addEventListener('click', closeMenu);

    const menuOptions = document.querySelectorAll('.side-menu-list li');
    menuOptions.forEach(item => {
      item.addEventListener('mouseover', () => {
        if (!item.classList.contains('menuHome')) {
          document.querySelector('.menuHome').style.backgroundColor = '#fff';
        }
      });

      item.addEventListener('mouseout', () => {
        if (!item.classList.contains('menuHome')) {
          document.querySelector('.menuHome').style.backgroundColor = '#F2F3F5';
        }
      });
    });



    const handleMenuHomeClick = () => {
    const insideHomeMenuContainer = document.querySelector('.insideHomeMenuContainer');

    if (insideHomeMenuContainer.style.display === 'none' || insideHomeMenuContainer.style.display === '') {
      insideHomeMenuContainer.style.display = 'block';
    } else {
      insideHomeMenuContainer.style.display = 'none';
    }
  };

  const menuHomeElement = document.querySelector('.menuHome');
  if (menuHomeElement) {
    menuHomeElement.addEventListener('click', handleMenuHomeClick);
  }
    

  });









const menuItem = document.querySelector('.homeDropdownMenu_realEstate');
const sideImg = document.querySelector('.homeMenuRealEstateSideImg');
const hoverBridge = document.querySelector('.hover-bridge');

function showSideImg() {
  sideImg.style.display = 'inline-block';
  hoverBridge.style.top="5px"
}

function hideSideImg() {
  sideImg.style.display = 'none';
}

menuItem.addEventListener('mouseenter', showSideImg);
menuItem.addEventListener('mouseleave', hideSideImg);

sideImg.addEventListener('mouseenter', showSideImg);
sideImg.addEventListener('mouseleave', hideSideImg);

hoverBridge.addEventListener('mouseenter', showSideImg);
hoverBridge.addEventListener('mouseleave', hideSideImg);







    });
});
