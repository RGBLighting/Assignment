

const message = document.getElementById('message')
const errorMessage = document.getElementById('contactError')

contact.addEventListener('submit', (e) => {
    
    let errorMessages = []

    if (message.value.length <= 20) {
        errorMessages.push("Message must be longer than 20 characters")
    }

    if (errorMessages.length > 0) {
        e.preventDefault()
        errorMessage.innerText = errorMessages.join(', ')
    }
    else {
        window.alert('Your message has been sent!')
    }
})

