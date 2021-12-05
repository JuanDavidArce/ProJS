
class MediaPlayer {
    constructor ({config}){
      this.media = config.element;
      this.plugins = config.plugins || []
      this._initPlugins();

    }
    _initPlugins(){
        const player = {
          play: () =>this.play(),
          pause: ()=>this.pause(),
          media: this.media,
          get muted(){
            return this.media.muted
          },

          set muted(value){
            this.media.muted=value;
          }
        };

        this.plugins.forEach(plugin => {
            plugin.run(player)
            
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