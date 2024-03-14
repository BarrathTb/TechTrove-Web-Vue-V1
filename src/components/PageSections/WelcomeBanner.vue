<!-- @format -->

<template>
  <div class="row align-items-center  rounded px-4 py-4">
    <div class="col-auto">

    </div>
    <div class="col-sm-12 col-md-8 col-lg-6 banner-text">
      <h1 class="ms-3 text-light banner-text">High Performance Parts</h1>

      <h1 class="ms-3 text-light banner-text">at Tech Trove!</h1>
      <h4 class="ms-3 text-light banner-text-2">Customize Everything.</h4>
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

  .banner-text-2 {
    font-size: calc(2vw * 0.8);
    font-weight: 600;
    color: #fff;
  }

  @media screen and (max-width: 568px) {
    .banner-text {
      font-size: calc(6vw * 0.8);
      font-weight: 600;
      color: #fff;
    }

    .banner-text-2 {
      font-size: calc(4vw * 0.8);
      font-weight: 600;
      color: #fff;
    }

    .banner-button {
      font-size: calc(3vw * 0.7);
      font-weight: 600;
      color: #fff;
    }

  }


  .da-fade {
    background: linear-gradient(180deg, #161616 0%, #131313 25%, #111111 50%, #0f0f0f 75%, black 100%);
  }
</style>
