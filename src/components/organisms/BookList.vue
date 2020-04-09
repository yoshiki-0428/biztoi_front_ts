<template>
  <div v-if="existFavorite()">
    <div v-for="item in books" :key="item.id">
      <book-detail :is-routing="true" :book="item" />
    </div>
  </div>
  <v-card v-else>
    <v-card-title class="subtitle-1">
      まだお気に入りの登録がありません
    </v-card-title>
    <v-card-text class="text-left">
      こちらから人気な本を登録してみませんか？
    </v-card-text>
    <v-card-actions>
      <v-btn to="/top" exact outlined block color="primary">
        人気な本を探す
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Book } from "@/axios/biztoi";
import BookDetail from "@/components/organisms/BookDetail.vue";

@Component({
  components: {
    BookDetail
  }
})
export default class BookList extends Vue {
  @Prop(Array) private books!: Array<Book> | undefined;
  private existFavorite(): boolean {
    if (this.books) {
      if (this.books.length > 0) {
        return true;
      } else return false;
    }
    return false;
  }
}
</script>
