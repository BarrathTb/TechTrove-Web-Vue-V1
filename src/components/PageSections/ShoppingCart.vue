<template>
  <transition name="slide">
    <div
      v-show="toggleCartVisibility"
      id="shopping-cart"
      class="cart-section bg-primary container-fluid"
    >
      <!-- Shopping Cart Section -->
      <section class="shopping-cart py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <!-- Shopping Cart Table -->
              <div class="card bg-secondary mb-3 p-2">
                <h2 class="text-light p-4">Your Cart</h2>
                <table class="table table-dark bg-secondary col-md-4">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in cartItems" :key="item.id">
                      <td><img :src="item.image" :alt="item.name" class="cartImage" /></td>
                      <td>{{ item.name }}</td>
                      <td>${{ item.price.toFixed(2) }}</td>
                      <td>{{ item.quantity }}</td>
                      <td>${{ (item.price * item.quantity).toFixed(2) }}</td>
                      <td>
                        <button class="btn btn-danger" @click="removeItem(index)">Remove</button>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="5" class="text-right">
                        <h5>Total: ${{ cartTotal.toFixed(2) }}</h5>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="4" class="text-left">
                        <a
                          href="#"
                          class="btn btn-pill-light"
                          data-bs-toggle="slideToggle"
                          data-bs-target="#shopping-cart"
                          @click="toggleCartVisibility"
                          ><i class="fas fa-chevron-left"></i> Continue Shopping</a
                        >
                      </td>
                      <td colspan="4" class="text-right">
                        <button id="checkoutButton" class="btn btn-pill-success">Checkout</button>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card bg-success rounder-3">
                <h2 class="text-primary-bold p-4">Shipping Information</h2>
                <div class="card-body">
                  <form id="shippingForm">
                    <div class="mb-3">
                      <label for="first-name" class="form-label text-primary-bold"
                        >First Name</label
                      >
                      <input
                        class="form-select text-primary input-black-line"
                        id="first-name"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label for="last-name" class="form-label text-primary-bold">Last Name</label>
                      <input
                        class="form-select text-primary input-black-line"
                        id="last-name"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label for="email" class="form-label text-primary-bold">Email</label>
                      <input
                        class="form-select text-primary input-black-line"
                        id="email"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label for="phone" class="form-label text-primary-bold">Primary Phone</label>
                      <input
                        class="form-select text-primary input-black-line"
                        id="phone"
                        required
                      />
                    </div>

                    <div class="mb-3">
                      <label for="address" class="form-label text-primary-bold">Address</label>
                      <input
                        class="form-select text-primary input-black-line"
                        id="address"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label for="city" class="form-label text-primary-bold">City</label>
                      <input class="form-select text-primary input-black-line" id="city" required />
                    </div>
                    <div class="mb-3">
                      <label for="state" class="form-label text-primary-bold">State</label>
                      <select class="form-select text-primary" id="state" required>
                        <option selected value="">Please Select a State...</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label for="zip" class="form-label text-primary-bold">Zip</label>
                      <input class="form-select text-primary input-black-line" id="zip" required />
                    </div>
                    <div class="mb-3">
                      <label for="country" class="form-label text-primary-bold">Country</label>
                      <select class="form-select text-primary" id="country" required>
                        <option selected value="">Please Select a Country...</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="AU">Australia</option>
                        <option value="AT">Austria</option>
                        <option value="BE">Belgium</option>
                        <option value="BG">Bulgaria</option>
                        <option value="HR">Croatia</option>
                        <option value="CY">Cyprus</option>
                        <option value="CZ">Czech Republic</option>
                        <option value="DK">Denmark</option>
                        <option value="EE">Estonia</option>
                        <option value="FI">Finland</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                        <option value="GR">Greece</option>
                        <option value="HU">Hungary</option>
                        <option value="IE">Ireland</option>
                        <option value="IT">Italy</option>
                        <option value="LV">Latvia</option>
                        <option value="LT">Lithuania</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MT">Malta</option>
                        <option value="NL">Netherlands</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="RO">Romania</option>
                        <option value="SK">Slovakia</option>
                        <option value="SI">Slovenia</option>
                        <option value="ES">Spain</option>
                        <option value="SE">Sweden</option>
                        <option value="CH">Switzerland</option>
                        <option value="TR">Turkey</option>
                        <option value="GB">United Kingdom</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <input type="checkbox" class="text-primary select-input" id="billing-addy" />
                      <label for="billing-addy" class="checkbox text-primary-bold"
                        >Same as Billing Address?</label
                      >
                    </div>

                    <div class="text-center">
                      <button type="submit" class="btn btn-pill-light text-primary-bold mt-3">
                        Continue to Payment >
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ShoppingCart',
  data() {
    return {
      isCartVisible: false,
      products: [],
      cartItems: [] // Placeholder for cart items array
    }
  },
  computed: {
    cartTotal() {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    }
  },

  methods: {
    toggleCartVisibility() {
      this.isCartVisible = !this.isCartVisible
    },
    // fetchProducts() {
    //   // Perform an AJAX call, e.g., with axios to get the products.
    //   // This example uses static data imported from a data.js file.
    //   import('./data.js').then(module => {
    //     const products = module.default.products;
    //     // You could populate some initial cart items from these products or another source.
    //     // This is just an example; actual implementation would vary based on requirements.
    //   });
    //   return this.products;
    // },
    removeItem(index) {
      this.cartItems.splice(index, 1)
    },
    toggleCart() {
      // Logic to open/close the shopping cart. Specific implementation details may vary.
      const cartElement = this.$refs.shoppingCart
      if (cartElement) {
        cartElement.classList.toggle('active')
      }
    },
    addToCart(product) {
      // Logic to add product to cart. This might include checking for existing cart items and incrementing quantity.
      const foundIndex = this.cartItems.findIndex((item) => item.id === product.id)
      if (foundIndex !== -1) {
        this.cartItems[foundIndex].quantity++
      } else {
        this.cartItems.push({ ...product, quantity: 1 })
      }
    },
    clearCart() {
      this.cartItems = []
    }
  }
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition:
    opacity 0.5s,
    transform 0.5s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(20px) ease in-out;
}
</style>
