<template>
  <VaModal ref="modal" v-model="detailsVisible" class="rounded product-detail-modal">
    <!-- The following div acts as the modal container -->
    <template #content>
      <div class="modal-lg rounded bg-primary p-4" style="border-radius: 10px">
        <div class="modal-header d-flex justify-content-end align-items-center mb-2">
          <button
            class="btn btn-outline-success p-0 m-0"
            style="text-decoration: none; background-color: transparent; border: light"
            @click="closeModal"
          >
            <i class="bi bi-x fs-4"></i>
          </button>
        </div>

        <div class="modal-body rounded justify-content-center">
          <img
            :src="product.image"
            class="img-fluid card-img-top"
            style="border-radius: 10px; margin-bottom: 20px"
            :alt="product.name"
          />
          <div class="row">
            <h5 class="col text-white">{{ product.name }}</h5>

            <div class="col-3 text-right">
              <va-checkbox v-model="isFavorite" color="customSuccess"></va-checkbox>
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
                <button
                  size="small"
                  class="rounded-circle me-2 btn btn-success-2"
                  @click="decrementQuantity"
                >
                  -
                </button>
                <va-input
                  v-model.number="quantity"
                  type="number"
                  min="1"
                  class="form-control ms-2 me-2"
                />
                <button
                  size="small"
                  class="rounded-circle ms-2 btn btn-success-2"
                  @click="incrementQuantity"
                >
                  +
                </button>
              </div>
            </div>
            <div class="col-3">
              <button class="flex-end btn btn-success-2" @click="addToCart()">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </VaModal>
</template>

<script>
import { VaCheckbox, VaInput, VaModal } from 'vuestic-ui'

export default {
  name: 'ProductDetailModal',
  components: {
    VaModal,

    VaInput,
    VaCheckbox
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  emits: ['update:modelValue', 'add-to-cart'],
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
    closeModal() {
      this.detailsVisible = false
      this.$emit('update:modelValue', false)
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
<style scoped>
.product-detail-modal {
  position: relative;
  z-index: 1000;
}
</style>
