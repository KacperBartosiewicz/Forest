const mobileNav = document.querySelector('.nav__links--mobile')
const openBtn = document.querySelector('.nav__btn--open')
const closeBtn = document.querySelector('.nav__btn--close')
const windowMedia = window.matchMedia('(min-width: 992px)')
const allMobileNavLinks = mobileNav.querySelectorAll('.nav__link')
console.log(allMobileNavLinks)

const showNav = () => {
	mobileNav.classList.toggle('nav__links--active')
	openBtn.classList.toggle('unactive')
	closeBtn.classList.toggle('active')
	allMobileNavLinks.forEach(item => {
		item.addEventListener('click', () => {
			mobileNav.classList.remove('nav__links--active')
			openBtn.classList.remove('unactive')
			closeBtn.classList.remove('active')
		})
	})
}

const watchWindow = () => {
	openBtn.classList.add('unactive')
	closeBtn.classList.add('unactive')
	mobileNav.classList.remove('nav__links--active')
	if (window.innerWidth < 992) {
		openBtn.classList.remove('unactive')
		closeBtn.classList.remove('unactive')
		closeBtn.classList.remove('active')
	}
}

openBtn.addEventListener('click', showNav)
closeBtn.addEventListener('click', showNav)
windowMedia.addEventListener('change', watchWindow)
