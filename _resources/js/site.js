/** @format */

$(function () {
	//create a product card for the carousel
	function createProductCard(products) {
		return `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3" data-product-id="${products.id}">
                <div class="card product-card h-100 bg-secondary d-flex flex-column">
                    <div class="card-img-contain bg-white card p-4">
                    <img src="${products.image}" class="card-img-top img-fluid" alt="${products.name}" />
                    </div>
										<div class="card-body text-light flex-grow-1 d-flex flex-column justify-content-between pb-1">
                        <h5 class="card-title text-center font-size-md">${products.name}</h5>
                        <p class="card-text text-left font-size-sm">${products.description}</p>
                        <a href="#product-detail-modal" class="btn btn-success-2 view-product-details">View Product Details</a>
                    </div>
                </div>
            </div>`
	}
	// generate the carousel with product cards
	function createCarousel(data) {
		let carouselInnerHtml = ''

		// Group the items
		for (let i = 0; i < data.length; i += 3) {
			const activeClass = i === 0 ? ' active' : ''

			// begin carousel item
			carouselInnerHtml += `<div class="carousel-item${activeClass}"><div class="row g-3 mb-2 mt-2 justify-content-center">`

			for (let j = i; j < i + 3 && j < data.length; j++) {
				carouselInnerHtml += createProductCard(data[j])
			}

			// end carousel item
			carouselInnerHtml += `</div></div>`
		}

		// Inject the carousel HTML and initialize the carousel
		$('#productCarousel .carousel-inner').html(carouselInnerHtml)
		$('#productCarousel').carousel()
	}

	// build the carousel based on dynamic filters
	function loadProducts(filters) {
		let data = Object.values(productsData).flat()
		if (filters.brand) {
			data = data.filter((product) => product.brand === filters.brand)
		}
		if (filters.category) {
			data = data.filter((product) => product.category === filters.category)
		}
		if (filters.minPrice) {
			data = data.filter((product) => product.price >= filters.minPrice)
		}
		if (filters.maxPrice) {
			data = data.filter((product) => product.price <= filters.maxPrice)
		}

		createCarousel(data)
	}

	loadProducts({ category: 'Motherboards' }) // Load all products

	// Attach click events to dropdown items for different filters
	$('.dropdown-menu .dropdown-item').on('click', function (event) {
		event.preventDefault()
		let filterType = $(this).data('type')
		let filterValue = $(this).data('filter')
		const filters = {}
		filters[filterType] = filterValue
		loadProducts(filters)
		$('html, body').animate(
			{
				scrollTop: $('#productCarousel').top,
			},
			1000
		)
	})
	$('.dropdown-menu .menu-main').on('click', function (e) {
		e.stopPropagation()
	})

	let currentProductDetails // Holds the product details for use in various functions

	$(document).on('click', '.view-product-details', function () {
		const productId = $(this).closest('[data-product-id]').data('productId')
		console.log(productId)
		currentProductDetails = productsData.products.find((product) => product.id === productId)

		if (currentProductDetails) {
			// Populate modal with product details
			$('#productImage').attr('src', currentProductDetails.image)
			$('#productTitle').text(currentProductDetails.name)
			$('#productPrice').text('$' + currentProductDetails.price.toFixed(2))
			$('#productDescription').text(currentProductDetails.description)

			const $featuresList = $('#productFeatures')
			$featuresList.empty()

			currentProductDetails.features.forEach(function (feature) {
				$featuresList.append(`<li class="text-light">${feature}</li>`)
			})

			$('#modalProductPrice').text('$' + currentProductDetails.price.toFixed(2))

			// Show the modal
			$('#product-detail-modal').modal('show')
		}
	})

	// Listener for increment button
	$('#incrementButton').click(function () {
		var quantity = parseInt($('#quantityInput').val())
		quantity = isNaN(quantity) ? 0 : quantity
		quantity++ // Increment
		$('#quantityInput').val(quantity)
		$('#modalProductPrice').text('$' + (currentProductDetails.price * quantity).toFixed(2))
	})

	// Listener for decrement button
	$('#decrementButton').click(function () {
		var quantity = parseInt($('#quantityInput').val())
		if (quantity > 1) {
			quantity-- // Decrement but not below 1
		}
		$('#quantityInput').val(quantity)
		$('#modalProductPrice').text('$' + (currentProductDetails.price * quantity).toFixed(2))
	})

	$('#addToCartButton').click(function () {
		const imageCart = $('#productImage').attr('src')
		const quantity = parseInt($('#quantityInput').val())
		const productPrice = parseFloat(currentProductDetails.price.toFixed(2))
		const totalPrice = productPrice * quantity

		const cartItemHtml = `
        <tr>
						<td><img class="cartImage" src="${imageCart}" alt="${currentProductDetails.name}"></td>
            <td>${currentProductDetails.name}</td>
            <td>$${productPrice.toFixed(2)}</td>
            <td>${quantity}</td>
            <td>$${totalPrice.toFixed(2)}</td>
            <td><button class="btn btn-danger remove-item">Remove</button></td>
        </tr>
    `

		$('#cartItems').append(cartItemHtml) // Append new row to cart

		updateCartTotal() // Update cart total function (defined below)

		$('#quantityInput').val('1') // Reset quantity input
		$('#modalProductPrice').text(productPrice.toFixed(2)) // Reset modal price
		$('#product-detail-modal').modal('hide') // Hide modal
	})

	function updateCartTotal() {
		const cartTotal = 0
		$('#cartItems tr').each(function () {
			const lineTotal = parseFloat($(this).find('td:nth-child(5)').text().replace('$', ''))
			cartTotal += lineTotal
		})
		$('#cartTotal').text(cartTotal.toFixed(2))
	}

	$('#shopping-cart').on('click', '.remove-item', function () {
		$(this).closest('tr').remove()
		updateCartTotal()
	})

	$('[data-bs-toggle="slideToggle"]').click(function (e) {
		e.preventDefault()
		const targetSelector = $(this).attr('data-bs-target')
		$(targetSelector).slideToggle(600)
		const offcanvasId = '#offcanvasNavbar'
		const offcanvasElement = $(offcanvasId)
		if (offcanvasElement) {
			const bsOffCanvas = bootstrap.Offcanvas.getInstance(offcanvasElement.get(0))
			if (bsOffCanvas && bsOffCanvas._element.classList.contains('show')) {
				bsOffCanvas.hide()
			}
		}
	})

	// add options to a select elements
	function populateSelect(selectId, category) {
		const $selectOptions = $('#' + selectId)
		$selectOptions.empty()

		$.each(productsData.products, function (index, product) {
			if (product.category === category) {
				$selectOptions.append($('<option></option>').val(product.id).text(product.name))
			}
		})
	}

	// Call the populateSelect function for each category
	populateSelect('motherboardSelect', 'Motherboards')
	populateSelect('cpuSelect', 'Processors')
	populateSelect('gpuSelect', 'Graphics Cards')
	populateSelect('ramSelect', 'Memory')
	populateSelect('ssdSelect', 'SSD')
	populateSelect('powerSelect', 'Power Supply')
})

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', function (e) {
		const href = this.getAttribute('href')
		// Check if the href value is more than just "#"
		if (href.length > 1 && document.querySelector(href)) {
			e.preventDefault()

			// Scroll smoothly to the target element
			document.querySelector(href).scrollIntoView({
				behavior: 'smooth',
			})
		}
	})
})

// function initMap() {
// 	const myLatLng = { lat: 43.07774, lng: -88.35416 }
// 	const map = new google.maps.Map(document.getElementById('map'), {
// 		zoom: 8,
// 		center: myLatLng,
// 	})
// }

// initMap()

// // Handle file upload and parse the data for use on the map
// function handleFileUpload() {
// 	const fileInput = document.getElementById('file-input')
// 	const file = fileInput.files[0]

// 	if (file) {
// 		// logic to read the file and process the data
// 		console.log('File uploaded:', file.name)
// 		// You would implement the file reading and parsing logic here
// 	}
// }

// // Call this function when the API has loaded by pointing to it in the API's async defer script tag as callback.
// google.maps.event.addDomListener(window, 'load', initMap)

/** @format */
