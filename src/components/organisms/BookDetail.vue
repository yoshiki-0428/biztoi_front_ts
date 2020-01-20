<template>
  <v-card class="mb-4">
    <v-row justify="center" dense>
      <v-col cols="4" class="pa-0">
        <v-img class="radious" :src="book.pictureUrl"></v-img>
      </v-col>
      <v-col cols="8" class="d-flex flex-column pa-0 pl-1">
        <v-card-text class="text-left pa-0">
          <v-card-title
            v-text="book.title"
            class="font-weight-bold subtitle-2 pa-1"
          ></v-card-title>
        </v-card-text>
        <v-card-text
          v-if="getAuthor(book.author) !== ''"
          class="text-left pa-0"
        >
          <v-card-title class="caption pa-1">
            <v-icon class="mr-2" color="black" size="15">
              fa-pencil-alt
            </v-icon>
            {{ getAuthor(book.author) }}
          </v-card-title>
        </v-card-text>
        <v-card-text
          v-if="getCategory(book.category) !== ''"
          class="text-left pa-0"
        >
          <v-card-title class="caption pa-1">
            <v-icon class="mr-2" color="black" size="15">
              fa-book
            </v-icon>
            {{ getCategory(book.category) }}
          </v-card-title>
        </v-card-text>
        <v-spacer></v-spacer>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon :href="book.linkUrl">
            <v-icon>fa-share</v-icon>
          </v-btn>
          <v-btn icon @click="toggleIsActive">
            <v-icon :color="getColor">mdi-heart</v-icon>
          </v-btn>
          <share-icon-button
            :text="`BizToiアプリで${book.title}の本詳細を見る`"
          />
        </v-card-actions>
      </v-col>
    </v-row>
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
<style scoped>
.v-image {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
</style>
