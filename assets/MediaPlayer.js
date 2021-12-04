
class MediaPlayer {
    constructor ({element}){
      this.media = element;

    }

    play (){
      this.media.play();
    }

    pause(){
      this.media.pause();
    }

    togglePlay(){
      if (this.media.paused) {
          this.play();
      } else {
          this.pause();
      }
    }
}

export default MediaPlayer