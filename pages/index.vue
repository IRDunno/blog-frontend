<template>
  <div class="container">
    <div class="header mb-3">
      <h1 class="display-3">See the Latest Blogs</h1>
    </div>
    <div v-for="(blog, index) in blogs" :key="blog.id">
      <Blog :blog="blog" @deleted="removeBlog" />
    </div>
     <Pagination :metaLinks="metaLinks" @urlBlog="loadBlog" />
  </div>
</template>

<script>
import Blog from '~/components/features/blogs/Blog.vue';
import Pagination from '~/components/Pagination.vue';

export default {
  components: {
    Blog,
    Pagination,
  },
  data() {
    return {
      blogs: [],
      metaLinks: {},
    };
  },
  async asyncData({ $axios }) {
    const response = await $axios.$get("/blogs");
    console.log(response)
    return { blogs: response.data, metaLinks: response.meta };
  },
  methods: {
    removeBlog(id) {
      this.blogs = this.blogs.filter((blog) => blog.id != id);
    },
    loadBlog(data) {
      this.blogs = data;
    }
  },
};
</script>
