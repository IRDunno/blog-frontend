<template>
  <div>
    <div class="edit-info">
      <div class="mb-3">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control form-control-sm"
          v-model="form.name"
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
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control form-control-sm"
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
    </div>
    <hr />
    <div class="update-buttons d-flex gap-1">
      <button @click="viewInfo" class="btn btn-outline-warning btn-sm">
        Cancel
      </button>
      <button @click="updateInfo" class="btn btn-outline-primary btn-sm">
        Update
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
      },
    };
  },
  methods: {
    viewInfo() {
      this.$emit("viewInfo");
    },
    async updateInfo() {
      try {
        const response = await this.$axios.$patch(
          `/profile/info/${this.user.id}`,
          { name: this.form.name, email: this.form.email }
        );
        alert("Profile Info updated");
        await this.$auth.fetchUser();
        this.$emit("viewInfo");
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.form.name = this.user.name;
    this.form.email = this.user.email;
  },
};
</script>

<style scoped></style>
