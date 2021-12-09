let musics = [
    {
        name : "Set Fire To The Rain",
        cover : "imgs/set-fire.jpg",
        audio : new Audio("./musics/set-fire.mp3")
    },
    {
        name : "Lose yourself",
        cover : "imgs/lose-yourself.jpg",
        audio : new Audio("./musics/lose-yourself.mp3")
    },
    {
        name : "Ready for it",
        cover : "imgs/ready-for-it.jpg",
        audio : new Audio("./musics/ready-for-it.mp3")
    }
]

let range = document.querySelector("#music-time")
let playBtn = document.querySelector("#play-btn")
let nextBtn = document.querySelector("#next-btn")
let preBtn = document.querySelector("#pre-btn")
let musicCover = document.querySelector("#music-cover")
let musicName = document.querySelector("#music-name")

let currentMusic = 0;
let audio = musics[currentMusic].audio
musicCover.src = musics[currentMusic].cover
musicName.innerText = musics[currentMusic].name

audio.addEventListener("canplay", ()=>{
    console.log(audio.duration)
    range.max = audio.duration
})

audio.addEventListener("timeupdate", ()=>{
    range.value = audio.currentTime
})

range.addEventListener("input", ()=>{
    audio.currentTime = range.value
})

playBtn.addEventListener("click", ()=>{
    if(audio.paused){
        audio.play();
        musicCover.style.animationPlayState = "running"
        playBtn.classList.replace("fa-play","fa-pause")
    }else{
        audio.pause()
        musicCover.style.animationPlayState = "paused"
        playBtn.classList.replace("fa-pause","fa-play")
    }
})

nextBtn.addEventListener("click", ()=>{
    changeMusic("next")
})
preBtn.addEventListener("click", ()=>{
    changeMusic("pre")
})

function changeMusic(state){
    audio.pause()
    range.value = 0
    playBtn.classList.replace("fa-pause","fa-play")
    musicCover.style.animationPlayState = "paused"
    audio.currentMusic = 0
    if(state == "next"){
        if(currentMusic == musics.length -1)
            currentMusic = 0    
        else currentMusic +=1
    }else{
        if(currentMusic == 0)
            currentMusic = musics.length -1
        else currentMusic -=1
    }

    audio = musics[currentMusic].audio
    musicCover.src = musics[currentMusic].cover
    musicName.innerText = musics[currentMusic].name

    audio.addEventListener("timeupdate", ()=>{
        range.value = audio.currentTime
    })
}






