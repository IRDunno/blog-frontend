<template>
  <div>
    <div class="edit-password">
      <label for="password">Password</label>
      <input
        type="password"
        class="form-control form-control-sm"
        v-model="password"
      />
    </div>
    <hr />
    <div class="update-buttons d-flex gap-1">
      <button @click="viewInfo" class="btn btn-outline-warning btn-sm">
        Cancel
      </button>
      <button @click="updatePassword" class="btn btn-outline-primary btn-sm">
        Update
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "",
    };
  },
  methods: {
    viewInfo() {
      this.$emit("viewInfo");
    },
    async updatePassword() {
      try {
        await this.$axios.$patch(`/profile/password/${this.user.id}`, {
          password: this.password,
        });
        alert("Password updated");
        this.$emit("viewInfo");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
