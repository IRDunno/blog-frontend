<template>
  <div class="container">
    <div class="header mb-3">
      <h1 class="display-3">See the Latest Blogs</h1>
    </div>
    <div v-for="(blog, index) in blogs" :key="blog.id">
      <Blog :blog="blog" @deleted="removeBlog" />
    </div>
  </div>
</template>

<script>
import Blog from '~/components/features/blogs/Blog.vue';

export default {
  components: {
    Blog,
  },
  data() {
    return {
      blogs: [],
    };
  },
  async asyncData({ $axios }) {
    const response = await $axios.$get("/blogs");
    return { blogs: response.data };
  },
  methods: {
    removeBlog(id) {
      this.blogs = this.blogs.filter((blog) => blog.id != id);
    },
  },
};
</script>
