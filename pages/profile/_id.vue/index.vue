<template>
  <div class="container">
    <Profile :blogs="blogs" @deleted="deleted" />
  </div>
</template>

<script>
import Profile from "~/components/features/profile/Profile.vue";
export default {
  middleware: ["auth"],
  components: {
    Profile,
  },
  data() {
    return {
      blogs: [],
    };
  },
  async asyncData({ $axios, $auth }) {
    const response = await $axios.$get(`/blogs/user/${$auth.user.id}`);
    return { blogs: response.data };
  },
  methods: {
    deleted(id) {
      this.blogs = this.blogs.filter(blog => blog.id != id);
    }
  }
};
</script>

<style lang="scss" scoped></style>
