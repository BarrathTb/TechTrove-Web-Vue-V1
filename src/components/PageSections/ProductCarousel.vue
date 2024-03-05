<template>
  <div class="pb-5">
    <div
      id="productCarousel"
      class="carousel slide align-items-center mx-3"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          v-for="(group, index) in groupedProducts"
          :key="index"
          :class="['carousel-item', { active: index === 0 }]"
        >
          <div class="row g-3 mb-2 mt-2 justify-content-center">
            <ProductCard
              v-for="product in group"
              :key="product.id"
              :product="product"
              @view-details="(product) => handleViewDetails(product)"
            ></ProductCard>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#productCarousel" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a class="carousel-control-next" href="#productCarousel" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  name: 'ProductCarousel',
  components: {
    ProductCard
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {
    groupedProducts() {
      // Define the group size based on the screen width.
      const groupSize = window.innerWidth < 768 ? 1 : 3

      const groups = []
      for (let i = 0; i < this.products.length; i += groupSize) {
        groups.push(this.products.slice(i, i + groupSize))
      }
      return groups
    }
  },

  methods: {
    handleViewDetails(product) {
      this.$emit('view-details', product)

      console.log(product)
    },
    onResize() {
      this.groupSize = window.innerWidth < 768 ? 1 : 3
    }
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>
