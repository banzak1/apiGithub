var logoutButton = document.getElementById('exit')
var userName = document.getElementById('userName')
var avatar = document.getElementById('avatarImage')
var githubName = document.getElementById('name')
var githubEmail = document.getElementById('email')
var githubLocation = document.getElementById('location')

var followersNumber = document.getElementById('followersNumber')
var followingNumber = document.getElementById('followingNumber')
var reposNumber = document.getElementById('reposNumber')

userName.textContent = localStorage.getItem("userName")

githubName.textContent = localStorage.getItem("name")
githubEmail.textContent = localStorage.getItem("email")
githubLocation.textContent = localStorage.getItem("location")

followersNumber.textContent = localStorage.getItem("followersNumber")
followingNumber.textContent = localStorage.getItem("followingNumber")
reposNumber.textContent = localStorage.getItem("reposNumber")


logoutButton.addEventListener('click', function () {
    location.href = "index.html"

})

avatar.src = localStorage.getItem("avatar")



