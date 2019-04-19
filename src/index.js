import './styles/index.scss';

/*============ Nav ============*/
const navLists = document.querySelectorAll('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');

const onNavLinkClick = e => {
  // deactivate active nav link
  navLinks.forEach(navLink => {
    navLink.classList.remove('active');
  });
  // active new active nav link
  e.target.classList.add('active');
};

navLists.forEach(list => {
  list.addEventListener('click', onNavLinkClick);
});

/*============ Images with overlays on hover ============*/
const drinkItems = document.querySelectorAll('.overlay-container');

drinkItems.forEach(drinkItem => {
  // show overlay
  let overlay;

  drinkItem.addEventListener('mouseenter', function() {
    overlay = this.lastElementChild;
    overlay.style.visibility = 'visible';
  });
  // hide overlay
  drinkItem.addEventListener('mouseleave', function() {
    overlay = this.lastElementChild;
    overlay.style.visibility = 'hidden';
  });
});
