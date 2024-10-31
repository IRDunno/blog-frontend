<template>
  <div>
    <nav>
      <ul class="pagination">
        <li
          v-for="(link, index) in metaLinks.links"
          :key="index"
          :class="['page-item', { active: link.label == meta.current_page }]"
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
      if (link.url !== null) {
        const response = await this.$axios.$get(link.url);
        this.$emit("urlBlog", response.data);
        this.meta = response.meta;
        console.log(response.meta.links);
      }
    },
  },
  mounted() {
    console.log(this.metaLinks);
  },
};
</script>

<style scoped></style>
