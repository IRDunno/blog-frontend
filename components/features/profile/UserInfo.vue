<template>
  <div>
    <div class="row gy-3">
      <div class="col-lg-4 text-center">
        <img :src="user.image" class="rounded-circle" height="100px" alt="">
        <hr class="d-md-block d-lg-none">
      </div>
      <div class="col-lg-8">
        <span>Name</span>
        <p class="fw-bold">{{ user.name }}</p>
        <span>Email</span>
        <p class="fw-bold">{{ user.email }}</p>
      </div>
    </div>
    <hr />
    <div class="update-buttons d-flex gap-1">
      <button @click="editPassword" class="btn btn-outline-warning btn-sm">
        Update password
      </button>
      <button @click="editInfo" class="btn btn-outline-primary btn-sm">
        Update info
      </button>
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
    },
  },
};
</script>

<style scoped></style>
