<template>
  <div>
    <nav class="d-flex justify-content-between align-items-center">
      <ul class="pagination mb-0">
        <li
          v-for="(link, index) in meta.links"
          :key="index"
          :class="['page-item', { active: link.active }]"
        >
          <a
            class="page-link"
            href="#"
            aria-label="link.label"
            @click="loadMore(link)"
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
      <span>{{ meta.to - 3 }}-{{ meta.to }} out of {{ meta.total }} entries</span>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    metaLinks: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      meta: {},
    };
  },
  methods: {
    async loadMore(link) {
      // console.log(link.url);
      if (link.label === 'Next &raquo;') link.url = this.meta.path + '?page=' + (this.meta.current_page + 1)
      if (link.url !== null) {
        const response = await this.$axios.$get(link.url);
        this.$emit("urlBlog", response.data);
        this.meta = response.meta;
        console.log(this.meta)
        console.log(response.meta.links);
      }
    },
  },
  mounted() {
    this.meta = this.metaLinks;
    // console.log(this.metaLinks);
  },
};
</script>

<style scoped></style>
