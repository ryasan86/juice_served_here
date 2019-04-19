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

/*============ Drinks ============*/
const drinkItems = document.querySelectorAll('.drink-list li');

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

/*============ Locations ============*/
const locationItems = document.querySelectorAll('.locations-list li');

locationItems.forEach(locationItem => {
  // show overlay
  let overlay;

  locationItem.addEventListener('mouseenter', function() {
    overlay = this.firstElementChild.lastElementChild;
    overlay.style.visibility = 'visible';
  });

  locationItem.addEventListener('mouseleave', function() {
    overlay = this.firstElementChild.lastElementChild;
    overlay.style.visibility = 'hidden';
  });
});
