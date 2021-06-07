var submitButton = document.querySelector('#app form button')
var userField = document.querySelector('#app form input')
var content = document.querySelector('#app main')

submitButton.addEventListener('click', run)

function run(event) {
    event.preventDefault()

    var userName = userField.value

    axios
    .get('https://api.github.com/users/' + userName)
    .then(function (response) {
        console.log(response.data)
    })
    .catch(function (error) {
        console.log(error)
    })
}