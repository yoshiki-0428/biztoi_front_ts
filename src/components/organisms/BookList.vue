<template>
  <div>
    <div v-for="item in books" :key="item.id">
      <book-over-view :book="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Book } from "@/axios";
import BookOverView from "@/components/organisms/BookOverView.vue";

@Component({
  components: {
    BookOverView
  }
})
export default class BookList extends Vue {
  @Prop(Array) private books: Array<Book> | undefined;
}
</script>
