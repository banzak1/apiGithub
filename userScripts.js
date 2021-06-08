var content = document.querySelector('#app main')
var logoutButton = document.getElementById('logout')


var imagem = document.createElement('img')
var imgUrl = localStorage.getItem("avatar")
imagem.src = imgUrl
content.appendChild(imagem)

logoutButton.addEventListener('click', function () {
    location.href = "index.html"
})