const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');
const allNavLink = document.querySelectorAll('.nav__link');
// const navXcv = document.querySelector('.nav-mobile--active')

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');

	allNavLink.forEach((nav__link) => {
		nav__link.addEventListener('click', () =>
			navMobile.classList.remove('nav-mobile--active')
		);
	});
	// allNavlink.forEach((link) => {
	// 	link.addEventListener('click', () => {
	// 		link.classList.remove('nav-mobile--active');
	// 	});
	// });
};

navBtn.addEventListener('click', handleNav);

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();
