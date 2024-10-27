<template>
  <div class="container">
    <div class="row gx-4 gy-4">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-header">Profile</div>
          <div class="card-body">
            <UserInfo
              v-if="this.viewInfoComponent"
              @editPassword="editPassword"
              @editInfo="editInfo"
            />
            <EditPassword
              v-if="this.editPasswordComponent"
              @viewInfo="viewInfo"
            />
            <EditInfo v-if="this.editInfoComponent" @viewInfo="viewInfo" />
          </div>
        </div>
      </div>
      <div class="col-xl-6">
        <p class="text-center">Own Blogs</p>
        <hr />
        <div v-for="(blog, index) in blogs">
          <Blog :blog="blog" @deleted="deleted" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EditPassword from "./EditPassword.vue";
import UserInfo from "./UserInfo.vue";
import EditInfo from "./EditInfo.vue";
import Blog from "./Blog.vue";

export default {
  components: {
    UserInfo,
    EditPassword,
    EditInfo,
    Blog,
  },
  props: {
    blogs: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      viewInfoComponent: true,
      editPasswordComponent: false,
      editInfoComponent: false,
    };
  },
  methods: {
    editPassword() {
      this.viewInfoComponent = false;
      this.editPasswordComponent = true;
    },
    editInfo() {
      this.viewInfoComponent = false;
      this.editInfoComponent = true;
    },
    viewInfo() {
      this.viewInfoComponent = true;
      this.editPasswordComponent = false;
      this.editInfoComponent = false;
    },
    deleted(id) {
      this.$emit("deleted", id);
    }
  },
};
</script>

<style scoped></style>
