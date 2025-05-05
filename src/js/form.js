const username = document.querySelector('#name')
const email = document.querySelector('#email')
const msg = document.querySelector('#msg')
const sendBtn = document.querySelector('.send')
const popup = document.querySelector('.popup')
const closePopupBtn = document.querySelector('.popup .close')
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
const checkErrors = () => {
	const allInputs = document.querySelectorAll('.contact__form-box')
	let errorCount = 0
	allInputs.forEach(el => {
		if (el.classList.contains('error')) {
			errorCount++
		}
	})
	if (errorCount === 0) {
		popup.classList.add('show-popup')
	}
}

const closePopup = () => {
	popup.classList.remove('show-popup')
	window.location.reload()
}

sendBtn.addEventListener('click', e => {
	e.preventDefault()
	checkForm([username, email, msg])
	checkLength(username, 4)
	checkLength(msg, 15)
	checkMail(email)
	checkErrors()
})
closePopupBtn.addEventListener('click', closePopup)

let map = L.map('map').setView([50.088215, 19.89282], 13)
let marker = L.marker([50.088215, 19.89282]).addTo(map)
marker.bindPopup("<b>Restauracja</b><br>McDonald's").openPopup();
let osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
})
osm.addTo(map)
