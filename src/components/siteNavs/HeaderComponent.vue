<template>
  <header class="header">
    <!-- Top Bar -->
    <div class="bg-primary text-white">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid align-items-center justify-content-start">
          <!-- Search Bar -->
          <div class="d-none d-lg-flex ms-2 flex-grow-1">
            <form class="search-form w-100 d-flex">
              <input v-model="searchQuery" class="form-control search-input" type="search"
                placeholder="Search for computer parts, brands, and accessories" aria-label="Search" />
              <button class="btn btn-success ms-2" @click.prevent="performSearch($event)" type="submit">
                Search
              </button>
            </form>
          </div>

          <!-- Links -->
          <div class="d-none d-lg-flex justify-content-center flex-grow-1">
            <ul class="navbar-nav ms-auto" aria-label="Tertiary Navigation">
              <li class="nav-item mx-2">
                <a class="nav-link text-light-bold-2 text-decoration-none">Contact</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link text-light-bold-2">Message Board</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link text-light-bold-2" href="#" @click.prevent="toggleBuilderZoneVisibility">Builder
                  Zone</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link text-light-bold-2">Sale</a>
              </li>
            </ul>
          </div>

          <!-- Cart and Login Icons -->
          <div class="d-none d-lg-flex justify-content-end align-items-center flex-grow-1 pe-4">
            <button @click="toggleCartVisibility" class="nav-link border-0 bg-transparent">
              <i class="bi bi-cart fs-4 mb-2 mx-2 icon-success">
                <VaBadge v-if="cartItemCount > 0" :text="cartItemCount.toString()" overlap placement="top-end"
                  color="danger"></VaBadge>
              </i>
            </button>

            <button @click="toggleLoginModal" class="nav-link" id="login-modal">
              <i class="bi bi-person fs-4 mb-2 mx-2 icon-success"></i>
            </button>
          </div>
        </div>
      </nav>
    </div>

    <!-- Main Navbar -->
    <div class="header-main mx-auto w-100 h-100">
      <nav class="navbar bg-body-secondary bg-secondary">
        <div class="container-lg mx-auto">
          <!-- Brand Logo -->
          <!-- <router-link class="navbar-brand me-5" to="/Welcome"> -->
          <a href="/">
            <img src="/images/TechTrove-logo.png" alt="TechTrove Logo" width="250" height="53" /></a>
          <!-- </router-link> -->

          <!-- Primary Navigation Links -->
          <ul class="nav nav-tabs d-none d-lg-flex mx-2">
            <li class="nav-item left-tab border-none">
              <a class="nav-link text-light-bold main-nav-menu-item dropdown" href="#"
                id="navbarDropdownMenuLinkProducts" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                PRODUCTS
              </a>
              <ul class="dropdown-menu ms-2 my-auto border-primary" aria-labelledby="navbarDropdownMenuLinkProducts">
                <li v-for="category in uniqueCategories" :key="category">
                  <a @click="handleCategoryClick(category)" class="dropdown-item text-light-bold menu-main" href="#">{{
                category }}</a>
                </li>
              </ul>
            </li>

            <li class="nav-item left-tab border-none">
              <a class="nav-link text-light-bold main-nav-menu-item dropdown" href="#" id="navbarDropdownMenuLinkBrands"
                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                BRANDS
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkBrands">
                <li v-for="brand in uniqueBrands" :key="brand">
                  <a @click="handleBrandClick(brand)" class="dropdown-item text-light-bold menu-main" href="#">{{ brand
                    }}</a>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <a class="nav-link text-light-bold main-nav-menu-item" href="#" @click="toggleSupportVisibility">
                SUPPORT
              </a>
            </li>
            <!-- Blog Link -->
            <li class="nav-item">
              <a class="nav-link text-light-bold main-nav-menu-item" href="#" @click="toggleBlogVisibility">
                BLOG
              </a>
            </li>
            <!-- Build Link -->
            <li class="nav-item">
              <a class="nav-link text-light-bold main-nav-menu-item" href="#" @click="toggleBuildVisibility">
                BUILD
              </a>
            </li>
          </ul>

          <!-- Toggler for Mobile View -->
          <button class="d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar">
            <i class="bi bi-menu"></i>
          </button>

          <!-- Off Canvas Content -->
          <div id="offcanvasNavbar" title="Menu" right></div>
        </div>
      </nav>
    </div>
    <LoginModal v-model="isModalVisible" @toggle-login-modal="toggleLoginModal" />
  </header>
</template>

<script>
  import LoginModal from '../modals/LoginModal.vue'
  export default {
    components: {
      LoginModal
    },
    name: 'HeaderComponent',
    props: {
      cartItemCount: {
        type: Number,
        required: true
      },
      products: {
        type: Array,
        required: true
      }
    },

    data() {
      return {
        searchQuery: '',
        isModalVisible: false
      }
    },
    methods: {
      loadProductCards(selectedItem) {
        this.$emit('load-product-cards', selectedItem)
      },
      performSearch(event) {
        event.preventDefault() // Add this line to prevent form submission.
        this.$emit('search', this.searchQuery)
      },
      toggleBuilderZoneVisibility() {
        this.$emit('toggle-builder-zone')
      },

      toggleCartVisibility() {
        this.$emit('toggle-cart')
      },
      toggleBuildVisibility() {
        this.$emit('toggle-build')
      },
      toggleSupportVisibility() {
        this.$emit('toggle-support')
      },
      toggleBlogVisibility() {
        this.$emit('toggle-blog')
      },
      toggleLoginModal() {
        this.$emit('toggle-login-modal')
        this.isModalVisible = true
      },
      filterProducts(filterType, filterValue) {
        this.$emit('filter-products', { type: filterType, value: filterValue })
      },
      handleCategoryClick(category) {
        this.loadProductCards(category)
        this.scrollToProductCarousel()
      },
      handleBrandClick(brand) {
        this.loadProductCards(brand)
        this.scrollToProductCarousel()
      },
      scrollToProductCarousel() {
        const carouselElement = document.getElementById('productCarousel')
        if (carouselElement) {
          carouselElement.scrollIntoView({ behavior: 'smooth' })
        }
      }
    },
    computed: {
      uniqueCategories() {
        // Collect unique categories
        // const catSet = 

        return Array.from(this.products.reduce((acc, product) => {
          acc.add(product.category)
          return acc;
        }, new Set()));
      },
      uniqueBrands() {
        // Collect unique brands
        const brands = this.products.map((products) => products.brand)
        return Array.from(new Set(brands))
      }
    }
  }
</script>
