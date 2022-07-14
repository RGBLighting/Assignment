

const username = document.getElementById('username')
const password = document.getElementById('password')
const errorMessage = document.getElementById('loginError')
localStorage.setItem('auth', false)
console.log(localStorage.getItem("auth"))

login.addEventListener('submit', (e) => {

    let errorMessages = []

    if (username.value === '' || username.value == null) {
        errorMessages.push('Username is required')
    }

    if (password.value.length <= 5) {
        errorMessages.push("Password must be longer than 5 characters")
    }

    if (password.value.length >= 20) {
        errorMessages.push("Password cannot be longer than 20 characters")
    }

    if (errorMessages.length > 0) {
        e.preventDefault()
        errorMessage.innerText = errorMessages.join(', ')
    }
    else {
        localStorage.setItem('auth', true)
        window.location.replace("home.html")
    }

})

