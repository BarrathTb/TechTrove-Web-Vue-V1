<template>
  <div>
    <!-- Large screens Hero Section -->
    <div :class="['container-fluid d-none d-md-block hero-image bg-primary', { 'hero-minimize': heroMinimized }]">
      <div v-if="rainActive" class="rain">
        <!-- render drops here using a v-for loop -->
        <div v-for="(drop, index) in drops" :key="index" class="drop" :style="{
      left: drop.left + '%',
      bottom: drop.bottom + '%',
      animationDelay: '0.' + drop.delay + 's',
      animationDuration: '0.5' + drop.duration + 's'
    }">
          <div class="stem" :style="{
      animationDelay: '0.' + drop.delay + 's',
      animationDuration: '0.5' + drop.duration + 's'
    }"></div>
          <div class="splat" :style="{
      animationDelay: '0.' + drop.delay + 's',
      animationDuration: '0.5' + drop.duration + 's'
    }"></div>
        </div>
      </div>
      <div class="row hero-text pt-5">
        <div class="col-lg-12 text-left text-light mx-auto">
          <div class="row">
            <div class="d-flex align-items-center">
              <h1 :class="{ 'rainbow-text-animate': animateText }" class="display-4 pt-3 mr-auto">
                <!-- mr-auto will push the arrow to the right -->
                Welcome to Our Store!
              </h1>
              <div id="scrollDownArrow" class="arrow" @click="scrollToProductCarousel"
                style="cursor: pointer; padding-left: 20px">
                &#8595;
              </div>
            </div>
          </div>

          <p class="lead">Check out our latest collection below.</p>
        </div>
      </div>
    </div>

    <!-- Small screens Hero Section -->
    <div class="container-fluid d-md-none d-sm-flex hero-image-sm bg-primary">
      <div class="row hero-text-sm">
        <div class="col-12 text-light mx-auto">
          <h4>Welcome to Our Store!</h4>
          <p class="lead">Check out our latest collection below.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HeroSection',
    data() {
      return {
        heroMinimized: false,
        animateText: false,
        rainActive: false,
        drops: [],
      };
    },
    methods: {
      scrollToProductCarousel() {
        const carouselElement = document.getElementById('productCarousel');
        if (carouselElement) {
          carouselElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      },
      makeItRain() {
        let increment = 0;
        let newDrops = [];

        while (increment < 100) {
          let randoHundo = Math.floor(Math.random() * 98) + 1;
          let randoFiver = Math.floor(Math.random() * 4) + 2;
          increment += randoFiver;

          newDrops.push({
            left: increment,
            bottom: randoFiver + randoFiver - 1 + 100,
            delay: randoHundo,
            duration: randoHundo
          });
        }

        this.drops = newDrops;
      },
    },
    mounted() {
      setTimeout(() => {
        // After 20 seconds, update state to apply animations
        this.heroMinimized = true;
        this.animateText = true;
        this.rainActive = true;
        this.makeItRain();
      }, 3000); // 20000 milliseconds = 20 seconds
    }
  }

</script>

<style scoped>
  .hero-image {
    background-image: linear-gradient(to top, #161616, rgba(0, 128, 128, 0)),
      url('/TechTrove-Web-Vue-V1/images/ek-fluid-gaming-digital-reef-art-1.webp');
    background-size: cover;
    position: relative;
    /* This is crucial for positioning .rain */
    width: 100vw;
    height: 82vh;
    transition: height 2s;
    overflow: hidden;
    /* Prevents rain from spilling out */
  }

  .hero-text {
    z-index: 200;
  }

  /* .rain styles here */
  .rain {
    position: absolute;
    top: 0;
    /* These four lines ensure .rain covers only the .hero-image */
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    /* Ensure this is above the background but below the text */
  }

  .arrow {
    font-size: 36px;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {

    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }

    40% {
      transform: translateY(-30px);
    }

    60% {
      transform: translateY(-15px);
    }
  }

  @keyframes reduceSize {
    to {

      background:
        linear-gradient(to bottom, #161616, rgba(0, 128, 128, 0)),
        url('/images/ek-fluid-gaming-digital-reef-art-1.webp') no-repeat bottom center;
      background-size: cover;
      position: relative;
      width: 100vw;
      height: 25vh;
    }
  }

  /* @keyframes slideGradient {
    0% {
      background-position: 100% center;
    }

    100% {
      background-position: 0% center;
    }
  }

  .rainbow-text-animate {
    background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet, indigo, blue, green, yellow, orange, red);
    background-size: 400% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: slideGradient 15s linear infinite;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  } */

  .rainbow-text-animate {
    /* The following properties will clip the background to the text */
    background: radial-gradient(circle closest-side at center, red, orange, yellow, green, blue, indigo, violet);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: radialGradientExpand 15s infinite linear;

    -webkit-text-fill-color: transparent;
    display: inline-block;
  }

  @keyframes radialGradientExpand {
    0% {
      background-size: 0% 0%;
    }

    100% {
      background-size: 200% 200%;
    }
  }


  .hero-minimize {
    animation: reduceSize 3s forwards;

  }

  .hero-image {
    transition: height 2s;

  }

  .hero-text h1,
  .hero-text-sm h4 {
    transition: color 10s;
    z-index: 20;
  }



  .drop {
    position: absolute;
    width: 15px;
    height: 120px;
    animation: drop 0.5s linear infinite;
  }

  @keyframes drop {
    0% {
      transform: translateY(0vh);
    }

    75% {
      transform: translateY(30vh);
    }

    100% {
      transform: translateY(30vh);
    }
  }

  .stem {
    width: 1px;
    height: 60%;
    margin-left: 7px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.25));
    animation: stem 0.5s linear infinite;
  }

  @keyframes stem {

    0%,
    65% {
      opacity: 1;
    }

    75%,
    100% {
      opacity: 0;
    }
  }

  .splat {
    width: 15px;
    height: 10px;
    border-top: 2px dotted rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    transform: scale(0);
    animation: splat 0.5s linear infinite;
  }

  @keyframes splat {

    0%,
    80% {
      opacity: 1;
      transform: scale(0);
    }

    90% {
      opacity: 0.5;
      transform: scale(1);
    }

    100% {
      opacity: 0;
      transform: scale(1.5);
    }
  }

</style>
