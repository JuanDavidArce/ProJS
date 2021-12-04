
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


      const video = document.querySelector('video');
      const player = new MediaPlayer({element:video });

      const button = document.querySelector('button');
      button.onclick = () => player.togglePlay();