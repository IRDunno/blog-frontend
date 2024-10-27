<template>
  <div class="container">
    <div class="row gx-4 gy-4">
      <div class="col-lg-6">
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
      <div class="col-lg-6">
        <div class="card">
          <div class="card-header">Blogs</div>
          <div class="card-body">Body</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EditPassword from "./EditPassword.vue";
import UserInfo from "./UserInfo.vue";
import EditInfo from "./EditInfo.vue";

export default {
  components: {
    UserInfo,
    EditPassword,
    EditInfo,
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
  },
};
</script>

<style scoped></style>
