export const loadSong = () => {
    const audio = document.getElementsByClassName("audio")[0]
    const playBtn = document.getElementById('play');
    const image = document.getElementsByClassName("audio-player__image")[0]
    if(playBtn.querySelector('i.fas').classList.contains('fa-play')){
        playBtn.querySelector('i.fas').classList.remove('fa-play');
        playBtn.querySelector('i.fas').classList.add('fa-pause');
        image.classList.add('image-rotate')

        audio.play();
    }
    else{
        playBtn.querySelector('i.fas').classList.remove('fa-pause');
        playBtn.querySelector('i.fas').classList.add('fa-play');
        image.classList.remove('image-rotate')

        audio.pause();
    }
}