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
              <nuxt-link class="nav-link" to="/">Home</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                class="nav-link"
                to="/blogs/create"
                v-if="authenticated"
                >Post a blog</nuxt-link
              >
            </li>
          </ul>
          <!-- Not Authenticated -->
          <ul class="navbar-nav ml-auto gap-2" v-if="authenticated === false">
            <li class="nav-item">
              <nuxt-link class="nav-link text-primary" to="/login">
                Login
              </nuxt-link>
            </li>
            <li class="nav-item d-flex align-items-center">
              <span>or</span>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link text-success" to="/register">
                Register
              </nuxt-link>
            </li>
          </ul>
          <!-- Authenticated -->
          <ul class="navbar-nav ml-auto gap-2" v-if="authenticated === true">
            <li class="nav-item dropstart">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="profileDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ user.name }}
              </a>
              <ul class="dropdown-menu" aria-labelledby="profileDropdown">
                <li><nuxt-link class="dropdown-item" :to="`/profile/${user.id}`">Profile</nuxt-link></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#" @click="logout">Logout</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      this.$auth.logout();
    },
  },
};
</script>
