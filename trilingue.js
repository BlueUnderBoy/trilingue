let su = document.getElementById("su")
let reg = document.getElementById("reg")

let loreg = document.createElement("div")
let bdiv = document.createElement("div")
let limage = document.createElement("img")
let lheader = document.createElement("h1")
let aldiv = document.createElement("div")
let lmessage = document.createElement("h3") 
let tdiv = document.createElement("div")
let ltitle = document.createElement("h2")
let lcont = document.createElement("div")
let fdivun = document.createElement("div")
let fdivem = document.createElement("div")
let fdivpw = document.createElement("div")
let fdivpwv = document.createElement("div")
let fdivsub = document.createElement("div")
let lform = document.createElement("form")
let labelun = document.createElement("label")
let linputun = document.createElement("input")
let labelem = document.createElement("label")
let linputem = document.createElement("input")
let labelpw = document.createElement("label")
let linputpw = document.createElement("input")
let labelvpw = document.createElement("label")
let linputvpw = document.createElement("input")
let linputsub = document.createElement("input")

loreg.setAttribute("id", "loreg")
bdiv.setAttribute("id", "bdiv")
limage.setAttribute("id", "limage")
limage.setAttribute("src", "mlogo.jpeg")
limage.setAttribute("alt", "Marenfra Logo")
lheader.setAttribute("id", "lheader")
tdiv.setAttribute("id", "tdiv")
ltitle.setAttribute("id", "ltitle")
lcont.setAttribute("id", "lcont")
fdivun.setAttribute("id", "fdivun")
fdivem.setAttribute("id", "fdivem")
fdivpw.setAttribute("id", "fdivpw")
fdivpwv.setAttribute("id", "fdivpwv")
fdivsub.setAttribute("id", "fdivsub")
lform.setAttribute("id", "lform")
labelun.setAttribute("id", "labelun")
labelem.setAttribute("id", "labelem")
labelpw.setAttribute("id", "labelpw")
labelvpw.setAttribute("id", "labelvpw")
linputun.setAttribute("id", "linputun")
linputem.setAttribute("id", "linputem")
linputem.setAttribute("type", "email")
linputpw.setAttribute("id", "linputpw")
linputvpw.setAttribute("id", "linputvpw")
linputsub.setAttribute("id", "linputsub")
linputsub.setAttribute("type", "submit")
linputsub.setAttribute("name", "Register")


su.addEventListener("click", function(){
    reg.appendChild(loreg)
    loreg.appendChild(bdiv)
    loreg.appendChild(tdiv)
    loreg.appendChild(lcont)
    lcont.appendChild(lform)
    lform.appendChild(fdivun)
    lform.appendChild(fdivem)
    lform.appendChild(fdivpw)
    lform.appendChild(fdivpwv)
    lform.appendChild(fdivsub)
    bdiv.appendChild(limage)
    bdiv.appendChild(lheader)
    tdiv.appendChild(ltitle)
    fdivun.appendChild(labelun)
    fdivun.appendChild(linputun)
    fdivem.appendChild(labelem)
    fdivem.appendChild(linputem)
    fdivpw.appendChild(labelpw)
    fdivpw.appendChild(linputpw)
    fdivpwv.appendChild(labelvpw)
    fdivpwv.appendChild(linputvpw)
    fdivsub.appendChild(linputsub)
    lheader.innerHTML = "MARENFRA"
    ltitle.innerHTML = "Create a Marenfra account!"
    labelun.innerHTML = "Username"
    labelem.innerHTML = "Email"
    labelpw.innerHTML = "Password"
    labelvpw.innerHTML = "Verify Password"
    console.log(loreg.textContent)
    loreg.style.setProperty("position", "absolute")
    loreg.style.setProperty("background-color", "white")
    loreg.style.setProperty("width", "500px")
    loreg.style.setProperty("height", "500px")
    ltitle.style.setProperty("width", "300px")
    
    //CSS
    let cont_css = document.querySelector("#lcont")
    cont_css.style.setProperty("display", "flex")
    cont_css.style.setProperty("justify-content", "center")

    let banner_css = document.querySelector("#bdiv")
    banner_css.style.setProperty("display", "flex")
    banner_css.style.setProperty("justify-content", "center")
    banner_css.style.setProperty("font-size", "18pt")

    let limage_css = document.querySelector("#limage")
    limage_css.style.setProperty("width", "100px")


    let form_css = document.querySelector("#lform")
    form_css.style.setProperty("width", "370px")

    let title_css = document.querySelector("#tdiv")
    title_css.style.setProperty("display", "flex")
    title_css.style.setProperty("justify-content", "center")
    

    let fdivun_css = document.querySelector("#fdivun")
    fdivun_css.style.setProperty("display", "flex")
    fdivun_css.style.setProperty("justify-content", "space-between")
    
    let fdivem_css = document.querySelector("#fdivem")
    fdivem_css.style.setProperty("display", "flex")
    fdivem_css.style.setProperty("justify-content", "space-between")

    let fdivpw_css = document.querySelector("#fdivpw")
    fdivpw_css.style.setProperty("display", "flex")
    fdivpw_css.style.setProperty("justify-content", "space-between")

    let fdivpwv_css = document.querySelector("#fdivpwv")
    fdivpwv_css.style.setProperty("display", "flex")
    fdivpwv_css.style.setProperty("justify-content", "space-between")

    let fdivsub_css = document.querySelector("#fdivsub")
    fdivsub_css.style.setProperty("display", "flex")
    fdivsub_css.style.setProperty("justify-content", "center")
    
});

