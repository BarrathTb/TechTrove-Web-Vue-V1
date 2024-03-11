<!-- @format -->

<template>
  <div class="container-fluid bg-primary welcome-vid">
    <div class="bg-primary justify-content-center" id="welcome-section">
      <WelcomeBanner />
      <div class="video-container">
        <div id="player"></div>
      </div>
    </div>
    <SearchBar />
  </div>
</template>
<script>
import SearchBar from './SearchBar.vue'
import WelcomeBanner from './WelcomeBanner.vue'

export default {
  components: {
    WelcomeBanner,
    SearchBar
  },
  data() {
    return {
      player: null, // We will store our player in here
      loopStart: 6,
      loopEnd: 11.5
    }
  },
  mounted() {
    this.loadYouTubeAPI()
  },
  methods: {
    // This method loads the IFrame Player API code asynchronously.
    loadYouTubeAPI() {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

      // Save the global callback
      window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady
    },
    // This function creates an <iframe> (and YouTube player) after the API code downloads.
    onYouTubeIframeAPIReady() {
      this.player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: 'o6HJVBg1lNg',
        playerVars: {
          autoplay: 1,
          mute: 1,
          enablejsapi: 1,
          rel: 0,
          controls: 0, // Hides the player controls
          showinfo: 0, // Deprecated but was used to hide video info
          modestbranding: 1, // Prevent the YouTube logo from showing on the control bar
          start: this.loopStart,
          loop: 1, // Enable looping
          playlist: 'o6HJVBg1lNg' // Required for looping; use the same video ID
        },
        events: {
          onReady: this.onPlayerReady,
          onStateChange: this.onPlayerStateChange
        }
      })
    },
    onPlayerReady(event) {
      event.target.playVideo()
      clearInterval(this.checkTimeInterval)
      this.checkTimeInterval = setInterval(() => {
        const currentTime = this.player.getCurrentTime()
        if (currentTime >= this.loopEnd) {
          this.player.seekTo(this.loopStart)
        }
      }, 1000)
    },
    // The API calls this function when the player's state changes.
    onPlayerStateChange(event) {
      // Check if the player is playing and if the current time has reached loopEnd
      if (event.data === YT.PlayerState.PLAYING) {
        const currentTime = event.target.getCurrentTime()
        if (currentTime >= this.loopEnd) {
          // Seek to the starting point
          this.player.seekTo(this.loopStart)
        }
      }
    }
  },
  beforeUnmount() {
    // Clean up and remove the event listener
    if (this.player && this.player.destroy) {
      this.player.destroy()
    }
  }
}
</script>

<style scoped>
/* // insert background promo video with gradient overlay */
.video-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
}

/* You may want to tweak these styles depending on your needs */
.video-container iframe {
  /* Make the video stretch to cover the container */
  width: 100vw;
  height: 100vh;

  /* This is important for maintaining aspect ratio while covering the entire container */
  min-width: 100%;
  min-height: 100%;

  /* Positioning the video */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* Ensure it's behind content */
  z-index: -1;
}

/* Welcome Section Styles */
#welcome-section {
  /* Your styles for welcome section */
  position: relative;
  z-index: 1; /* Ensures that the content is over the video */
  height: 60vh;
  top: 20;
  /* Fallback if video does not load */
}
</style>
