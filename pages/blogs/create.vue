<template>
  <div>
    <CreateBlog />
  </div>
</template>

<script>
import CreateBlog from "~/components/features/blogs/CreateBlog.vue";

export default {
  middleware: ["auth"],
  components: {
    CreateBlog,
  },
};
</script>

<style lang="scss" scoped></style>
