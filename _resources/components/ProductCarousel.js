/** @format */
import ProductCard from './ProductCard.js'

const ProductCarousel = {
	components: {
		'product-card': ProductCard,
	},
	props: ['products'],
	methods: {
		handleViewDetails(product) {
			this.$emit('view-product-details', product)
		},
	},
	computed: {
		groupedProducts() {
			const groups = []
			for (let i = 0; i < this.products.length; i += 3) {
				groups.push(this.products.slice(i, i + 3))
			}
			return groups
		},
	},
	template: `
    <div id="productCarousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(group, index) in groupedProducts" :key="index" :class="['carousel-item', { active: index === 0 }]">
          <div class="row g-3 mb-2 mt-2 justify-content-center">
						<product-card
							v-for="product in group"
							:key="product.id"
							:product="product"
							@view-details="handleViewDetails"
						></product-card>
					</div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#productCarousel" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a class="carousel-control-next" href="#productCarousel" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>`,
}
export default ProductCarousel
