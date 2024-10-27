<template>
  <div>
    <div class="card rounded mb-3">
      <div class="card-body">
        <div
          class="blog-title d-flex justify-content-between align-items-center"
        >
          <h2 class="fw-bold">{{ blog.title }}</h2>
          <div
            class="dropdown"
            v-if="authenticated && blog.user.id === user.id"
          >
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
              src="../../../static/profile/default.jpg"
              height="40px"
              class="rounded-circle me-1"
              alt="Profile Picture"
            />
            <span>by {{ blog.user.name }} at {{ blog.created_at }} <span v-if="blog.created_at != blog.updated_at">, updated {{ blog.updated_at }}</span></span>
          </div>
          <div class="ms-auto d-flex align-items-center gap-1">
            <!-- authenticated start -->
            <i
              @click="like(blog.id)"
              class="fa-regular fa-heart pointer"
              v-if="authenticated && !blog.liked_by_users.some((liker) => liker.id === user?.id)"
            ></i>
            <i
              @click="unlike(blog.id)"
              class="fa-solid fa-heart pointer"
              v-if="authenticated && blog.liked_by_users.some((liker) => liker.id === user?.id)"
            ></i>
            <!-- authenticated end -->
            <!-- guest start -->
            <i
              class="fa-regular fa-heart"
              v-if="!authenticated && blog.like_count === 0"
            ></i>
            <i
              class="fa-solid fa-heart"
              v-if="!authenticated && blog.like_count > 0"
            ></i>
            <!-- guest end -->
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
    async like(id) {
      const response = await this.$axios.$post(`/blogs/${id}/like`);
      this.blog.liked_by_users = response.data.liked_by_users;
      this.blog.like_count = response.data.like_count;
    },
    async unlike(id) {
      const response = await this.$axios.$delete(`/blogs/${id}/unlike`);
      this.blog.liked_by_users = response.data.liked_by_users;
      this.blog.like_count = response.data.like_count;
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
