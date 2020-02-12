<template>
  <v-card class="mb-4">
    <v-row dense>
      <v-col :cols="colImg" class="pa-0 pl-1">
        <v-img height="100%" :src="book.pictureUrl" />
      </v-col>
      <v-col :cols="colText" class="d-flex flex-column">
        <v-card-text class="text-left pa-1 pl-1">
          <v-card-title
            v-text="book.title"
            class="font-weight-bold pa-0 subtitle-2"
          ></v-card-title>
        </v-card-text>
        <v-card-text
          v-if="
            Array.isArray(book.author) &&
              book.author.length >= 1 &&
              isMinimum == false
          "
          class="alignText pa-1 ml-1"
        >
          <v-card-title class="caption pa-0">
            <v-icon class="mr-1" color="black" size="12">
              fa-pencil-alt
            </v-icon>
            {{ joinArray(book.author) }}
          </v-card-title>
        </v-card-text>
        <v-card-text
          v-if="
            Array.isArray(book.category) &&
              book.category.length >= 1 &&
              isMinimum == false
          "
          class="text-left pa-1 ml-1"
        >
          <v-card-title class="caption pa-0">
            <v-icon class="mr-1" color="black" size="12">
              fa-book
            </v-icon>
            {{ joinArray(book.category) }}
          </v-card-title>
        </v-card-text>
        <v-spacer></v-spacer>
        <v-card-actions class="pa-0 mb-1">
          <v-spacer></v-spacer>
          <v-btn icon :href="book.linkUrl">
            <v-icon>fa-share</v-icon>
          </v-btn>
          <v-btn icon @click="toggleIsActive">
            <v-icon :color="getColor">mdi-heart</v-icon>
          </v-btn>
          <share-icon-button
            class="mr-1"
            :text="`BizToiアプリで${book.title}の本詳細を見る`"
          />
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue, Watch } from "vue-property-decorator";
import { Book, SendLikeInfo } from "@/axios/biztoi";
import ShareIconButton from "@/components/atoms/ShareIconButton.vue";
import { watch } from "fs";
@Component({
  components: { ShareIconButton }
})
export default class BookDetail extends Vue {
  @Prop({ default: false }) private isMinimum!: boolean;
  private get colImg(): Number {
    if (this.isMinimum) {
      return 2;
    } else {
      return 4;
    }
  }
  private get colText(): Number {
    if (this.isMinimum) {
      return 10;
    } else {
      return 8;
    }
  }
  @Prop({ required: true }) private book!: Book;
  private isActive: boolean = false;
  private get getColor(): string {
    return this.book.favorite ? "pink" : "";
  }
  private toggleIsActive() {
    this.book.favorite = !this.book.favorite;
    this.onClick({ id: this.book.id, active: this.book.favorite });
  }
  private joinArray(ary: string[]): string | undefined | null {
    return ary.join();
  }
  @Emit("on-click-favorite")
  private onClick(sendLikeInfo: SendLikeInfo) {}
}
</script>
<style lang="scss" scoped>
.v-image {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
</style>
