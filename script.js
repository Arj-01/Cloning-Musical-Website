// console.log("welcome to Js writing: Here is your beat");

let songIndex=0;
let audioElement=new Audio('song/song1.mp3');
let masterplay = document.getElementById('masterplay');
let progressbar= document.getElementById('progressbar')
let songitems= Array.from(document.getElementsByClassName('songitem'));



let songs =[
    {songName: "Astronomia", filePath: "song/song1.mp3", coverPath: "covers/1.jpg"},
    {songName: "NCS-1", filePath: "song/song2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Way POP", filePath: "song/song3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Stringer", filePath: "song/song4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Happily", filePath: "song/song5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Lovely", filePath: "song/song6.mp3", coverPath: "covers/6.jpg"},
    {songName: "loveMe", filePath: "song/song7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Ursong1", filePath: "song/song8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Ursong2", filePath: "song/song9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Ursong3", filePath: "song/song10.mp3", coverPath:"covers/10.jpg"},
 ]


 songitems.forEach((element, i)=>{
     console.log(element,i);
     element.getElementsByTagName('img')[0].src=songs[i].coverPath;
     element.getElementsByClassName('ogsongname')[0].innerText=songs[i].songName;
 })



//////// handling master play pause button //////////

masterplay.addEventListener('click', ()=>{

    // two cases arise if somg is paused

    if(audioElement.paused || audioElement.currentTime<=0){
          audioElement.play();
          masterplay.classList.remove('fa-play-circle');
          masterplay.classList.add('fa-pause-circle');
          document.body.style.backgroundImage = "url('bulbbg.gif')";
    }else{
        audioElement.pause();
          masterplay.classList.add('fa-play-circle');
          masterplay.classList.remove('fa-pause-circle');
          document.body.style.backgroundImage = "none";
          document.body.style.backgroundColor = "black";
    }

})

///// updatin with time--> progressbar

audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate')
    progress =(audioElement.currentTime/audioElement.duration)*100;
    progressbar.value=progress;
    // console.log(progress);
})


progressbar.addEventListener('change', ()=>{
    audioElement.currentTime=((progressbar.value * audioElement.duration)/100);
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('playbuttoneach')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}


Array.from(document.getElementsByClassName('playbuttoneach')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        document.body.style.backgroundImage = "url('bulbbg.gif')";
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/song${songIndex+1}.mp3`;
        // masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        // gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})



document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song/song${songIndex+1}.mp3`;
    // masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song/song${songIndex+1}.mp3`;
    // masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

//listen to events

// document.addEventListener()




// song playing separately


// audioElement.play();