const mobileNav = document.querySelector('.nav__links--mobile')
const openBtn = document.querySelector('.nav__btn--open')
const closeBtn = document.querySelector('.nav__btn--close')
const nav = document.querySelector('.nav')
const windowMedia = window.matchMedia('(min-width: 768px)')
const allMobileNavLinks = mobileNav.querySelectorAll('.nav__link')
console.log(nav)
console.log(window.scrollX)

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
const transparentNav = () => {
	if (window.scrollY >= 100 && window.innerWidth < 768) {
		nav.classList.add('transparent-bgc')
	} else {
		nav.classList.remove('transparent-bgc')
	}
}

const watchWindow = () => {
	openBtn.classList.add('unactive')
	closeBtn.classList.add('unactive')
	mobileNav.classList.remove('nav__links--active')
	if (window.innerWidth < 768) {
		openBtn.classList.remove('unactive')
		closeBtn.classList.remove('unactive')
		closeBtn.classList.remove('active')
	}
}

openBtn.addEventListener('click', showNav)
closeBtn.addEventListener('click', showNav)
windowMedia.addEventListener('change', watchWindow)
window.addEventListener('scroll', transparentNav)
