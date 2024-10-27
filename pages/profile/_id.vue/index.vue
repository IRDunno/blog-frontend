<template>
  <div class="container">
    <Profile :blogs="blogs" />
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
};
</script>

<style lang="scss" scoped></style>
