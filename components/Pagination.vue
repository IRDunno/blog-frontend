<template>
  <div>
    <nav>
      <ul class="pagination">
        <li class="page-item" v-for="(link, index) in links" :key="index">
          <a
            class="page-link"
            href="#"
            aria-label="link.label"
            @click="loadMore(link.url)"
          >
            <span aria-hidden="true" v-if="link.label === '&laquo; Previous'"
              >&laquo;</span
            >
            <span aria-hidden="true" v-else-if="link.label === 'Next &raquo;'"
              >&raquo;</span
            >
            <span v-else>{{ link.label }}</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
  methods: {
    async loadMore(link) {
      if (link !== null) {
        const response = await this.$axios.$get(link);
        this.$emit("urlBlog", response.data);
      }
    },
  },
  mounted() {
    console.log(this.links);
  },
};
</script>

<style scoped></style>
