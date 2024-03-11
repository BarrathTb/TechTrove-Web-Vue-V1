<template>
  <router-view>
    <WelcomeHeader
      :products="allProducts"
      @search="performSearch"
      @toggle-login-modal="toggleLoginModal"
    />
    <WelcomeSection />
    <HowItWorksAccordion title="How It Works" heading-id="headingOne" collapse-id="collapseOne">
      <div class="row g-3 align-items-center mb-4 bg-primary p-4 justify-content-between">
        <info-card
          class="flex-grow text-left"
          title="Step 1"
          image-src="/images/tech-entry-3.png"
          description="Search for the computer parts you need. Find the best deals and quality products."
        ></info-card>

        <info-card
          class="flex-grow"
          title="Step 2"
          image-src="/images/tech-entry-4.png"
          description="Click on a product card for more details. Add products to your cart, and customize your order."
        ></info-card>

        <info-card
          class="flex-grow"
          title="Step 3"
          image-src="/images/tech-entry-5.png"
          description="Review your cart and make any changes, proceed to checkout when ready. Don't forget to try the pc builder to make your dream pc come to life."
        ></info-card>
      </div>
    </HowItWorksAccordion>
    <HowItWorksAccordion
      title="Join the TechTrove Team"
      headingId="headingTwo"
      collapseId="collapseTwo"
    >
      <div class="row g-3 align-items-center mb-4 bg-primary p-4 justify-content-between]">
        <info-card
          class="flex-grow"
          title="As a Customer"
          image-src="/images/tech-entry-6.png"
          description="Provide assistance to other customers with product review and recommendations. Earn rewards for your contributions to the community. Contribute to the blogs for add ons to the tech community."
        ></info-card>

        <info-card
          class="flex-grow"
          title="As a Supplier"
          image-src="/images/tech-entry-7.png"
          description="TechTrove is a community-driven platform that helps you find the best deals and quality products for every build. As a supplier, you can create a vendor profile to showcase your products and services. Reach out to customers directly and gain new business opportunities."
        ></info-card>
        <info-card
          class="flex-grow"
          title="As a Colleague"
          image-src="/images/tech-entry-7.png"
          description="Join a team of experts dedicated to providing the best parts and service."
        ></info-card>

        <!-- More differently styled info-cards can be added here -->
      </div>
    </HowItWorksAccordion>
    <PromotionalCard class="bg-primary" />
    <LoginModal v-model="loginVisible" />
  </router-view>
  <AppFooter />
</template>

<script>
import AppFooter from '@/components/PageSections/AppFooter.vue'
import HowItWorksAccordion from '@/components/PageSections/HowItWorksAccordion.vue'
import InfoCard from '@/components/PageSections/InfoCard.vue'
import PromotionalCard from '@/components/PageSections/PromotionalCard.vue'
import WelcomeSection from '@/components/PageSections/WelcomeSection.vue'
import LoginModal from '@/components/modals/LoginModal.vue'
import WelcomeHeader from '@/components/siteNavs/WelcomeHeader.vue'
import { products } from '@/data.js'

export default {
  components: {
    WelcomeHeader,
    HowItWorksAccordion,
    PromotionalCard,
    AppFooter,
    InfoCard,
    LoginModal,
    WelcomeSection
  },
  data() {
    return {
      collapse: false,
      loginVisible: false,
      detailsVisible: false,
      selectedProduct: null,
      products: products,
      searchQuery: '',
      uniqueCategories: this.calculateUniqueCategories(products),
      uniqueBrands: this.calculateUniqueBrands(products),
      allProducts: products,
      filteredProducts: products
    }
  },

  methods: {
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

    toggleLoginModal() {
      this.loginVisible = !this.Visible
    },
    toggleCollapse() {
      this.collapse = !this.collapse
    }
  }
}
</script>
