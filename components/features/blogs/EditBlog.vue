<template>
  <div class="container">
    <div class="container">
      <div class="header mb-5">
        <h1>Update your blog</h1>
      </div>
      <div class="form p-5">
        <form @submit.prevent="update">
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
              :key="error"
            >
              {{ error }}
            </small>
          </div>
          <div class="mb-3">
            <label for="contentInput" class="form-label">Content</label>
            <input
              type="text"
              class="form-control"
              id="contentInput"
              placeholder="Enter your content"
              v-model="form.content"
            />
            <small
              class="form-text text-danger"
              v-if="errors.content"
              v-for="error in errors.content"
              :key="error"
            >
              {{ error }}
            </small>
          </div>
          <div class="button">
            <button type="submit" class="btn btn-success" v-if="!loading">
              Update
            </button>
            <div class="spinner-border spinner-border-sm" role="status" v-else>
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      form: {
        title: this.blog.title,
        content: this.blog.content,
      },
      loading: false,
    };
  },
  methods: {
    async update() {
      try {
        await this.$axios.$patch(`/blogs/${this.blog.id}`, {
          title: this.form.title,
          content: this.form.content,
        });
        alert("Blog has been updated");
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
