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
                  >Edit</nuxt-link
                >
              </li>
              <li>
                <a
                  @click="deleteBlog(blog.id)"
                  class="dropdown-item text-warning"
                  href="#"
                  >Delete</a
                >
              </li>
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
              :src="blog.user.image"
              height="40px"
              class="rounded-circle me-1"
              alt="Profile Picture"
            />
            <span
              >created {{ blog.created_at }}
              <span v-if="blog.created_at != blog.updated_at"
                >, updated {{ blog.updated_at }}</span
              ></span
            >
          </div>
          <div class="ms-auto d-flex align-items-center gap-1">
            <i class="fa-regular fa-heart" v-if="blog.like_count === 0"></i>
            <i class="fa-solid fa-heart" v-if="blog.like_count > 0"></i>
            <span>{{ blog.like_count }}</span>
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
      this.$emit("deleted", id);
    },
  },
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
