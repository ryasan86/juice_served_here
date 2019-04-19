import './styles/index.scss';

const navLinks = document.querySelectorAll('.nav-link');
const drinkItems = document.querySelector('.drink-list');

/*============ Nav Links ============*/
const onNavLinkClick = e => {
  // deactivate active nav link
  navLinks.forEach((navLink, i) => {
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
drinkItems.addEventListener('click', e => {
  // if (e.target.tagName === 'LI') {
  //   console.log('test');
  // }
  console.log(e.target.tagName)
});
