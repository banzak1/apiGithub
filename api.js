var submitButton = document.querySelector('#app form button')
var userField = document.querySelector('#app form input')

submitButton.addEventListener('click', run)

function run(event) {
    event.preventDefault()

    var userName = userField.value

    axios
    .get('https://api.github.com/users/' + userName)
    .then(function (response) {
        console.log(response.data)

        location.href = "user.html"

        localStorage.setItem("avatar", response.data.avatar_url)
    })
    .catch(function (error) {
        console.log(error)
    })
}

function createContent() {
    var userImg = document.createElement('img')
}

