<template>
  <router-view>
    <HeaderComponent
      :products="allProducts"
      @search="performSearch"
      @load-product-cards="filterProducts"
      @toggle-cart="toggleCartVisibility"
      @toggle-login-modal="toggleLoginModal"
      @toggle-blog="toggleBlogVisibility"
      @toggle-build="toggleBuildVisibility"
      @toggle-support="toggleSupportVisibility"
      :cart-item-count="cartItemCount"
      @update-cart-count="updateCartItemCount"
    />
    <ShoppingCart
      class="shopping-cart"
      :cart-items="cartItems"
      v-show="cartVisible"
      @update-cart="updateCart"
      @edit-item="editIteminCart"
    />
    <BlogSection v-show="blogVisible" />
    <SupportSection v-show="isSupportVisible" />
    <PcBuilder
      :products="allProducts"
      v-show="buildVisible"
      @add-to-cart="addToCart"
      @toggle-build="closeBuilder"
    />
    <ProductDetailModal
      :product="selectedProduct"
      :initialQuantity="selectedProductQuantity"
      :isEditMode="isEditModal"
      v-model="detailsVisible"
      @add-to-cart="addToCart"
      @update-cart-item="updateCartItem"
    />
    <LoginModal v-model="isModalVisible" />
    <HeroImage />

    <ProductCarousel :products="filteredProducts" @view-details="handleViewDetails" />
  </router-view>
  <AppFooter />
</template>

<script>
import AppFooter from '@/components/PageSections/AppFooter.vue'
import BlogSection from '@/components/PageSections/BlogSection.vue'
import HeroImage from '@/components/PageSections/HeroImage.vue'
import PcBuilder from '@/components/PageSections/PcBuilder.vue'
import ProductCarousel from '@/components/PageSections/ProductCarousel.vue'
import ShoppingCart from '@/components/PageSections/ShoppingCart.vue'
import SupportSection from '@/components/PageSections/SupportSection.vue'
import LoginModal from '@/components/modals/LoginModal.vue'
import ProductDetailModal from '@/components/modals/ProductDetailModal.vue'
import HeaderComponent from '@/components/siteNavs/HeaderComponent.vue'
import { products } from '@/data.js'

export default {
  components: {
    HeaderComponent,
    ShoppingCart,
    BlogSection,
    SupportSection,
    PcBuilder,
    ProductDetailModal,
    LoginModal,
    // ProductCard,
    AppFooter,
    ProductCarousel,
    HeroImage
  },
  data() {
    return {
      selectedProductQuantity: 0,
      isEditModal: false,
      cartItemCount: 0,
      cartItems: [],
      isSupportVisible: false,
      quantity: 1,
      isModalVisible: false,
      detailsVisible: false,
      selectedProduct: null,
      cartVisible: false,
      blogVisible: false,
      buildVisible: false,
      products: products,
      searchQuery: '',
      uniqueCategories: this.calculateUniqueCategories(products),
      uniqueBrands: this.calculateUniqueBrands(products),
      allProducts: products,
      filteredProducts: products
    }
  },
  watch: {
    cartItems: {
      handler(newVal) {
        this.updateCartItemCount()
      },
      deep: true
    }
  },

  methods: {
    addToCart(item) {
      const product = item.product ? item.product : item
      const quantity = item.quantity ? item.quantity : 1

      const existingItemIndex = this.cartItems.findIndex((cartItem) => cartItem.id === product.id)
      console.log(existingItemIndex)

      if (existingItemIndex !== -1) {
        this.cartItems[existingItemIndex].quantity += quantity
      } else {
        this.cartItems.push({ ...product, quantity: quantity })
      }
      console.log(this.cartItems)
      this.cartVisible = true
      this.scrollToCart()
    },
    updateCart(updatedCartItems) {
      this.cartItems = updatedCartItems
      this.updateCartItemCount()
    },
    editIteminCart(index) {
      const item = this.cartItems[index]
      this.selectedProduct = item.product || item
      this.selectedProductQuantity = item.quantity || 1
      this.isEditModal = true
      this.detailsVisible = true
    },
    updateCartItem(item) {
      const index = this.cartItems.findIndex((cartItem) => cartItem.id === item.product.id)

      if (index >= 0) {
        this.cartItems[index].quantity = item.quantity
        this.updateCart(this.cartItems)
      }

      this.detailsVisible = false // Close the modal after updating
      this.isEditModal = false // Reset the edit flag
    },

    updateCartItemCount() {
      this.cartItemCount = this.cartItems.reduce((total, item) => total + item.quantity, 0)
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
      if (typeof query !== 'string' || !query.trim()) {
        return { products: this.allProducts, searchQuery: '' }
      }

      this.searchQuery = query.trim().toLowerCase()

      try {
        this.filteredProducts = this.allProducts.filter((product) => {
          return (
            (product.name && product.name.toLowerCase().includes(this.searchQuery)) ||
            (product.description && product.description.toLowerCase().includes(this.searchQuery)) ||
            (product.brand && product.brand.toLowerCase().includes(this.searchQuery)) ||
            (product.category && product.category.toLowerCase().includes(this.searchQuery))
          )
        })

        return { products: this.filteredProducts, searchQuery: this.searchQuery }
      } catch (error) {
        console.error('Error occurred during search:', error)
        return { products: this.allProducts, searchQuery: this.searchQuery }
      }
    },

    toggleCartVisibility() {
      this.cartVisible = !this.cartVisible
    },
    toggleLoginModal() {
      this.isModalVisible = !this.isModalVisible
    },
    toggleBlogVisibility() {
      this.blogVisible = !this.blogVisible
    },
    toggleBuildVisibility() {
      this.buildVisible = !this.buildVisible
    },
    closeBuilder() {
      this.buildVisible = !this.buildVisible
    },
    toggleSupportVisibility() {
      this.isSupportVisible = !this.isSupportVisible
    },

    handleViewDetails(product) {
      this.selectedProduct = product
      this.detailsVisible = true
      console.log(this.selectedProduct)
    },
    scrollToCart() {
      const cartElement = document.getElementsByClassName('shopping-cart')[0]
      if (cartElement) {
        cartElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>