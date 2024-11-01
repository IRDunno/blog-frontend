<template>
  <div>
    <nav class="d-flex justify-content-between align-items-center">
      <ul class="pagination mb-0">
        <!-- PREVIOUS BUTTON START -->
        <li
          :class="[
            'page-item',
            { active: meta.links[0].active },
            { disabled: meta.links[0].url === null },
          ]"
        >
          <a href="#" class="page-link" @click="loadMore(meta.links[0])">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <!-- PREVIOUS BUTTON END -->

        <!-- PAGINATION START -->
        <li
          v-for="(link, index) in meta.links.slice(paginationSlice, (paginationSlice + pages))"
          v-if="link.label !== `Next &raquo;`"
          :key="index"
          :class="['page-item', { active: link.active }]"
        >
          <a
            class="page-link"
            href="#"
            :aria-label="link.label"
            @click="loadMore(link)"
          >
            <span>{{ link.label }}</span>
          </a>
        </li>
        <!-- PAGINATION END -->

        <!-- NEXT BUTTON START -->
        <li
          :class="[
            'page-item',
            { active: meta.links[meta.last_page + 1].active },
          ]"
        >
          <a
            href="#"
            :class="[
              'page-link',
              { disabled: meta.current_page === meta.last_page },
            ]"
            @click="loadMore(meta.links[meta.last_page + 1])"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
        <!-- NEXT BUTTON END -->
      </ul>
      <span
        >{{ meta.to - meta.per_page }}-{{ meta.to }} out of
        {{ meta.total }} entries</span
      >
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
    pages: {
      type: Number,
      required: true,
    }
  },
  data() {
    return {
      meta: {},
      paginationSlice: 1,
    };
  },
  methods: {
    async loadMore(link) {
      if (link.url !== null) {
        const response = await this.$axios.$get(link.url);
        this.$emit("urlBlog", response.data);
        this.meta = response.meta;

        const halfOfPage = this.pages / 2 != 0 ? this.pages / 2 : (this.pages / 2) - 1
        if ((this.meta.last_page - this.meta.current_page) > 0 && this.meta.current_page > halfOfPage) {
          const setSlice = this.meta.current_page - halfOfPage;
          console.log(this.meta.last_page - this.meta.current_page)
          this.paginationSlice = setSlice;
        } else {
          if (this.paginationSlice < 3 && this.paginationSlice > 1) this.paginationSlice++;
        }
      }
    },
  },
  created() {
    this.meta = this.metaLinks;
  },
};
</script>

<style scoped></style>
