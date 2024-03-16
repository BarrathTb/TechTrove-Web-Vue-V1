<template>
  <div class="builder-zone-content card text-light bg-secondary mb-4">

    <div class="builder-zone-video justify-content-center align-items-center">
      <iframe width="100%" height="415" :src="videoSrc" title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>

    <div class="builder-zone-power p-4 text-light">
      <h2 class="tube-text-aqua">{{ powerTitle }}</h2>
      <p>{{ powerDescription }}</p>
    </div>

    <!-- Parts -->
    <div class="builder-zone-parts p-4 text-light">
      <h2 class="tube-text-aqua">{{ partsTitle }}</h2>
      <ul>
        <li v-for="(part, index) in partsList" :key="index">{{ part }}</li>
      </ul>
    </div>

    <!-- Estimated Price -->
    <div class="builder-zone-price p-4 text-light">
      <h2 class="tube-text-aqua">{{ priceTitle }}</h2>
      <p>{{ priceDescription }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BuilderCard',
    props: {
      videoSrc: String,
      powerTitle: String,
      powerDescription: String,
      partsTitle: String,
      partsList: Array,
      priceTitle: String,
      priceDescription: String
    }
  }
</script>

<style scoped>

  .builder-zone-content p,
  li {
    font-size: 18px;
  }
</style>
