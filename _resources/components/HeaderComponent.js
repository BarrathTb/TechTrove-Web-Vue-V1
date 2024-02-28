/** @format */

const HeaderComponent = {
	template: `
	<header class="">
		<div class="bg-primary text-white" style="text-decoration: none">
			<nav class="navbar navbar-expand-lg text-white bg-primary">
				<div class="container-fluid align-items-center justify-content-start">
					<!-- Search Bar -->
					<div class="col-lg-5 col-md-4 d-none d-lg-flex ms-2">
						<form class="search-form w-100 d-flex" @submit.prevent="performSearch">
							<input
								v-model="searchQuery"
								class="form-control ms-2 search-input"
								type="search"
								placeholder="Search for computer parts, brands, and accessories"
								aria-label="Search" />
							<button class="btn btn-pill-success ms-2" type="submit">Search</button>
						</form>
					</div>

					<!-- Links -->
					<div class="col-lg-4 col-md-4 d-none d-lg-flex justify-content-center">
						<ul class="navbar-nav ms-auto" id="tertMenu" aria-label="Tertiary Navigation">
							<li class="mb-2 mx-2">
								<a class="text-light-bold text-decoration-none icon-success" title="Categories" href="#">Categories</a>
							</li>
							<li class="mb-2 mx-2 text-white">
								<a class="text-light-bold text-decoration-none icon-success" title="Brands" href="">Brands </a>
							</li>
							<li class="mb-2 mx-2 text-white">
								<a class="text-light-bold text-decoration-none icon-success" @click="toggleBlogVisibility" title="Blog" href="">Blog</a>
							</li>
							<li class="mb-2 mx-2 text-white">
								<a class="text-light-bold text-decoration-none icon-success" title="Sale" href="">Sale</a>
							</li>
						</ul>
					</div>

					<!-- Cart and Login Icons -->
					<div class="col-lg-2 col-md-2 d-none d-lg-flex me-4 mt-2 px-2 justify-content-end align-items-center">
						<!-- <a
								class="text-white text-decoration-none"
								title="Cart"
								href=""
								data-bs-toggle="slideToggle"
								data-bs-target="#map-section">
								<i class="fas fa-map icon-white me-4 icon-success"></i>
							</a> -->
						<a href="#" class="text-white text-decoration-none" title="Cart" @click="toggleCartVisibility">
							<i class="fas fa-shopping-cart icon-white me-4 icon-success"></i>
						</a>

						<a
							class="text-white text-decoration-none"
							title="login"
							href="#"
							data-bs-toggle="modal"
							data-bs-target="#login-modal">
							@click="toggleLoginModal"
							<i class="fas fa-sign-in-alt white-icon icon-success" id="header-login-button"></i>
						</a>
					</div>
				</div>
			</nav>
		</div>

		<!-- Main navbar -->
		<div class="header-main mx-auto w-100 h-100">
			<nav class="navbar bg-body-secondary bg-secondary">
				<div class="container-lg mx-auto">
					<a class="navbar-brand me-5" href="#"
						><img src="_resources/images/TechTrove-logo.png" alt="TechTrove Logo" width="250" height="53"
					/></a>

					<ul class="nav nav-tabs d-none d-lg-flex mx-2">
						<li class="nav-item left-tab border-none">
							<a
								class="nav-link dropdown-toggle text-light-bold main-nav-menu-item"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="true">
								PRODUCTS
							</a>
							<ul class="dropdown-menu ms-2 my-auto border-primary">
										<li>
											<a
												class="dropdown-item text-light-bold menu-main"
												href="#categories-submenu"
												data-bs-toggle="collapse"
												role="button"
												aria-expanded="false"
												aria-controls="categories-submenu">
												Categories
											</a>
											<div class="collapse" id="categories-submenu">
												<ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small ms-2 my-auto border-primary">
													<li>
														<a
															class="dropdown-item-all text-light-bold"
															href="#see-it"
															data-type="category"
															data-filter=""
															@click.prevent="filterProducts('category', '')"
															>All</a
														>
													</li>
													<li>
														<a
															class="dropdown-item text-light-bold"
															href="#"
															data-type="category"
															data-filter="Processors"
															@click.prevent="filterProducts('category', 'Processors')"
															>Processors</a
														>
													</li>
													<li>
														<a
															class="dropdown-item text-light-bold"
															href="#"
															data-type="category"
															data-filter="Graphics Cards"
															@click.prevent="filterProducts('category', 'Graphics Cards')"
															>Graphics Cards</a
														>
													</li>
													<li>
														<a
															class="dropdown-item text-light-bold"
															href="#"
															data-type="category"
															data-filter="Motherboards"
															@click.prevent="filterProducts('category', 'Motherboards')"
															>Motherboards</a
														>
													</li>

													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="category"
														data-filter="Memory"
														@click.prevent="filterProducts('category', 'Memory')"
															>RAM</a
														>
													</li>
													<li>
														<a
															class="dropdown-item text-light-bold"
															href="#"
															data-type="category"
															data-filter="Power Supply"
															@click.prevent="filterProducts('category', 'Power Supply')"
															>Power Supplies</a
														>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="category"
														 data-filter="SSD"
														 @click.prevent="filterProducts('category', 'SSD')"
															>Hard Drives</a
														>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="category"
														data-filter="Laptop"
														@click.prevent="filterProducts('category', 'Laptop')"
															>Lap Tops</a
														>
													</li>
													<li>
														<a
															class="dropdown-item text-light-bold"
															href="#"
															data-type="category"
															data-filter="prebuilt"
															@click.prevent="filterProducts('category', 'prebuilt')"
															>Gaming Pc's</a
														>
													</li>
												</ul>
											</div>
										</li>
										<li>
											<hr class="dropdown-divider text-light" />
										</li>
										<li class="nav-item left-tab border-none"></li>

										<li>
											<a
												class="dropdown-item text-light-bold menu-main"
												href="#brand-submenu-offcanvas"
												data-bs-toggle="collapse"
												role="button"
												aria-expanded="false"
												aria-controls="brands-submenu">
												Brands
											</a>
											<div class="collapse" id="brand-submenu-offcanvas">
												<ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small ms-2 my-auto border-primary">
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="ASUS"
														@click.prevent="filterProducts('brand', 'ASUS')"
															>ASUS</a
														>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="MSI"
														@click.prevent="filterProducts('brand', 'MSI')"
															>MSI</a
														>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="Gigabyte"
														@click.prevent="filterProducts('brand', 'Gigabyte')"
															>Gigabyte
														</a>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="NVIDIA"
														@click.prevent="filterProducts('brand', 'NVIDIA')">
															>NVIDIA
														</a>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="AMD"
														@click.prevent="filterProducts('brand', 'AMD')"
															>AMD
														</a>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="Intel"
														@click.prevent="filterProducts('brand', 'Intel')">
															>Intel
														</a>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="Corsair"
														@click.prevent="filterProducts('brand', 'Corsair')"
															>Corsair
														</a>
													</li>

													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="G.SKILL"
														@click.prevent="filterProducts('brand', 'G.SKILL')"
															>G.SKILL
														</a>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="Teamgroup"
														@click.prevent="filterProducts('brand', 'Teamgroup')"
															>Teamgroup
														</a>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="Crucial"
														@click.prevent="filterProducts('brand', 'Crucial')"
															>Crucial
														</a>
													</li>

													<li>
														<a
															class="dropdown-item text-light-bold"
															href="#"
															data-type="brand"
															data-filter="Western Digital"
															@click.prevent="filterProducts('brand', 'Western Digital')"
															>Western Digital
														</a>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="Seagate"
														@click.prevent="filterProducts('brand', 'Seagate')"
															>Seagate
														</a>
													</li>

													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="Samsung"
														@click.prevent="filterProducts('brand', 'Samsung')"
															>Samsung
														</a>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="EVGA"
														@click.prevent="filterProducts('brand', 'EVGA')"
															>EVGA
														</a>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="Seasonic"
														@click.prevent="filterProducts('brand', 'Seasonic')"
															>Seasonic
														</a>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="NZXT"
														@click.prevent="filterProducts('brand', 'NZXT')"
															>NZXT
														</a>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="Be Quiet!"
														@click.prevent="filterProducts('brand', 'Be Quiet!')"
															>Be Quiet!
														</a>
													</li>
													<li>
														<a
															class="dropdown-item text-light-bold"
															href="#"
															data-type="brand"
															data-filter="Fractal Design"
															@click.prevent="filterProducts('brand', 'Fractal Design')"
															>Fractal Design
														</a>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
															href="#"
															data-type="brand"
															data-filter="XPG"
															@click.prevent="filterProducts('brand', 'XPG')"
															>XPG
														</a>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="Apple"
														@click.prevent="filterProducts('brand', 'Apple')"
															>Apple
														</a>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="Dell"
														@click.prevent="filterProducts('brand', 'Dell')"
															>Dell
														</a>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
															href="#"
															@click.prevent="filterProducts('brand', 'Lenovo')"
															data-type="brand"
															data-filter="Lenovo"
															>Lenovo
														</a>
													</li>
													<li>
														<a
															class="dropdown-item text-light-bold"
															href="#"
															data-type="brand"
															data-bs-toggle="slideToggle"
															@click.prevent="filterProducts('brand', 'Razer')"
															data-filter="Razer"
															>Razer
														</a>
													</li>
													<li>
														<a
															class="dropdown-item text-light-bold"
															href="#"
															data-type="brand"
															data-bs-toggle="slideToggle"
															@click.prevent="filterProducts('brand', 'HP')"
															data-filter="HP"
															>HP
														</a>
													</li>
													<li>
														<a
															class="dropdown-item text-light-bold"
															href="#"
															data-type="brand"
															data-bs-toggle="slideToggle"
															@click.prevent="filterProducts('brand', 'Acer')"
															data-filter="Acer"
															>Acer
														</a>
													</li>
													<li>
														<a
															class="dropdown-item text-light-bold"
															href="#"
															data-type="brand"
															@click.prevent="filterProducts('brand', 'Thermaltake')"
															>Thermaltake
														</a>
													</li>
												</ul>
											</div>
										</li>
									</ul>
								</li>
								<li class="nav-item left-tab">
									<a
										id="support-toggle-canvas"
										class="nav-link text-light-bold main-nav-menu-item"
										href="#"
										role="button"
										@click="toggleSupportVisibility"
										aria-expanded="true">
										SUPPPORT
									</a>
								</li>
								<li class="nav-item right-tab">
									<a
										id="blog-toggle-canvas"
										class="nav-link text-light-bold main-nav-menu-item"
										href="#"
										role="button"
										@click="toggleBlogVisibility"
										aria-expanded="true">
										BLOG
									</a>
								</li>
								<li class="nav-item right-tab">
									<a
										class="nav-link text-light-bold main-nav-menu-item"
										href="#"
										role="button"
										@click="toggleBuildVisibility"
										aria-expanded="true">
										BUILD
									</a>
								</li>
							</ul>

					<!-- Toggler for offcanvas view on smaller screens -->
					<button
						class="btn btn-success d-lg-none"
						type="button"
						data-bs-toggle="offcanvas"
						data-bs-target="#offcanvasNavbar"
						aria-controls="offcanvasNavbar"
						aria-label="Toggle navigation">
						<i class="fas fa-bars"></i>
					</button>

					<div
						class="offcanvas offcanvas-end"
						tabindex="-1"
						id="offcanvasNavbar"
						aria-labelledby="offcanvasNavbarLabel">
						<div class="offcanvas-header bg-primary">
							<h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
							<button type="button" class="btn btn-success" data-bs-dismiss="offcanvas" aria-label="Close">
								<i class="fas fa-close fa-lg"></i>
							</button>
						</div>

						<!-- Offcanvas view for smaller screens - Copy of main navigation content -->
						<div class="offcanvas-body bg-secondary">
							<!-- Main navigation content goes here -->
							<ul class="nav nav-tabs mx-2">
								<li class="nav-item left-tab border-none">
									<a
										class="nav-link dropdown-toggle text-light-bold main-nav-menu-item"
										href="#"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="true">
										PRODUCTS
									</a>
									<ul class="dropdown-menu ms-2 my-auto border-primary">
										<li>
											<a
												class="dropdown-item text-light-bold menu-main"
												href="#categories-submenu"
												data-bs-toggle="collapse"
												role="button"
												aria-expanded="false"
												aria-controls="categories-submenu">
												Categories
											</a>
											<div class="collapse" id="categories-submenu">
												<ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small ms-2 my-auto border-primary">
													<li>
														<a
															class="dropdown-item-all text-light-bold"
															href="#see-it"
															data-type="category"
															data-filter=""
															@click.prevent="filterProducts('category', '')"
															>All</a
														>
													</li>
													<li>
														<a
															class="dropdown-item text-light-bold"
															href="#"
															data-type="category"
															data-filter="Processors"
															@click.prevent="filterProducts('category', 'Processors')"
															>Processors</a
														>
													</li>
													<li>
														<a
															class="dropdown-item text-light-bold"
															href="#"
															data-type="category"
															data-filter="Graphics Cards"
															@click.prevent="filterProducts('category', 'Graphics Cards')"
															>Graphics Cards</a
														>
													</li>
													<li>
														<a
															class="dropdown-item text-light-bold"
															href="#"
															data-type="category"
															data-filter="Motherboards"
															@click.prevent="filterProducts('category', 'Motherboards')"
															>Motherboards</a
														>
													</li>

													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="category"
														data-filter="Memory"
														@click.prevent="filterProducts('category', 'Memory')"
															>RAM</a
														>
													</li>
													<li>
														<a
															class="dropdown-item text-light-bold"
															href="#"
															data-type="category"
															data-filter="Power Supply"
															@click.prevent="filterProducts('category', 'Power Supply')"
															>Power Supplies</a
														>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="category"
														 data-filter="SSD"
														 @click.prevent="filterProducts('category', 'SSD')"
															>Hard Drives</a
														>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="category"
														data-filter="Laptop"
														@click.prevent="filterProducts('category', 'Laptop')"
															>Lap Tops</a
														>
													</li>
													<li>
														<a
															class="dropdown-item text-light-bold"
															href="#"
															data-type="category"
															data-filter="prebuilt"
															@click.prevent="filterProducts('category', 'prebuilt')"
															>Gaming Pc's</a
														>
													</li>
												</ul>
											</div>
										</li>
										<li>
											<hr class="dropdown-divider text-light" />
										</li>
										<li class="nav-item left-tab border-none"></li>

										<li>
											<a
												class="dropdown-item text-light-bold menu-main"
												href="#brand-submenu-offcanvas"
												data-bs-toggle="collapse"
												role="button"
												aria-expanded="false"
												aria-controls="brands-submenu">
												Brands
											</a>
											<div class="collapse" id="brand-submenu-offcanvas">
												<ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small ms-2 my-auto border-primary">
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="ASUS"
														@click.prevent="filterProducts('brand', 'ASUS')"
															>ASUS</a
														>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="MSI"
														@click.prevent="filterProducts('brand', 'MSI')"
															>MSI</a
														>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="Gigabyte"
														@click.prevent="filterProducts('brand', 'Gigabyte')"
															>Gigabyte
														</a>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="NVIDIA"
														@click.prevent="filterProducts('brand', 'NVIDIA')">
															>NVIDIA
														</a>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="AMD"
														@click.prevent="filterProducts('brand', 'AMD')"
															>AMD
														</a>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="Intel"
														@click.prevent="filterProducts('brand', 'Intel')">
															>Intel
														</a>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="Corsair"
														@click.prevent="filterProducts('brand', 'Corsair')"
															>Corsair
														</a>
													</li>

													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="G.SKILL"
														@click.prevent="filterProducts('brand', 'G.SKILL')"
															>G.SKILL
														</a>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="Teamgroup"
														@click.prevent="filterProducts('brand', 'Teamgroup')"
															>Teamgroup
														</a>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="Crucial"
														@click.prevent="filterProducts('brand', 'Crucial')"
															>Crucial
														</a>
													</li>

													<li>
														<a
															class="dropdown-item text-light-bold"
															href="#"
															data-type="brand"
															data-filter="Western Digital"
															@click.prevent="filterProducts('brand', 'Western Digital')"
															>Western Digital
														</a>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="Seagate"
														@click.prevent="filterProducts('brand', 'Seagate')"
															>Seagate
														</a>
													</li>

													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="Samsung"
														@click.prevent="filterProducts('brand', 'Samsung')"
															>Samsung
														</a>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="EVGA"
														@click.prevent="filterProducts('brand', 'EVGA')"
															>EVGA
														</a>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="Seasonic"
														@click.prevent="filterProducts('brand', 'Seasonic')"
															>Seasonic
														</a>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="NZXT"
														@click.prevent="filterProducts('brand', 'NZXT')"
															>NZXT
														</a>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="Be Quiet!"
														@click.prevent="filterProducts('brand', 'Be Quiet!')"
															>Be Quiet!
														</a>
													</li>
													<li>
														<a
															class="dropdown-item text-light-bold"
															href="#"
															data-type="brand"
															data-filter="Fractal Design"
															@click.prevent="filterProducts('brand', 'Fractal Design')"
															>Fractal Design
														</a>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
															href="#"
															data-type="brand"
															data-filter="XPG"
															@click.prevent="filterProducts('brand', 'XPG')"
															>XPG
														</a>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="Apple"
														@click.prevent="filterProducts('brand', 'Apple')"
															>Apple
														</a>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
														href="#"
														data-type="brand"
														data-filter="Dell"
														@click.prevent="filterProducts('brand', 'Dell')"
															>Dell
														</a>
													</li>
													<li>
														<a class="dropdown-item text-light-bold"
															href="#"
															@click.prevent="filterProducts('brand', 'Lenovo')"
															data-type="brand"
															data-filter="Lenovo"
															>Lenovo
														</a>
													</li>
													<li>
														<a
															class="dropdown-item text-light-bold"
															href="#"
															data-type="brand"
															data-bs-toggle="slideToggle"
															@click.prevent="filterProducts('brand', 'Razer')"
															data-filter="Razer"
															>Razer
														</a>
													</li>
													<li>
														<a
															class="dropdown-item text-light-bold"
															href="#"
															data-type="brand"
															data-bs-toggle="slideToggle"
															@click.prevent="filterProducts('brand', 'HP')"
															data-filter="HP"
															>HP
														</a>
													</li>
													<li>
														<a
															class="dropdown-item text-light-bold"
															href="#"
															data-type="brand"
															data-bs-toggle="slideToggle"
															@click.prevent="filterProducts('brand', 'Acer')"
															data-filter="Acer"
															>Acer
														</a>
													</li>
													<li>
														<a
															class="dropdown-item text-light-bold"
															href="#"
															data-type="brand"
															@click.prevent="filterProducts('brand', 'Thermaltake')"
															>Thermaltake
														</a>
													</li>
												</ul>
											</div>
										</li>
									</ul>
								</li>
								<li class="nav-item left-tab">
									<a
										id="support-toggle-canvas"
										class="nav-link text-light-bold main-nav-menu-item"
										href="#"
										role="button"
										@click="toggleSupportVisibility"
										aria-expanded="true">
										SUPPPORT
									</a>
								</li>
								<li class="nav-item right-tab">
									<a
										id="blog-toggle-canvas"
										class="nav-link text-light-bold main-nav-menu-item"
										href="#"
										role="button"
										@click="toggleBlogVisibility"
										aria-expanded="true">
										BLOG
									</a>
								</li>
								<li class="nav-item right-tab">
									<a
										class="nav-link text-light-bold main-nav-menu-item"
										href="#"
										role="button"
										@click="toggleBuildVisibility"
										aria-expanded="true">
										BUILD
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
	</header>`,

	name: 'HeaderComponent',
	data() {
		return {
			searchQuery: '',
		}
	},
	methods: {
		performSearch() {
			this.$emit('search', this.searchQuery)
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
		toggleSupportVisibility() {
			this.$emit('toggle-blog')
		},
		toggleLoginModal() {
			this.$emit('toggle-login-modal')
		},

		filterProducts(filterType, filterValue) {
			this.$emit('filter-products', { type: filterType, value: filterValue })
		},
		// Include other method definitions here if needed
	},
}
