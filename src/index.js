import './styles/index.scss';

/*============ Nav link hover ============*/
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(navItem => {
  navItem.addEventListener('mouseenter', function() {
    if (this.firstChild.tagName === 'A') {
      this.firstChild.classList.add('active');
    }
  });
  navItem.addEventListener('mouseleave', function() {
    if (this.firstChild.tagName === 'A') {
      this.firstChild.classList.remove('active');
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

toggleMenu.addEventListener('click', function() {
  console.log(this);
})