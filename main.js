const card = document.querySelectorAll(".card")
const video = document.querySelectorAll(".vid")
const laterbtn = document.querySelectorAll(".later")
const latericon = document.querySelectorAll(".later i")
const playbtn = document.querySelectorAll(".play")
const page = document.querySelector(".page")
const hiddenvid = document.querySelectorAll(".hiddenvid")
const backbtn = document.querySelectorAll(".back")


for(let i=0;i<card.length;i++){
    card[i].addEventListener('mouseover',()=>{
        // setTimeout(() => {
        //     video.play()
        // }, 1000);
        video[i].play()
    })
}
for(let i=0;i<card.length;i++){
    card[i].addEventListener('mouseleave',()=>{
        video[i].pause()
        video[i].currentTime = 0
    })
}
for(let i=0;i<laterbtn.length;i++){
    laterbtn[i].addEventListener('click',(event)=>{
        event.stopPropagation()
        latericon[i].classList.remove("fa-clock")
        latericon[i].classList.add("fa-check")
        laterbtn[i].classList.toggle("on")
    })
}



for(let i=0;i<playbtn.length;i++){
    playbtn[i].addEventListener('click',()=>{
        if(!video[i].play()) video[i].play()
        page.classList.toggle('fullscreen')
        hiddenvid[i].classList.toggle('fullscreen')
        backbtn[i].classList.toggle('fullscreen')
    
    })
}
for(let i=0;i<card.length;i++){
    card[i].addEventListener('click',()=>{
        page.classList.toggle('fullscreen')
        hiddenvid[i].classList.toggle('fullscreen')
        backbtn[i].classList.toggle('fullscreen')
    })
}
for(let i=0;i<backbtn.length;i++){
    backbtn[i].addEventListener('click',(event)=>{
        page.classList.remove('fullscreen')
        hiddenvid[i].classList.remove('fullscreen')
        backbtn[i].classList.remove('fullscreen')
        hiddenvid[i].currentTime = 0
        video[i].currentTime = 0
        video[i].pause()
})
}
for(let i=0;i<backbtn.length;i++){
    document.addEventListener('keypress',(event)=>{
        if(event.key=='f'){
         page.classList.remove('fullscreen')
         hiddenvid[i].classList.remove('fullscreen')
         backbtn[i].classList.remove('fullscreen')
         hiddenvid[i].currentTime = 0
         video[i].currentTime = 0
         video[i].pause()
     }
 })
}






