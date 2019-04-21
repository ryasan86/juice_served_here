const toggleMenu = document.querySelector('.mobile-nav a');
const navList = document.querySelector('.nav-list');
const overlayContainers = document.querySelectorAll('.overlay-container');
const navItems = document.querySelectorAll('.nav-item');

/*============ Nav link hover ============*/
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
toggleMenu.addEventListener('click', () => {
  navList.classList.toggle('active');
});
