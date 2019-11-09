<template>
  <div>
    <div v-for="item in books" :key="item.id">
      <book-detail :book="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Book } from "@/axios";
import BookDetail from "@/components/organisms/BookDetail.vue";

@Component({
  components: {
    BookDetail
  }
})
export default class BookList extends Vue {
  @Prop(Array) private books: Array<Book> | undefined;
}
</script>
