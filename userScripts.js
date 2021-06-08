var logoutButton = document.getElementById('exit')
var userName = document.getElementById('userName')
var avatar = document.getElementById('avatarImage')
var githubName = document.getElementById('name')
var githubEmail = document.getElementById('email')
var githubLocation = document.getElementById('location')

userName.textContent = localStorage.getItem("userName")
githubName.textContent = localStorage.getItem("name")
githubEmail.textContent = localStorage.getItem("email")
githubLocation.textContent = localStorage.getItem("location")

logoutButton.addEventListener('click', function () {
    location.href = "index.html"

})

avatar.src = localStorage.getItem("avatar")



