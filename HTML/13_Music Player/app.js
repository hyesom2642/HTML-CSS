const musicPlayItmes = document.querySelectorAll('.music-player-item');

musicPlayItmes.forEach(function(item){
  item.isPlaying = false;
  item.audio = item.querySelector('audio');

  item.addEventListener('click', function(){
    if(this.isPlaying === true) {
      item.audio.pause();
      item.audio.currentTime = 0;
    } else {
      item.audio.play();
    }

    item.isPlaying = !item.isPlaying;
  })
});