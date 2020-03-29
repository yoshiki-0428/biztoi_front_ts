<template>
  <v-card class="mb-4">
    <v-row dense>
      <v-col cols="4" class="pa-0 pl-1">
        <router-link :to="'/top/book/' + book.isbn">
          <v-img height="100%" :src="book.pictureUrl" />
        </router-link>
      </v-col>
      <v-col cols="8" class="d-flex flex-column">
        <div class="text-left pa-1">
          <v-card-title v-text="book.title" class="subtitle-2 pa-1">
          </v-card-title>
          <v-card-title v-if="isArray(book.authors)" class="overline px-1 py-0">
            <v-icon class="mr-2" size="10">
              fa-pencil-alt
            </v-icon>
            {{ joinArray(book.authors) }}
          </v-card-title>
          <v-card-text
            v-text="getCutText(book.detail)"
            class="overline pa-1 pt-3"
          >
          </v-card-text>
        </div>
        <v-spacer />
        <v-card-actions class="pa-1">
          <v-spacer />
          <v-btn icon :to="'/top/book/' + book.isbn" class="caption">
            <v-icon class="ml-2">fa-share-square</v-icon>
          </v-btn>
          <v-btn icon @click="toggleIsActive">
            <v-icon :color="getColor">mdi-heart</v-icon>
          </v-btn>
          <share-icon-button
            :url="shareUrl"
            :text="`BizToiアプリで${book.title}の本詳細を見る`"
          />
        </v-card-actions>
      </v-col>
      <!-- <v-col cols="4" class="pa-0">
        <v-img :src="book.pictureUrl" contain height="100%"></v-img>
      </v-col>
      <v-col cols="8" class="pa-2">
        <div class="text-left">
          <v-card-title
            v-text="book.title"
            class="subtitle-2 pa-0 pb-1"
          ></v-card-title>
          
        </div>
        
      </v-col> -->
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import { Book, SendLikeInfo } from "@/axios/biztoi";
import ShareIconButton from "@/components/atoms/ShareIconButton.vue";
@Component({
  components: { ShareIconButton }
})
export default class BookOverView extends Vue {
  @Prop({ required: true }) private book!: Book;
  private getCutText(cutText: string): string {
    const cutNum = 30;
    return cutText.length > cutNum
      ? `${cutText.substring(0, cutNum)} ... `
      : cutText;
  }
  private isArray(arr: string[]): boolean {
    return Array.isArray(arr) && arr.length >= 1;
  }
  private joinArray(ary: string[]): string | undefined | null {
    return ary.join();
  }
  private get shareUrl(): string {
    return `${window.location.origin}/top/book/${this.book.isbn}`;
  }
  private get getColor(): string {
    return this.book.favorite ? "pink" : "";
  }
  private toggleIsActive() {
    this.book.favorite = !this.book.favorite;
    this.onClick({ id: this.book.isbn, active: this.book.favorite });
  }
  @Emit("on-click-favorite")
  private onClick(sendLikeInfo: SendLikeInfo) {}
}
</script>
