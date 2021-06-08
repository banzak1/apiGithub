var content = document.querySelector('#app main')

var imagem = document.createElement('img')
var imgUrl = localStorage.getItem("avatar")
imagem.src = imgUrl
content.appendChild(imagem)