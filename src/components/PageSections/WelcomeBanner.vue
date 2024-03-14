<!-- @format -->

<template>
  <div class="row align-items-center  rounded px-4 py-4">
    <div class="col-auto">

    </div>
    <div class="col-sm-12 col-md-8 col-lg-6 banner-text">
      <h1 class="ms-3 text-light banner-text">High Performance Parts</h1>

      <h1 class="ms-3 text-light banner-text">at Tech Trove!</h1>
      <div class="tubes">
        <h4 class="ms-3 text-light tube-text">Customize Everything.</h4>
      </div>

      <button @click="toStore" class="ms-3 btn btn-success btn-lg banner-button ">Let's Shop ></button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WelcomeBanner',
    methods: {
      toStore() {
        this.$router.push('/Home')
      }
    }
  }
</script>

<style scoped>
  /* .entry-image {
    width: calc(12vw * 0.75);
    height: calc(12vw * 0.75);
    margin: 0.1rem;
  } */

  .banner-text {
    font-size: calc(3vw * 0.8);
    font-weight: 600;
    color: #fff;
  }

  /* .banner-text-2 {
    font-size: calc(2vw * 0.8);
    font-weight: 600;
    color: #fff;
  } */

  @media screen and (max-width: 568px) {
    .banner-text {
      font-size: calc(6vw * 0.8);
      font-weight: 600;
      color: #fff;
    }

    .tube-text {
      font-size: calc(4vw * 0.8);
      font-weight: 600;

    }

    .banner-button {
      font-size: calc(3vw * 0.7);
      font-weight: 600;
      color: #fff;
    }
  }

  @font-face {
    font-family: 'Neon Tubes';
    src: url("https://bitbucket.org/termyanen/webfonts/raw/77e439b11a11c4237b8cdc6466cea4cb4039c616/neontubes/neontubes-webfont.eot");
    src: url("https://bitbucket.org/termyanen/webfonts/raw/77e439b11a11c4237b8cdc6466cea4cb4039c616/neontubes/neontubes-webfont.eot?#iefix") format("embedded-opentype"), url("https://bitbucket.org/termyanen/webfonts/raw/77e439b11a11c4237b8cdc6466cea4cb4039c616/neontubes/neontubes-webfont.woff2") format("woff2"), url("https://bitbucket.org/termyanen/webfonts/raw/77e439b11a11c4237b8cdc6466cea4cb4039c616/neontubes/neontubes-webfont.woff") format("woff"), url("https://bitbucket.org/termyanen/webfonts/raw/77e439b11a11c4237b8cdc6466cea4cb4039c616/neontubes/neontubes-webfont.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }



  /* .tubes {
    font-family: 'Neon Tubes';
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: #222;
    background-image: repeating-linear-gradient(to bottom,
        transparent 7px,
        rgba(0, 0, 0, 0.8) 9px,
        rgba(0, 0, 0, 0.8) 13px,
        transparent 13px);
  } */

  .tube-text {
    font-size: 2vw;
    font-weight: 100;
    color: #d4eaff;
    text-shadow: 0 0 0 transparent, 0 0 10px #0ee636, 0 0 20px rgba(38, 149, 255, 0.5), 0 0 40px #0ee636, 0 0 100px #0ee636, 0 0 200px #0ee636, 0 0 300px #0ee636, 0 0 500px #0ee636;
    animation: blink 4s infinite alternate;
  }

  @keyframes blink {
    50% {
      opacity: 1;
    }

    52% {
      opacity: 0.8;
    }

    53% {
      opacity: 1;
    }

    55% {
      opacity: 0.2;
    }

    56% {
      opacity: 1;
    }
  }





  .da-fade {
    background: linear-gradient(180deg, #161616 0%, #131313 25%, #111111 50%, #0f0f0f 75%, black 100%);
  }
</style>
