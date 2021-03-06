<template>
  <v-card class="mb-4">
    <v-row dense>
      <v-col :cols="colImg" class="pa-0 pl-1">
        <v-img height="100%" aspect-ratio="0.66" :src="book.pictureUrl" />
      </v-col>
      <v-col :cols="colText" class="d-flex flex-column">
        <v-card-text :class="alignText">
          <v-card-title
            v-text="book.title"
            class="font-weight-bold pa-0 subtitle-2"
          ></v-card-title>
        </v-card-text>
        <v-card-text
          v-if="isArray(book.authors) && !isMinimum"
          :class="alignText"
        >
          <v-card-title :class="infoSize">
            <v-icon class="mr-2" size="10">
              fa-pencil-alt
            </v-icon>
            {{ joinArray(book.authors) }}
          </v-card-title>
        </v-card-text>
        <v-card-text
          v-if="isArray(book.categories) && !isMinimum"
          :class="alignText"
        >
          <v-card-title :class="infoSize">
            <v-icon class="mr-2" size="10">
              fa-book
            </v-icon>
            {{ joinArray(book.categories) }}
          </v-card-title>
        </v-card-text>
        <v-card-text v-if="book.detail && !isMinimum" :class="alignText">
          <v-card-title :class="infoSize" class="">
            {{ book.detail.substring(0, 30) }}...
          </v-card-title>
        </v-card-text>

        <v-spacer />
        <v-card-actions class="pa-0 mb-1">
          <v-spacer />
          <v-btn v-if="isRouting" text small :to="`/top/book/${book.isbn}`"
            >詳細へ</v-btn
          >
          <v-btn icon v-if="book.linkUrl" :href="book.linkUrl" target="_blank">
            <v-icon>fa-registered</v-icon>
          </v-btn>
          <v-btn icon @click="toggleIsActive">
            <v-icon :color="getColor">mdi-heart</v-icon>
          </v-btn>
          <share-icon-button
            :text="`BizToiアプリで${book.title}の本詳細を見る`"
            :url="shareUrl(book.isbn)"
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
import router from "@/router";

@Component({
  components: { ShareIconButton }
})
export default class BookDetail extends Vue {
  alignText: string = "pa-1 ml-1 text-left";
  infoSize: string = "caption pa-0";
  @Prop({ default: false }) private isMinimum!: boolean;
  @Prop({ default: false }) private isRouting!: boolean;
  get colImg(): number {
    return this.isMinimum ? 2 : 4;
  }
  get colText(): number {
    return this.isMinimum ? 10 : 8;
  }
  private isArray(arr: string[]): boolean {
    return Array.isArray(arr) && arr.length >= 1;
  }
  @Prop({ required: true }) private book!: Book;
  private isActive: boolean = false;
  private get getColor(): string {
    return this.book.favorite ? "pink" : "";
  }
  private toggleIsActive() {
    this.book.favorite = !this.book.favorite;
    this.onClick({ id: this.book.isbn, active: this.book.favorite });
  }
  private joinArray(ary: string[]): string | undefined | null {
    return ary.join();
  }
  @Emit("on-click-favorite")
  private onClick(sendLikeInfo: SendLikeInfo) {}

  private shareUrl(isbn: string) {
    return `${location.origin}/top/book/${isbn}`;
  }
}
</script>
<style lang="scss" scoped>
.v-image {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
</style>
