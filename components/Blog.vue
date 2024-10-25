<template>
  <div>
    <div class="card rounded mb-3">
      <div class="card-body">
        <div class="blog-title">
          <h2 class="fw-bold">{{ blog.title }}</h2>
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
      required: true
    }
  }
}
</script>

<style>
.pointer {
  cursor: pointer;
}
</style>
