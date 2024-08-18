import "/trilingue.css"

const signup = document.getElementById("su")
const body = document.querySelector(".lbody")
let loreg = createElement("div")

body.appendChild(loreg)
loreg.setAttribute("class", "overlay")
loreg.style.setProperty("height", "200px")
loreg.style.display = "none"

signup.addEventListener('click', function(event) {
    event.preventDefault()
    loreg.style.display = block;
    loreg.style.setProperty("position", "absolute")

})
