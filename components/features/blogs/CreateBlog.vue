<template>
  <div class="container">
    <div class="header mb-5">
      <h1 class="">Post a blog</h1>
    </div>
    <div class="form p-5">
      <form class="" @submit.prevent="submit">
        <div class="mb-3">
          <label for="titleInput" class="form-label">Title</label>
          <input
            type="text"
            class="form-control"
            id="titleInput"
            placeholder="Title"
            v-model="form.title"
          />
          <small
            class="form-text text-danger"
            v-if="errors.title"
            v-for="error in errors.title"
          >
            {{ error }}
          </small>
        </div>
        <div class="mb-3">
          <label for="contentInput" class="form-label">Content</label>
          <input
            type="content"
            class="form-control"
            id="contentInput"
            placeholder="Enter your content"
            v-model="form.content"
          />
          <small
            class="form-text text-danger"
            v-if="errors.content"
            v-for="error in errors.content"
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
            Post
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
        title: "",
        content: "",
      },
      loading: false,
    };
  },
  methods: {
    async submit() {
      try {
        this.loading = true;
        const response = await this.$axios.$post("/blogs", {
          title: this.form.title,
          content: this.form.content,
        });
        alert("Blog has been posted");
      } catch (error) {
        console.log(error);
      }
      this.form.title = "";
      this.form.content = "";
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
