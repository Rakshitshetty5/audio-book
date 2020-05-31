
export const loadSong = () => {
    const audio = document.getElementsByClassName("audio")[0]
    const playBtn = document.getElementById('play');
    const progress = document.getElementById('progress');
    const progressContainer = document.getElementById('progress-container');
    const image = document.getElementsByClassName("audio-player__image")[0]
    
    const updateProgress = (e) => {
        const { duration, currentTime } = e.srcElement;
        const progressPercent = (currentTime / duration) * 90;
        progress.style.width = `${progressPercent}%`
    }
    
    const setProgress = (e) => {
        const width = progressContainer.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;
        audio.currentTime = (clickX / width) * duration;
    }
    
    
    if(playBtn.querySelector('i.fas').classList.contains('fa-play')){
        playBtn.querySelector('i.fas').classList.remove('fa-play');
        playBtn.querySelector('i.fas').classList.add('fa-pause');
        image.classList.add('image-rotate')
        
        audio.play();
        audio.addEventListener('timeupdate', updateProgress);
        progressContainer.addEventListener('click', setProgress);
    }
    else{
        playBtn.querySelector('i.fas').classList.remove('fa-pause');
        playBtn.querySelector('i.fas').classList.add('fa-play');
        image.classList.remove('image-rotate')

        audio.pause();
        progressContainer.addEventListener('click', setProgress);

    }
}