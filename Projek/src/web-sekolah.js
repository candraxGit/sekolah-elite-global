
const linkPendiri = document.querySelectorAll(".pp-pendiri")

const profilPendiri = document.getElementsByClassName("profil-pendiri")[0]

linkPendiri.forEach( btn =>{
    btn.onclick=(e)=>{
        e.preventDefault()
        profilPendiri.style.display="flex"
    }
})


profilPendiri.ondblclick = (e)=>{
    e.preventDefault()
    profilPendiri.style.display="none"
}


const teksBerita = document.querySelectorAll(".teks-berita")

teksBerita.forEach(teks=>{
    teks.onclick= (e)=>{
        e.preventDefault()
        teks.textContent= `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde optio voluptate minus omnis quos sit illum doloribus blanditiis eveniet voluptates.`
    }
})