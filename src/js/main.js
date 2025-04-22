const mobileNav = document.querySelector('.nav__links--mobile')
const openBtn = document.querySelector('.nav__btn--open')
const closeBtn = document.querySelector('.nav__btn--close')
const nav = document.querySelector('.nav')
const windowMedia = window.matchMedia('(min-width: 768px)')
const allMobileNavLinks = mobileNav.querySelectorAll('.nav__link')
const body = document.querySelector('body')
const footerYear = document.querySelector('.footer__year')


const showNav = () => {
	mobileNav.classList.toggle('nav__links--active')
	openBtn.classList.toggle('unactive')
	closeBtn.classList.toggle('active')
	if (openBtn.classList.contains('unactive')) {
		body.style.overflow = 'hidden'
		nav.classList.remove('transp-bgc')
	} else {
		body.style.overflow = 'visible'
		nav.classList.add('transp-bgc')
	}
	allMobileNavLinks.forEach(item => {
		item.addEventListener('click', () => {
			mobileNav.classList.remove('nav__links--active')
			openBtn.classList.remove('unactive')
			closeBtn.classList.remove('active')
			body.style.overflow = 'visible'
		})
	})
}
const transpNav = () => {
	if (window.scrollY >= 100 && window.innerWidth < 768) {
		nav.classList.add('transp-bgc')
	} else {
		nav.classList.remove('transp-bgc')
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

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
openBtn.addEventListener('click', showNav)
closeBtn.addEventListener('click', showNav)
windowMedia.addEventListener('change', watchWindow)
window.addEventListener('scroll', transpNav)
