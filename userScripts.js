var logoutButton = document.getElementById('exit')
var userName = document.getElementById('userName')
var avatar = document.getElementById('avatarImage')


userName.textContent = localStorage.getItem("userName")

logoutButton.addEventListener('click', function () {
    location.href = "index.html"
})

avatar.src = localStorage.getItem("avatar")



