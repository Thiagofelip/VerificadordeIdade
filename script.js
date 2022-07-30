function check() {
  let date = new Date()
  let year = date.getFullYear()
  let fyear = document.querySelector("#txtano")
  let res = document.querySelector("#res")
  let fsex = document.getElementsByName('radsex')
  let age = year - Number(fyear.value)
  let genre = ""
  let img = document.createElement("img")

function calcSexAGe() {
  img.setAttribute("id", "foto")
  if (fsex[0].checked) {
    genre = "Homem"
      if (age >= 0 && age < 10) {
        //criança
        img.setAttribute('src', 'img/foto-bebe-m.png')
      } else if (age < 21) {
        //jovem
        img.setAttribute('src', 'img/foto-jovem-m.png')
      } else if (age < 50) {
        //adulto
        img.setAttribute('src', 'img/foto-adulto-m.png')
      } else {
        //idoso
        img.setAttribute('src', 'img/foto-idoso-m.png')
      }
    } else {
      genre = "Mulher"

      if (age >= 0 && age < 10) {
        //criança
        img.setAttribute('src', 'img/foto-bebe-f.png')
      } else if (age < 21) {
        //jovem
        img.setAttribute('src', 'img/foto-jovem-f.png')
      } else if (age < 50) {
        //adulto
        img.setAttribute('src', 'img/foto-adulto-f.png')
      } else {
        //idoso
        img.setAttribute('src', 'img/foto-idoso-f.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genre} com ${age} anos.`
    res.appendChild(img)
  }

  if (fyear.value.length == 0 || fyear.value > year) {
    alert("[ERRO] Verifique os dados e tente novamente!")
  } else {
    calcSexAGe()
  }





}