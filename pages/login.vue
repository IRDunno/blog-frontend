<template>
  <div class="container">
    <div class="header mb-5">
      <h1 class="">Login</h1>
    </div>
    <div class="form p-5">
      <form class="" @submit.prevent="login">
        <div class="mb-3">
          <label for="emailInput" class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            id="emailInput"
            placeholder="name@example.com"
            v-model="form.email"
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
            v-model="form.password"
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
            Login
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
      form: {
        email: "",
        password: "",
      },
      loading: false,
    };
  },
  methods: {
    async login() {
      try {
        this.loading = true;
        await this.$auth.loginWith("local", {
          data: this.form,
        });

        this.$router.push("/");
        // this.$store.dispatch("validationSuccess/setSuccess", "Form registered successfully");
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
