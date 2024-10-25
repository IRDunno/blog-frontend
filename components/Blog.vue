<template>
  <div>
    <div class="card rounded mb-3">
      <div class="card-body">
        <div class="blog-title">
          <h2 class="fw-bold">This is the title of the blog</h2>
        </div>
        <hr />
        <div class="blog-context">
          <p>This is the context of the blog</p>
        </div>
        <div class="blog-footer d-flex justify-content-between">
          <div class="author">
            <img
              src="../static/profile/default.jpg"
              height="40px"
              class="rounded-circle me-1"
              alt="Profile Picture"
            />
            <span>by (Name of the author) at (Date here)</span>
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

<style>
.pointer {
  cursor: pointer;
}
</style>
