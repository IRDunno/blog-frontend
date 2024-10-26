<template>
  <div>
    <EditBlog :blog="blog" />
  </div>
</template>

<script>
import EditBlog from "~/components/features/blogs/EditBlog.vue";

export default {
	components: {
		EditBlog,
	},
  data() {
    return {
      blog: [],
    }
  },
  async asyncData({ $axios, params }) {
    const response = await $axios.$get(`/blogs/${params.id}`)
    return { blog: response.data }
  }
};
</script>

<style></style>
