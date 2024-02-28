/** @format */

const ProductDetailModal = {
	name: 'ProductDetailModal',
	props: ['currentProductDetails'],

	data() {
		return {
			quantity: 1,
			showModal: false,
		}
	},
	template: `
	<div v-if="showModal" id="product-detail-modal" class="modal fade show" role="dialog">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content bg-primary rounded justify-content-center p-4" style="border-radius: 10px">
				<div class="modal-header">
					<h5 class="modal-title text-light" id="exampleModalLabel">{{ currentProductDetails.name }}</h5>
					<button type="button" class="btn-close text-light" data-bs-dismiss="modal" aria-label="Close">
						<span aria-hidden="true"><i class="fas fa-close white-icon"></i></span>
					</button>
				</div>
				<div class="modal-body justify-content-center">
					<img
						:src="currentProductDetails.image"
						class="img-fluid card-img-top"
						style="border-radius: 10px; margin-bottom: 20px"
						alt="Product Image"
					/>
					<div class="row">
						<h5 id="productTitle" class="col text-white">{{ currentProductDetails.title }}</h5>

						<div class="col-3 text-right">
							<input type="checkbox" id="favoriteCheckbox" />
							<label for="favoriteCheckbox" class="heart-checkbox"></label>
						</div>
					</div>
					<p id="productPrice" class="text-white">\${{ currentProductDetails.price }}</p>
					<p id="productDescription" class="text-white">{{ currentProductDetails.description }}</p>

					<h5 class="text-white">Features</h5>
					<ul id="productFeatures" class="row list-unstyled text-light">
						<li v-for="feature in currentProductDetails.features" :key="feature">{{ feature }}</li>
					</ul>

					<hr class="bg-white" />
					<div class="row align-items-center">
						<div class="col-6">
							<h5 class="text-white float-left">Price</h5>
						</div>
						<div class="col-6">
							<h5 id="modalProductPrice" class="text-white float-right">
								\${{ currentProductDetails.price * quantity }}
							</h5>
						</div>
					</div>
					<div class="row mt-3">
						<div class="col">
							<div class="btn-group">
								<button class="btn btn-success-2 rounded-circle me-2" @click="decrementQuantity()">-</button>
								<input type="number" v-model="quantity" min="1" class="form-control ms-2 me-2" />
								<button class="btn btn-success-2 rounded-circle ms-2" @click="incrementQuantity()">+</button>
							</div>
						</div>
						<div class="col-3">
							<button
								id="addToCartButton"
								class="btn btn-success-2 flex-end"
								@click="addToCart(currentProductDetails)"
								@click="closeModal">
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>`,
	methods: {
		incrementQuantity() {
			this.quantity++
		},
		decrementQuantity() {
			if (this.quantity > 1) {
				this.quantity--
			}
		},
		addToCart() {
			this.$emit('add-to-cart', { product: this.currentProductDetails, quantity: this.quantity })
			this.closeModal() // Close the modal after emitting the add-to-cart event
		},
		toggleModal() {
			this.showModal = !this.showModal
		},
		closeModal() {
			this.showModal = false
		},
	},
}
