<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <div class="container-fluid">
        <nuxt-link class="navbar-brand" to="/">Blog</nuxt-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <nuxt-link class="nav-link active" aria-current="page" to="/"
                >Home</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to=",">Link</nuxt-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Disabled</a
              >
            </li>
          </ul>
          <ul class="navbar-nav ml-auto gap-2">
            <li class="nav-item">
              <nuxt-link class="btn btn-outline-primary" to="/login"
                >Login</nuxt-link
              >
            </li>
            <li class="nav-item d-flex align-items-center">
              <span>or</span>
            </li>
            <li class="nav-item">
              <button
                class="btn btn-outline-success"
                data-bs-toggle="modal"
                data-bs-target="#registerModal"
              >
                Register
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Modal -->
    <div class="modal fade" id="registerModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <form class="modal-content" @submit.prevent="register">
          <div class="modal-header">
            <h1 class="modal-title fs-5">Register here</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body p-4">
            <div class="mb-3">
              <label for="nameInput" class="form-label">Full Name</label>
              <input
                type="text"
                class="form-control"
                id="nameInput"
                placeholder="Enter your name"
                v-model="user.name"
              />
            </div>
            <div class="mb-3">
              <label for="emailInput" class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                id="emailInput"
                placeholder="name@example.com"
                v-model="user.email"
              />
            </div>
            <div class="mb-3">
              <label for="passwordInput" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="passwordInput"
                placeholder="Enter your password"
                v-model="user.password"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="submit"
              class="btn btn-success"
              v-if="loading === false"
            >
              Register
            </button>
            <div
              class="spinner-border spinner-border-sm"
              role="status"
              v-if="loading === true"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
      loading: false,
    };
  },
  methods: {
    async register() {
      try {
        this.loading = true;
        const response = await this.$axios.$post("/auth/register", this.user);
        this.$store.dispatch("validationSuccess/setSuccess", "User registered successfully");
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    },
  },
};
</script>
