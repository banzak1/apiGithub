var submitButton = document.querySelector('#app form button')
var userField = document.querySelector('#app form input')

submitButton.addEventListener('click', run)

function run(event) {
    event.preventDefault()

    var userName = userField.value

    axios
    .get('https://api.github.com/users/' + userName)
    .then(function (response) {
        if (response.data.message != "Not Found") {
            localStorage.setItem("userName", response.data.login)
            localStorage.setItem("avatar", response.data.avatar_url)
            localStorage.setItem("name", response.data.name)
            localStorage.setItem("email", response.data.email)
            localStorage.setItem("location", response.data.location)
            location.href = "user.html"
        }
        

    })
    .catch(function (error) {

        console.log(error)
    })
}

