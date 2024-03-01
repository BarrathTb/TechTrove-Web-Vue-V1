<template>
  <div>
    <!-- Large screens Hero Section -->
    <div class="container-fluid d-none d-md-block hero-image bg-primary">
      <div class="row hero-text pt-5">
        <div class="col-lg-12 text-left text-light mx-auto">
          <div class="row">
            <div class="d-flex align-items-center">
              <h1 class="display-4 pt-3 mr-auto">
                <!-- mr-auto will push the arrow to the right -->
                Welcome to Our Store!
              </h1>
              <div
                id="scrollDownArrow"
                class="arrow"
                @click="scrollToProductCarousel"
                style="cursor: pointer; padding-left: 20px"
              >
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
  methods: {
    // ...Your existing methods...

    scrollToProductCarousel() {
      const carouselElement = document.getElementById('productCarousel')
      if (carouselElement) {
        carouselElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
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
  height: 82vh;
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
</style>
