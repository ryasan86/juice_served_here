import './styles/index.scss';

/*============ Nav link hover ============*/
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(navItem => {
  const activeLink = 'active';
  navItem.addEventListener('mouseenter', function() {
    if (this.firstChild.tagName === 'A') {
      this.firstChild.classList.add(activeLink);
    }
  });
  navItem.addEventListener('mouseleave', function() {
    if (this.firstChild.tagName === 'A') {
      this.firstChild.classList.remove(activeLink);
    }
  });
});

/*============ Images with overlays hover ============*/
const overlayContainers = document.querySelectorAll('.overlay-container');

overlayContainers.forEach(overlayContainer => {
  let overlay;

  overlayContainer.addEventListener('mouseenter', function() {
    overlay = this.lastElementChild;
    overlay.style.visibility = 'visible';
  });
  overlayContainer.addEventListener('mouseleave', function() {
    overlay = this.lastElementChild;
    overlay.style.visibility = 'hidden';
  });
});

/*============ Toggle nav menu ============*/
const toggleMenu = document.querySelector('.toggle-menu');
const navList = document.querySelector('.nav-list');

toggleMenu.addEventListener('click', function() {
  const { classList } = navList;
  const openNav = 'active';
  if (classList.contains(openNav)) {
    classList.remove(openNav);
  } else {
    classList.add(openNav);
  }
});
