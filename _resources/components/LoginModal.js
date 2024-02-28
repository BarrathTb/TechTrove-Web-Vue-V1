/** @format */
import SocialLoginButton from './SocialLoginButton.js'
const LoginModal = {
	template: `
	<div
		class="modal fade"
		id="login-modal"
		tabindex="-1"
		role="dialog"
		aria-labelledby="login-modal-area"
		aria-hidden="true">
		<div class="modal-dialog text-light" role="document">
			<div class="modal-content">
				<div class="modal-header bg-primary">
					<h5 class="modal-title" id="login-modal-area">Login to Your Account</h5>
					<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
						<i class="fas fa-times"></i>
					</button>
				</div>
				<div class="modal-body bg-secondary">
					<div class="text-center text-light">
						<p>Login with:</p>
						<!-- Social Login Buttons -->
						<SocialLoginButton provider="Facebook" color="#3b5998" />
						<SocialLoginButton provider="Google" color="#dd4b39" />
						<SocialLoginButton provider="Twitter" color="#55acee" />

						<hr />
					</div>

					<form @submit.prevent="submitLogin">
						<div class="form-group">
							<label for="username">Username or Email</label>
							<input
								type="text"
								class="form-control text-light bg-primary login-input"
								id="username"
								placeholder="Enter username or email"
								v-model="login.username" />
						</div>
						<div class="form-group">
							<label for="password">Password</label>
							<input
								type="password"
								class="form-control text-light bg-primary login-input"
								id="password"
								placeholder="Password"
								autocomplete="current-password"
								v-model="login.password" />
						</div>
						<div class="form-check">
							<input type="checkbox" class="form-check-input" id="rememberMe" v-model="login.rememberMe" />
							<label class="form-check-label" for="rememberMe">Remember me</label>
						</div>
						<div class="modal-footer bg-primary">
							<button type="button" class="btn btn-outline-danger" @click="closeModal" >Close</button>
							<button type="submit" class="btn btn-outline-success">Login</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>`,

	// import SocialLoginButton from './SocialLoginButton.js'

	components: {
		'social-login-button': SocialLoginButton,
	},
	data() {
		return {
			showModal: false,
			login: {
				username: '',
				password: '',
				rememberMe: false,
			},
		}
	},
	methods: {
		submitLogin() {
			console.log('Login submitted:', this.login)
		},
		toggleModal() {
			this.showModal = !this.showModal
		},
		closeModal() {
			this.showModal = false
		},
	},
}
export default LoginModal
