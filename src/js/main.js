const mobileNav = document.querySelector('.nav__links--mobile')
const openBtn = document.querySelector('.nav__btn--open')
const closeBtn = document.querySelector('.nav__btn--close')
const nav = document.querySelector('.nav')
const windowMedia = window.matchMedia('(min-width: 768px)')
const allMobileNavLinks = mobileNav.querySelectorAll('.nav__link')
const body = document.querySelector('body')
const footerYear = document.querySelector('.footer__year')
const username = document.querySelector('#name')
const email = document.querySelector('#email')
const msg = document.querySelector('#msg')
const sendBtn = document.querySelector('.send')
console.log(email.nextElementSibling.nextElementSibling)

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

const showError = (input, msg) => {
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.contact__form-error')
	formBox.classList.add('error')
	errorMsg.textContent = msg
}
const clearError = input => {
	const formBox = input.parentElement
	formBox.classList.remove('error')
}

const checkForm = input => {
	input.forEach(el => {
		const labelText = el.nextElementSibling.textContent.toLowerCase().slice(0, -1)
		if (el.value === '') {
			showError(el, `Pole ${labelText} jest puste`)
		} else {
			clearError(el)
		}
	})
}
;[username, email, msg].forEach(el => {
	el.addEventListener('focusout', e => {
		if (e.target.value !== '') {
			el.nextElementSibling.classList.add('focus')
		} else {
			el.nextElementSibling.classList.remove('focus')
		}
	})
})

const checkLength = (input, min) => {
	if ((input.value.length < min) & (input.value.length !== 0)) {
		showError(input, `${input.nextElementSibling.textContent.slice(0, -1)} musi składać się z minimu ${min} znaków`)
	}
}

const checkMail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/
	if (re.test(email.value)) {
		clearError(email)
	} else {
		showError(email, `Adres e-mail jest niepoprawny`)
	}
}

handleCurrentYear()
openBtn.addEventListener('click', showNav)
closeBtn.addEventListener('click', showNav)
windowMedia.addEventListener('change', watchWindow)
window.addEventListener('scroll', transpNav)
sendBtn.addEventListener('click', e => {
	e.preventDefault()
	checkForm([username, email, msg])
	checkLength(username, 4)
	checkLength(msg, 15)
	checkMail(email)
})
