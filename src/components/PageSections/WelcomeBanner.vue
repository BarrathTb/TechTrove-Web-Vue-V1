<!-- @format -->

<template>
  <div class="row align-items-center rounded px-4 py-4">
    <div class="col-auto">
      <!-- <img
        src="/images/tech-entry-8.png"
        alt="Entry Image for Tech Trove"
        class="img-fluid entry-image rounded"
      /> -->
    </div>
    <div class="col-6 banner-text">
      <h1 class="ms-3 text-light banner-text">High Performance Parts</h1>

      <h1 class="ms-3 text-light banner-text">at Tech Trove!</h1>
      <h4 class="ms-3 text-light">Customize Everything.</h4>
      <button @click="toStore" class="ms-3 btn btn-success btn-lg">Let's Shop ></button>
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
.entry-image {
  width: calc(12vw * 0.75);
  height: calc(12vw * 0.75);
  margin: 0.1rem;
}
.banner-text {
  font-size: calc(3vw * 0.8);
  font-weight: 600;
  color: #fff;
}
</style>
