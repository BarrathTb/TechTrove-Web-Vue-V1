<template>
  <div>
    <!-- Large screens Hero Section -->
    <div class="container-fluid d-none d-md-block hero-image bg-primary">
      <div class="row hero-text pt-5">
        <div class="col-lg-12 text-left text-light mx-auto">
          <h1 class="display-4 pt-3">Welcome to Our Store!</h1>
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
  name: 'HeroSection'
}
</script>

<style scoped>
.hero-image {
  background-image:
    linear-gradient(to top, #161616, rgba(0, 128, 128, 0)),
    /* Replace #007bff with your primary color */
      url('/images/ek-fluid-gaming-digital-reef-art-1.webp');
  background-size: cover;
  position: relative;
  width: 100vw;
  height: 80vh;
}
</style>
