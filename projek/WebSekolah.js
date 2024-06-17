
const profilPendiriLink = document.getElementsByClassName("profil-pendiri-link")[0] 
const profilPendiri = document.getElementsByClassName("profil-pendiri")[0]
profilPendiriLink.onclick= (e)=>{
    profilPendiri.style.display = "grid"
    e.preventDefault()
}

const closeBTN = document.getElementsByClassName("close")[0]

closeBTN.onclick = (e)=>{
    profilPendiri.style.display = "none"
    e.preventDefault()
}
