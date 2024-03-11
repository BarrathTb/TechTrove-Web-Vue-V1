<!-- @format -->

<template>
  <div class="col-lg-4 col-md-6 col-sm-12">
    <div class="card product-card h-100 bg-secondary d-flex flex-column">
      <a href="#" class="product-detail mt-2 me-2 ms-auto product-detail-icon"> </a>
      <img :src="imageSrc" class="card-img-top img-fluid" alt="display tech image" />
      <div class="card-body text-light flex-grow-1 d-flex flex-column justify-content-between pb-1">
        <h5 class="card-title text-center font-size-md">{{ title }}</h5>
        <p class="card-text text-left font-size-sm">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoCard',
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
/* Scoped Styles for InfoCard */
.bg-secondary {
  /* Custom background color for the card */
  background-color: #6c757d; /* Example: dark gray */
}

.card-title {
  /* Style for the card title */
}

.card-text {
  /* Style for the card text */
}

.product-detail-icon {
  /* Style for the product detail icon/link */
}
</style>
