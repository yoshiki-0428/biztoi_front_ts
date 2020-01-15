<template>
  <v-card class="mb-4">
    <v-row>
      <v-col cols="4" class="mt-3 ml-2 pa-1">
        <v-img
          :src="book.pictureUrl"
          max-height="200"
          contain
          class="ma-1"
        ></v-img>
      </v-col>
      <v-col cols="7" class="pb-0">
        <div class="text-left">
          <v-card-title
            v-text="book.title"
            class="font-weight-bold subtitle-2 pt-1"
          ></v-card-title>
        </div>
        <div class="text-left">
          <v-card-title
            v-text="getAuthor(book.author)"
            class="subtitle-2 pt-1"
          ></v-card-title>
        </div>
        <div class="text-left">
          <v-card-title
            v-text="getCategory(book.category)"
            class="subtitle-2 pt-1"
          ></v-card-title>
        </div>
        <div class="text-left ml-2">
          <v-btn color="primary" class="font-weight-bold" :href="book.linkUrl">
            書誌情報
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn icon @click="toggleIsActive">
        <v-icon :color="getColor">mdi-heart</v-icon>
      </v-btn>
      <share-icon-button :text="`BizToiアプリで${book.title}の本詳細を見る`" />
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import { Book, SendLikeInfo } from "@/axios/biztoi";
import ShareIconButton from "@/components/atoms/ShareIconButton.vue";
@Component({
  components: { ShareIconButton }
})
export default class BookOverView extends Vue {
  @Prop({ required: true }) private book!: Book;
  private isActive: boolean = false;
  private get getColor(): string {
    return this.book.favorite ? "pink" : "";
  }
  private toggleIsActive() {
    this.book.favorite = !this.book.favorite;
    this.onClick({ id: this.book.id, active: this.book.favorite });
  }
  private getAuthor(author: string[]): string {
    return author.join();
  }
  private getCategory(category: string[]): string {
    return category.join();
  }
  @Emit("on-click-favorite")
  private onClick(sendLikeInfo: SendLikeInfo) {}
}
</script>
