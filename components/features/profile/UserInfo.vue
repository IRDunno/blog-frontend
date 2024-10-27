<template>
  <div>
    <div class="user-info">
      <span>Name</span>
      <p class="fw-bold">{{ user.name }}</p>
      <span>Email</span>
      <p class="fw-bold">{{ user.email }}</p>
    </div>
    <hr>
    <div class="update-buttons d-flex gap-1">
      <button @click="editPassword" class="btn btn-outline-warning btn-sm">Update password</button>
      <button @click="editInfo" class="btn btn-outline-primary btn-sm">Update info</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    editPassword() {
      this.$emit("editPassword");
    },
    editInfo() {
      this.$emit("editInfo");
    }
  }
};
</script>

<style scoped></style>
