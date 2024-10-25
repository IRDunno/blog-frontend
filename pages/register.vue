<template>
  <div class="container">
    <div class="header mb-5">
      <h1 class="">Register</h1>
    </div>
    <div class="form p-5">
      <form class="" @submit.prevent="register">
        <div class="mb-3">
          <label for="nameInput" class="form-label">Full Name</label>
          <input
            type="text"
            class="form-control"
            id="nameInput"
            placeholder="Enter your name"
            v-model="user.name" autofocus
          />
          <small
            class="form-text text-danger"
            v-if="errors.name"
            v-for="error in errors.name"
          >
            {{ error }}
          </small>
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
          <small
            class="form-text text-danger"
            v-if="errors.email"
            v-for="error in errors.email"
          >
            {{ error }}
          </small>
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
          <small
            class="form-text text-danger"
            v-if="errors.password"
            v-for="error in errors.password"
          >
            {{ error }}
          </small>
        </div>
        <div class="button">
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
        // this.$store.dispatch("validationSuccess/setSuccess", "User registered successfully");
        alert("User registered successfully");
        this.user.name = "";
        this.user.email = "";
        this.user.password = "";
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
