<template>
  <div>
    <div class="row">
      <div class="col-lg-4">
        <div class="text-center">
          <img
            :src="previewImage"
            :alt="user.name"
            class="rounded-circle mb-2"
            height="100px"
          />
        </div>
        <input
          type="file"
          @change="imageUpload"
          class="form-control form-control-sm"
        />
        <small
          class="form-text text-danger"
          v-if="errors.image"
          v-for="error in errors.image"
        >
          {{ error }}
        </small>
      </div>
      <div class="col-lg-8">
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
        image: null,
        name: "",
        email: "",
      },
      previewImage: null,
    };
  },
  methods: {
    viewInfo() {
      this.$emit("viewInfo");
    },
    imageUpload(event) {
      this.form.image = event.target.files[0];
      this.previewImage = URL.createObjectURL(this.form.image);
    },
    async updateInfo() {
      try {
        const formData = new FormData();
        formData.append("name", this.form.name);
        formData.append("email", this.form.email);
        formData.append("_method", "patch");
        if (this.form.image) {
          formData.append("image", this.form.image);
        }

        const response = await this.$axios.$post(
          `/profile/info/${this.user.id}`,
          formData, // Use FormData
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        alert("Profile Info updated");
        await this.$auth.fetchUser();
        this.$emit("viewInfo");
      } catch (error) {
        console.log(error.response.data);
      }
    },
  },
  mounted() {
    this.form.name = this.user.name;
    this.form.email = this.user.email;
    this.previewImage = this.user.image;
  },
};
</script>

<style scoped></style>
