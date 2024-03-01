<template>
  <div v-if="detailsVisible" class="modal-mask" @click.self="closeModal">
    <!-- The following div acts as the modal container -->
    <div class="modal-dialog modal-lg" role="document" @click.stop>
      <div
        class="modal-content bg-primary rounded justify-content-center p-4"
        style="border-radius: 10px"
      >
        <div class="modal-header">
          <h5 class="modal-title text-light">{{ product.name }}</h5>
          <button type="button" class="btn-close text-light" @click="closeModal">
            <span aria-hidden="true"><i class="fas fa-close white-icon"></i></span>
          </button>
        </div>
        <div class="modal-body justify-content-center">
          <img
            :src="product.image"
            class="img-fluid card-img-top"
            style="border-radius: 10px; margin-bottom: 20px"
            :alt="product.name"
          />
          <div class="row">
            <h5 class="col text-white">{{ product.name }}</h5>

            <div class="col-3 text-right">
              <input type="checkbox" v-model="isFavorite" />
              <label for="favoriteCheckbox" class="heart-checkbox"></label>
            </div>
          </div>
          <p class="text-white">{{ productFormattedPrice }}</p>
          <p class="text-white">{{ product.description }}</p>
          <hr class="bg-white" />
          <h5 class="text-white">Features</h5>
          <ul class="row list-unstyled text-light">
            <li v-for="(feature, index) in product.features" :key="index">
              {{ feature }}
            </li>
          </ul>
          <hr class="bg-white" />
          <div class="row align-items-center">
            <div class="col-6">
              <h5 class="text-white float-left">Price</h5>
            </div>
            <div class="col-6">
              <h5 class="text-white float-right">{{ productFormattedPrice }}</h5>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <div class="btn-group">
                <button class="btn btn-success-2 rounded-circle me-2" @click="decrementQuantity">
                  -
                </button>
                <input
                  type="number"
                  v-model.number="quantity"
                  min="1"
                  class="form-control ms-2 me-2"
                />
                <button class="btn btn-success-2 rounded-circle ms-2" @click="incrementQuantity">
                  +
                </button>
              </div>
            </div>
            <div class="col-3">
              <button v-if="closeModal" class="btn btn-success-2 flex-end" @click="addToCart">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetailModal',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      detailsVisible: false,
      quantity: 1,
      isFavorite: false
    }
  },
  computed: {
    productFormattedPrice() {
      return `$${parseFloat(this.product.price).toFixed(2)}`
    }
  },
  methods: {
    handleViewDetails() {
      this.detailsVisible = true
    },
    closeModal() {
      this.$emit('close-modal') // Emit an event instead of setting local state
    },

    incrementQuantity() {
      this.quantity++
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity--
      }
    },
    addToCart() {
      this.$emit('add-to-cart', { product: this.product, quantity: this.quantity })
      this.closeModal()
    }
  }
}
</script>
