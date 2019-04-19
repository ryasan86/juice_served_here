import './styles/index.scss';

/*============ Nav link hover ============*/
const navLinks = document.querySelectorAll('.nav-link');

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

/*============ Images with overlays hover ============*/
const drinkItems = document.querySelectorAll('.overlay-container');

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
