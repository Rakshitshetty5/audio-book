
export const audioManipulation = () => {
    const audio = document.getElementsByClassName("audio")[0]
    const playBtn = document.getElementById('play');
    const progress = document.getElementById('progress');
    const progressContainer = document.getElementById('progress-container');
    const image = document.getElementsByClassName("audio-player__image")[0];    
    const duration = audio.duration;
    return function decide(action){
        if(action === 'forward'){
            const forward = duration/90;
            if(duration > audio.currentTime + forward){
            audio.currentTime = audio.currentTime + forward;
            }
        }
        else if(action === 'backward'){
            const backward = duration/90;
            if(audio.currentTime - backward > 0){
                audio.currentTime = audio.currentTime - backward;
            }
        }
        else if(action === 'load'){
            const updateProgress = (e) => {
                const { duration, currentTime } = e.srcElement;
                const progressPercent = (currentTime / duration) * 100;
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
    }
}
