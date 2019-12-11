<template>
  <v-container>
    <book-search />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BookSearch from "@/container/BookSearch";

@Component({
  components: {
    BookSearch
  }
})
export default class BookSearchPage extends Vue {}
</script>
