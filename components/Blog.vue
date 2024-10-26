<template>
  <div>
    <div class="card rounded mb-3">
      <div class="card-body">
        <div
          class="blog-title d-flex justify-content-between align-items-center"
        >
          <h2 class="fw-bold">{{ blog.title }}</h2>
          <div class="dropdown">
            <i class="fa-solid fa-ellipsis" data-bs-toggle="dropdown"></i>
            <ul class="dropdown-menu">
              <li>
                <nuxt-link
                  class="dropdown-item text-primary"
                  :to="`/blogs/edit/${blog.id}`"
                  v-if="authenticated && blog.user.id === user.id"
                  >Edit</nuxt-link
                >
              </li>
              <li><a @click="deleteBlog(blog.id)" class="dropdown-item text-warning" href="#">Delete</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div class="blog-context">
          <p>{{ blog.content }}</p>
        </div>
        <div class="blog-footer d-flex justify-content-between">
          <div class="author">
            <img
              src="../static/profile/default.jpg"
              height="40px"
              class="rounded-circle me-1"
              alt="Profile Picture"
            />
            <span>by {{ blog.user.name }} at {{ blog.created_at }}</span>
          </div>
          <div class="ms-auto d-flex align-items-center gap-1 pointer">
            <!-- <i class="fa-regular fa-heart"></i> -->
            <i class="fa-solid fa-heart"></i>
            <span>1</span>
          </div>
        </div>
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
  methods: {
    async deleteBlog(id) {
      await this.$axios.$delete(`/blogs/${id}`);
      alert("Blog deleted");
      this.$emit("deleted", id); // Emit event with blog ID
    }
  }
};
</script>

<style>
.pointer {
  cursor: pointer;
}

.fa-ellipsis {
  cursor: pointer;
}
</style>
