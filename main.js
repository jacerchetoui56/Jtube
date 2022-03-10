const card = document.querySelectorAll(".card")
const video = document.querySelectorAll(".vid")
const laterbtn = document.querySelectorAll(".later")
const latericon = document.querySelectorAll(".later i")
const page = document.querySelector(".page")
const sharebtn = document.querySelectorAll(".shareit")
const exitshare = document.querySelectorAll(".exitshare")
const sharebox = document.querySelector('.share')
const exitvideo = document.querySelectorAll(".fa-angle-down")

let totop=-1;

for(let i=0;i<sharebtn.length;i++){
    sharebtn[i].addEventListener('click',(event)=>{
    event.stopImmediatePropagation()
    sharebox.classList.toggle("show")
    page.classList.toggle("blur")
    })
}
for(let i=0;i<exitshare.length;i++){
    exitshare[i].addEventListener('click',()=>{
    sharebox.classList.remove("show")
    page.classList.remove("blur")
    })
}

for(let i=0;i<card.length;i++){
    card[i].addEventListener('mouseover',()=>{
        if(!card[i].classList.contains("launch")) video[i].play()
    })
}
for(let i=0;i<card.length;i++){
    card[i].addEventListener('mouseleave',()=>{
        if(!card[i].classList.contains("launch")) {video[i].pause()
        video[i].currentTime = 0}
    })
}
for(let i=0;i<laterbtn.length;i++){
    laterbtn[i].addEventListener('click',(event)=>{
        event.stopImmediatePropagation()
        latericon[i].classList.remove("fa-clock")
        latericon[i].classList.add("fa-check")
        laterbtn[i].classList.toggle("on")
    })
}


for(let i=0;i<card.length;i++){
    card[i].addEventListener('click',()=>{
        video[i].autoplay = "autoplay"
        for(let j=0;j<card.length;j++){
            card[j].classList.add("nohover")
        }
        pauseOthers(i);
        exitvideo[i].style.display = 'block'
        card[i].classList.add('launch')
        video[i].play()
        video[i].controls = "controls"
        video[i].muted = ""
        card[i].style.order = totop; totop--;
        window.scrollTo({top : 0 , behavior : 'smooth'});
    })
}
function pauseOthers(n){
    for(let i=0;i<card.length;i++){
        if(i!=n && card[i].classList.contains("launch")) {
            video[i].pause()
            video[i].controls = ""
            video[i].muted = "muted"
            card[i].classList.remove('launch')
        }
    }
}

for(let i=0;i<exitvideo.length;i++){
    exitvideo[i].addEventListener('click',(event)=>{
        event.stopImmediatePropagation()
        card[i].classList.remove('launch')
        cancelHover() 
        video[i].pause()
        video[i].currentTime = 0
        exitvideo[i].style.display = 'none'
        video[i].autoplay = ""
        video[i].muted = "muted"
        video[i].controls = ""
        verifyHover()
    })
}

function cancelHover(){
    for(let j=0;j<card.length;j++){
        if(!card[j].classList.contains("nohover")) card[j].classList.remove("nohover")
    }
}
function verifyHover(){
    let verif=true;
    for(let i=0;i<card.length;i++){
        if(!card[i].classList.contains("nohover")) verif=false;
    }
    if(verif) for(let i=0;i<card.length;i++) card[i].classList.remove("nohover")
}


const searchbar = document.querySelector(".searchbar input")
const titles = document.querySelectorAll(".text h2")
const noresult = document.querySelector(".noresult")

searchbar.addEventListener("keydown",(event)=>{
    pauseOthers()
    let no=0
    let text = searchbar.value.toLowerCase()
    const key = event.key
    if(text.length==0 && key <='z' && key >='a') text = key
    else if(key <='z' && key >='a' && text.length!=0) text+=key
    for(let i=0;i<card.length;i++){
        if(!titles[i].textContent.toLowerCase().includes(text)) {
            card[i].style.display = 'none';
             no++; 
        }
    }
    if(no==card.length) noresult.style.display = 'block'
    if(event.key == "Backspace") 
    {
        text = text.slice(0,-1)        
        for(i=0;i<card.length;i++){
        if(!titles[i].textContent.toLowerCase().includes(text) ) card[i].style.display = 'none';
         else{ card[i].style.display = 'block'; noresult.style.display = 'none'}
    }
}
    if(text.length ==1 || text.length <=1) for(let i=0;i<card.length;i++){
         card[i].style.display = 'block'
    }
})

//!toggling dark mode-------------
const darkmode = document.querySelector(".darkmode")
const lightmode= document.querySelector(".lightmode")
const header = document.querySelector('header')
console.log(lightmode)
darkmode.addEventListener('click',()=>{
    header.classList.toggle("dark")
    document.body.classList.toggle("dark")
    card.forEach((onecard)=>{onecard.classList.toggle("dark")})
    document.querySelector("footer").classList.toggle("dark")
    noresult.classList.toggle('dark')
    sharebox.classList.toggle('dark')
})


//!to top button ----------
window.onscroll = ()=>{
    if(document.documentElement.scrollTop > 900) totopbtn.classList.add('show')
    else totopbtn.classList.remove('show')
}
const totopbtn = document.querySelector(".totopbtn")
totopbtn.addEventListener('click',()=>{
    window.scrollTo({top:0, behavior : "smooth"})
})