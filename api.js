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
            localStorage.setItem("avatar", response.data.avatar_url)
            location.href = "user.html"
        }
        

    })
    .catch(function (error) {

        console.log(error)
    })
}

function createContent() {
    var userImg = document.createElement('img')
}

