<template>
  <HeaderComponent
    :products="allProducts"
    @search="performSearch"
    @load-product-cards="filterProducts"
    @toggle-cart="toggleCartVisibility"
  />
  <ShoppingCart :products="cartItems" v-show="cartVisible" />
  <ProductDetailModal
    v-if="selectedProduct"
    :product="selectedProduct"
    v-show="detailsVisible"
    @add-to-cart="addToCart"
  />
  <LoginModal v-show="loginModalVisible" />
  <HeroImage />

  <ProductCarousel :products="filteredProducts" @view-details="handleViewDetails" />

  <AppFooter />
</template>

<script>
import HeroImage from './components/PageSections/HeroImage.vue'
import ShoppingCart from './components/PageSections/ShoppingCart.vue'
import ProductDetailModal from './components/modals/ProductDetailModal.vue'
// import ProductCard from './components/PageSections/ProductCard.vue'
import AppFooter from './components/PageSections/AppFooter.vue'
import ProductCarousel from './components/PageSections/ProductCarousel.vue'
import LoginModal from './components/modals/LoginModal.vue'
import HeaderComponent from './components/siteNavs/HeaderComponent.vue'
import { products } from './data.js'

export default {
  components: {
    HeaderComponent,
    ShoppingCart,
    ProductDetailModal,
    LoginModal,
    // ProductCard,
    AppFooter,
    ProductCarousel,
    HeroImage
  },
  data() {
    return {
      cartItems: [],
      detailsVisible: false,
      selectedProduct: null,
      cartVisible: false,
      products: products, // Assuming `products` is imported above
      searchQuery: '', // Initialize your search query
      uniqueCategories: this.calculateUniqueCategories(products),
      uniqueBrands: this.calculateUniqueBrands(products),
      allProducts: products,
      filteredProducts: products // Start with all products
    }
  },

  methods: {
    addToCart(payload) {
      const existingItem = this.cartItems.find((item) => item.product.id === payload.product.id)
      if (existingItem) {
        existingItem.quantity += payload.quantity
      } else {
        this.cartItems.push({
          product: payload.product,
          quantity: payload.quantity
        })
      }
    },
    calculateUniqueCategories(products) {
      // Logic to get unique categories from products.
      return [...new Set(products.map((p) => p.category))]
    },
    calculateUniqueBrands(products) {
      // Logic to get unique brands from products.
      return [...new Set(products.map((p) => p.brand))]
    },
    filterProducts(selectedItem) {
      if (this.uniqueCategories.includes(selectedItem)) {
        this.filteredProducts = this.allProducts.filter(
          (product) => product.category === selectedItem
        )
        return selectedItem
      } else if (this.uniqueBrands.includes(selectedItem)) {
        this.filteredProducts = this.allProducts.filter((product) => product.brand === selectedItem)
      }
      return selectedItem
    },
    performSearch(query) {
      // Logic to filter products based on a search query
      this.searchQuery = query
      this.filteredProducts = this.allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          product.brand.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
      return [products, this.searchQuery]
    },
    toggleCartVisibility() {
      this.cartVisible = !this.cartVisible
    },
    toggleDetailVisibility() {
      this.detailsVisible = !this.detailsVisible
    },

    handleViewDetails(product) {
      this.selectedProduct = product

      console.log(this.selectedProduct)
    },

    toggleLoginModalVisibility() {
      this.loginModalVisible = !this.loginModalVisible
    }
  }
}
</script>
