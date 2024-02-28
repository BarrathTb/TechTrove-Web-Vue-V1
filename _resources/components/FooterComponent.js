/** @format */

const FooterComponent = {
	template: `
	<footer class="bg-secondary text-light">
		<div class="container">
			<div class="row g-4 justify-content-between">
				<!-- About Section -->
				<div class="col-lg-4 col-md-6 mb-3">
					<h5>About Us</h5>
					<p>
						Our mission is to deliver outstanding service and products to our customers. Learn more about our story and
						how we work hard to ensure you're always satisfied.
					</p>
					<a href="/about" class="text-decoration-none btn btn-outline-light">Learn More</a>
				</div>

				<!-- Newsletter Subscription -->
				<div class="col-lg-4 col-md-6 mb-3">
					<h5>Newsletter</h5>
					<p>Stay updated with the latest news and special offers by subscribing to our newsletter.</p>
					<form @submit.prevent="subscribeNewsletter">
						<div class="input-group mb-3">
							<input
								v-model="email"
								type="email"
								class="form-control"
								placeholder="Enter your email"
								aria-label="Recipient's email" />
							<button class="btn btn-outline-light ms-1" type="submit">Subscribe</button>
						</div>
					</form>
				</div>

				<!-- Quick Links -->
				<div class="col-lg-2 col-md-6">
					<h5>Quick Links</h5>
					<div class="row g-2">
						<div class="col-6">
							<a href="/" class="text-decoration-none btn btn-outline-light my-1 w-100">Home</a>
						</div>
						<div class="col-6">
							<a href="/products" class="text-decoration-none btn btn-outline-light my-1 w-100">Products</a>
						</div>
						<div class="col-6">
							<a href="/services" class="text-decoration-none btn btn-outline-light my-1 w-100">Services</a>
						</div>
						<div class="col-6">
							<a href="/contact" class="text-decoration-none btn btn-outline-light my-1 w-100">Contact</a>
						</div>
					</div>
				</div>

				<!-- Contact Information -->
				<div class="col-lg-2 col-md-6 mb-3">
					<h5>Contact Us</h5>
					<address>
						<strong>Email:</strong> contact@example.com<br />
						<strong>Phone:</strong> +123 456 7890<br />
						<strong>Address:</strong> 123 Main St, Hometown, USA
					</address>
				</div>

				<!-- Social Media Icons -->
				<div class="col-12 text-center mb-2">
					<p>Follow us on social media:</p>
					<a href="#" class="btn btn-light mx-1">
						<i class="fab fa-facebook-f"></i>
					</a>
					<a href="#" class="btn btn-light mx-1">
						<i class="fab fa-twitter"></i>
					</a>
					<a href="#" class="btn btn-light mx-1">
						<i class="fab fa-instagram"></i>
					</a>
					<a href="#" class="btn btn-light mx-1">
						<i class="fab fa-youtube"></i>
					</a>
				</div>
			</div>
		</div>
	</footer>`,

	data() {
		return {
			email: '',
		}
	},
	methods: {
		subscribeNewsletter() {
			console.log('Subscribing to newsletter with email:', this.email)
		},
	},
}
