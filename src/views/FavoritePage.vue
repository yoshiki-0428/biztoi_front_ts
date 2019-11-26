<template>
  <div>
    <book-list></book-list>
  </div>
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
