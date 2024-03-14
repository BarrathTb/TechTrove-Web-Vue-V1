<template>
  <section class="builder-zone bg-primary mb-2">
    <div class="container">
      <!-- Title -->
      <h1 class="builder-zone-title mt-2 text-light-bold">Custom PC Builds</h1>
      <BuilderCard />
    </div>
  </section>
</template>

<script>
import BuilderCard from './BuilderCard.vue'
export default {
  components: {
    BuilderCard
  },
  name: 'BuilderZone',
  props: {
    title: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.builder-zone-title {
  text-align: center;
  margin-bottom: 20px;
}

.builder-zone-video {
  margin-bottom: 20px;
  justify-content: center;
  width: 100%;
}

/* Additional styles go here */
</style>
