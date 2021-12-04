
class MediaPlayer {
    constructor ({config}){
      this.media = config.element;
      this.plugins = config.plugins || []
      this._initPlugins();

    }
    _initPlugins(){
        this.plugins.forEach(plugin => {
            plugin.run(this)
            
        });
    }

    play (){
      this.media.play();
    }

    pause(){
      this.media.pause();
    }

    mute(){
        this.media.muted=true;
    }
    unmute(){
        this.media.muted=false;
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