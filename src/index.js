import './styles/index.scss';

/*============ Nav ============*/
const navLinks = document.querySelectorAll('.nav-link');

// activate nav link on hover
navLinks.forEach(link => {
  link.addEventListener('mouseenter', function() {
    if (this.firstChild.tagName === 'A') {
      this.firstChild.classList.add('active');
    }
  });
  link.addEventListener('mouseleave', function() {
    if (this.firstChild.tagName === 'A') {
      this.firstChild.classList.remove('active');
    }
  });
});

/*============ Images with overlays on hover ============*/
const drinkItems = document.querySelectorAll('.overlay-container');

// toggle overlays
drinkItems.forEach(drinkItem => {
  let overlay;

  drinkItem.addEventListener('mouseenter', function() {
    overlay = this.lastElementChild;
    overlay.style.visibility = 'visible';
  });
  drinkItem.addEventListener('mouseleave', function() {
    overlay = this.lastElementChild;
    overlay.style.visibility = 'hidden';
  });
});
