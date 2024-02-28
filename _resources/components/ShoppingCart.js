/** @format */

const ShoppingCart = {
	data() {
		return {
			cart: [],
		}
	},
	methods: {
		removeFromCart(index) {
			this.cart.splice(index, 1)
		},
		updateCartTotal() {
			let total = 0
			this.cart.forEach((item) => {
				total += item.price * item.quantity
			})
			this.cartTotal = total
		},
		addItemToCart(product) {
			this.cart.push({
				product: product,
				quantity: 1,
			})
			this.updateCartTotal()
		},
	},
	computed: {
		cartTotal() {
			let total = 0
			this.cart.forEach((item) => {
				total += item.price * item.quantity
			})
			return total
		},
	},
	template: `
	<div v-if="isCartVisible" class="cart-section bg-primary container-fluid">
		<section class="shopping-cart py-5">
			<div class="container-fluid">
				<div class="row">
					
					<div class="col-md-6">
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

								<tbody id="cartItems">
									
									<tr v-for="(item, index) in cart" :key="item.product.id">
											<td><img class="cartImage" :src="item.product.image" :alt="item.product.name"></td>
											<td>{{ item.product.name }}</td>
											<td>\${{ item.product.price.toFixed(2) }}</td>
											<td>{{ item.quantity }}</td>
											<td>\${{ (item.product.price * item.quantity).toFixed(2) }}</td>
											<td>
													<button @click="removeFromCart(index)" class="btn btn-danger">Remove</button>
											</td>
									</tr>
								</tbody>

								<tfoot>
									<tr>
										<td colspan="2"></td>
										<td colspan="2"></td>
										<td colspan="2" class="text-right">
											<h5>
												Total: $<span id="cartTotal">{{ cartTotal.toFixed(2) }}</span>
											</h5>
										</td>
									</tr>
									<tr>
										<td colspan="4" class="text-left">
											<a href="#" class="btn btn-pill-light" @click="continueShopping">
												<i class="fas fa-chevron-left"></i> Continue Shopping
											</a>
										</td>
										<td colspan="4" class="text-right">
											<button id="checkoutButton" class="btn btn-pill-success" @click="checkout">Checkout</button>
										</td>
									</tr>
								</tfoot>
							</table>
						</div>
					</div>

					
				</div>
			</div>
		</section>
	</div>`,

	name: 'ShoppingCart',
	data() {
		return {
			isCartVisible: false,
			cart: [],
			cartTotal: 0,
		}
	},
	methods: {
		removeFromCart(index) {
			this.cart.splice(index, 1)
			this.updateCartTotal()
		},
		updateCartTotal() {
			const total = this.cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
			this.cartTotal = total // Make sure you have cartTotal in your data.
		},
		toggleCartVisibility() {
			this.isCartVisible = !this.isCartVisible
		},
		hideCart() {
			this.isCartVisible = false
		},
		addItemToCart({ product, quantity }) {
			const itemIndex = this.cart.findIndex((item) => item.product.id === product.id)
			if (itemIndex !== -1) {
				this.cart[itemIndex].quantity += quantity
			} else {
				this.cart.push({
					product: product,
					quantity: quantity,
				})
			}
			this.updateCartTotal()
		},
		checkout() {},
	},
	computed: {
		cartTotal() {
			// calculate the total price of the cart
		},
	},
}
