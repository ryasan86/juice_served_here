import './styles/index.scss';

const theme = {
  dark: '#231f20',
  orangered: '#f95951',
};

const navLinks = document.querySelectorAll('.nav-link');

const onLinkClick = e => {
  // deactivate active link
  navLinks.forEach((navLink, i) => {
    navLink.classList.remove('active');
  });
  // active new active link
  e.target.classList.add('active');
};

const navList = document.querySelectorAll('.nav-list');

navList.forEach(list => {
  list.addEventListener('click', onLinkClick);
});