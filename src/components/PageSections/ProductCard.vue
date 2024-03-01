<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3" :data-product-id="product.id">
    <div class="card product-card h-100 bg-secondary d-flex flex-column">
      <div class="card-img-contain bg-white card p-4">
        <img :src="product.image" class="card-img-top img-fluid" :alt="product.name" />
      </div>
      <div class="card-body text-light flex-grow-1 d-flex flex-column justify-content-between pb-1">
        <h5 class="card-title text-center font-size-md">{{ product.name }}</h5>
        <p class="card-text text-left font-size-sm">{{ product.description }}</p>
        <button
          type="button"
          class="btn btn-success-2 view-product-details"
          @click="handleViewDetails"
        >
          View Product Details
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',

  props: {
    product: {
      type: Object,
      required: true
    },
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    modelValue(newValue) {
      this.detailsVisible = newValue
    }
  },
  emits: ['view-details'],
  methods: {
    handleViewDetails() {
      this.$emit('view-details', this.product)
    }
  }
}
</script>
