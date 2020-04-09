<template>
  <v-container>
    <book-list></book-list>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BookList from "@/container/BookList";

@Component({
  components: {
    BookList
  }
})
export default class FavoritePage extends Vue {}
</script>
