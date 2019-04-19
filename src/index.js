import './styles/index.scss';

/*============ Nav Links ============*/
const navLinks = document.querySelectorAll('.nav-link');

const onNavLinkClick = e => {
  // deactivate active nav link
  navLinks.forEach(navLink => {
    navLink.classList.remove('active');
  });
  // active new active nav link
  e.target.classList.add('active');
};

const navList = document.querySelectorAll('.nav-list');

navList.forEach(list => {
  list.addEventListener('click', onNavLinkClick);
});

/*============ Drink Items ============*/
const drinkItems = document.querySelectorAll('.drink-item');

drinkItems.forEach(drinkItem => {
  drinkItem.addEventListener('mouseenter', function() {
    const overlay = this.lastElementChild;
    overlay.style.visibility = 'visible';
  });
  drinkItem.addEventListener('mouseleave', function() {
    const overlay = this.lastElementChild;
    overlay.style.visibility = 'hidden';
  });
});
