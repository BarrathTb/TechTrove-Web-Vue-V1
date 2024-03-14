<template>
  <VaModal v-model="isModalVisible" class="rounded">
    <!-- The following div acts as the modal container -->
    <template #content>
      <div class="modal-lg rounded bg-primary p-4" style="border-radius: 10px">
        <div class="modal-dialog text-light" role="login-area">
          <div class="modal-content p-4">
            <div class="modal-header bg-primary">
              <h5 class="modal-title mb-2" id="login-modal-area">Login to Your Account</h5>
              <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                <i class="fas fa-close"></i>
              </button>
            </div>
            <div class="modal-body rounded bg-secondary p-4">
              <div class="text-center text-light p-2">
                <p>Login with:</p>
                <a
                  href="#"
                  class="btn btn-outline btn-block mb-2 me-2"
                  style="background-color: #3b5998; color: white"
                >
                  <i class="fab fa-facebook-f"></i> Facebook
                </a>
                <a
                  href="#"
                  class="btn btn-outline-danger btn-block mb-2 ms-2 me-2"
                  style="background-color: #dd4b39; color: white"
                >
                  <i class="fab fa-google"></i> Google
                </a>
                <a
                  href="#"
                  class="btn btn-outline-info btn-block mb-2 ms-2"
                  style="background-color: #55acee; color: white"
                >
                  <i class="fab fa-twitter"></i> Twitter
                </a>

                <hr />
              </div>

              <form @submit.prevent="login">
                <div class="form-group p-2">
                  <label for="username">Username or Email</label>
                  <input
                    v-model="credentials.username"
                    type="text"
                    class="form-control text-light bg-primary login-input"
                    id="username"
                    placeholder="Enter username or email"
                  />
                </div>
                <div class="form-group p-2">
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

            <div class="modal-footer bg-primary p-2 mx-auto">
              <div class="row mt-3">
                <div class="col">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-outline-danger text-danger-bold me-2"
                      @click="closeModal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-success text-bold ms-2"
                      @click="login"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </VaModal>
</template>

<script>
export default {
  name: 'LoginModal',

  data() {
    return {
      isModalVisible: false,
      credentials: {
        username: '',
        password: '',
        rememberMe: false
      }
    }
  },
  methods: {
    openModal() {
      this.$emit('update:modelValue', true)
      this.credentials.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
      this.$emit('update:modelValue', false)
    },
    login() {
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
