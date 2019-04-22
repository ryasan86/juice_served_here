const toggleMenu = document.querySelector('.mobile-nav a');
const navList = document.querySelector('.navbar');
const overlayContainers = document.querySelectorAll('.overlay-container');
const navItems = document.querySelectorAll('.nav-item');

/*============ active nav link ============*/
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

/*============ images with overlays ============*/
overlayContainers.forEach(overlayContainer => {
  let overlay;

  overlayContainer.addEventListener('mouseenter', function() {
    overlay = this.lastElementChild;
    overlay.style.opacity = 1;
  });
  overlayContainer.addEventListener('mouseleave', function() {
    overlay = this.lastElementChild;
    overlay.style.opacity = 0;
  });
});

/*============ mobile burger menu ============*/
toggleMenu.addEventListener('click', () => {
  navList.classList.toggle('active');
});
