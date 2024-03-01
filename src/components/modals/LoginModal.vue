<template>
  <div
    class="modal fade"
    id="login-modal"
    tabindex="-1"
    aria-labelledby="login-modal-area"
    aria-hidden="true"
  >
    <div class="modal-dialog text-light" role="document">
      <div class="modal-content">
        <div class="modal-header bg-primary">
          <h5 class="modal-title" id="login-modal-area">Login to Your Account</h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <i class="fas fa-close"></i>
          </button>
        </div>

        <div class="modal-body bg-secondary">
          <div class="text-center text-light">
            <p>Login with:</p>
            <a
              href="#"
              class="btn btn-outline btn-block mb-2"
              style="background-color: #3b5998; color: white"
            >
              <i class="fab fa-facebook-f"></i> Facebook
            </a>
            <a
              href="#"
              class="btn btn-outline-danger btn-block mb-2"
              style="background-color: #dd4b39; color: white"
            >
              <i class="fab fa-google"></i> Google
            </a>
            <a
              href="#"
              class="btn btn-outline-info btn-block mb-2"
              style="background-color: #55acee; color: white"
            >
              <i class="fab fa-twitter"></i> Twitter
            </a>

            <hr />
          </div>

          <form @submit.prevent="login">
            <div class="form-group">
              <label for="username">Username or Email</label>
              <input
                v-model="credentials.username"
                type="text"
                class="form-control text-light bg-primary login-input"
                id="username"
                placeholder="Enter username or email"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                v-model="credentials.password"
                type="password"
                class="form-control text-light bg-primary login-input"
                id="password"
                placeholder="Password"
                autocomplete="current-password"
              />
            </div>
            <div class="form-check">
              <input
                v-model="credentials.rememberMe"
                type="checkbox"
                class="form-check-input"
                id="rememberMe"
              />
              <label for="rememberMe">Remember me</label>
            </div>
          </form>
        </div>

        <div class="modal-footer bg-primary">
          <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-outline-success" @click="login">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginModal',
  data() {
    return {
      credentials: {
        isModalVisible: false,
        username: '',
        password: '',
        rememberMe: false
      }
    }
  },
  methods: {
    openModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    },
    login() {
      // Here you would implement your login logic, possibly emitting an event
      // when login is successful or showing error messages if not.
      console.log('Attempting to log in with:', this.credentials)

      // Simulated API call and processing:
      // apiService.login(this.credentials).then(response => {
      //   // Handle successful login
      // }).catch(error => {
      //   // Handle login error
      // });
    }
  }
}
</script>
