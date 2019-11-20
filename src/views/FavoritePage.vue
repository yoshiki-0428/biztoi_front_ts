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
export default class FavoritePage extends Vue {
  created() {
    // eslint-disable-next-line no-console
    console.log("favorite test");
    this.$emit("change-bottom-num", 1);
  }
}
</script>
