<template>
  <div class="container">
    <Profile />
  </div>
</template>

<script>
import Profile from "~/components/features/profile/Profile.vue";
export default {
  middleware: ["auth"],
  components: {
    Profile,
  },
};
</script>

<style lang="scss" scoped></style>
