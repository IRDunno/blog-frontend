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
            width="100px"
          />
        </div>
        <div class="row gy-2">
          <div class="col-12 col-md-8 col-lg-12">
            <input
              type="file"
              @change="imageUpload"
              class="form-control form-control-sm"
            />
          </div>
          <div class="col-12 col-md-4 col-lg-12">
            <button class="btn btn-outline-success btn-sm w-100" @click="switchDefaultProfiile">
              Switch to default profile
            </button>
          </div>
        </div>
        <small
          class="form-text text-danger"
          v-if="errors.image"
          v-for="error in errors.image"
        >
          {{ error }}
        </small>
        <div class="d-block d-lg-none mb-3"></div>
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
        default: false,
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
        if (this.form.default) {
          formData.append("default", this.form.default);
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
    switchDefaultProfiile() {
      this.form.default = true;
      this.previewImage = "http://127.0.0.1:8000/storage/profile/default_profile.png";
    }
  },
  mounted() {
    this.form.name = this.user.name;
    this.form.email = this.user.email;
    this.previewImage = this.user.image;
  },
};
</script>

<style scoped></style>
