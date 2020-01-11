<template>
  <v-card class="mb-4">
    <div>
      <v-img
        contain
        max-height="250"
        :src="book.pictureUrl"
        class="text-center"
      ></v-img>
      <div>
        <v-card-title v-text="book.title" class="justify-center"></v-card-title>
        <v-card-subtitle
          v-text="book.detail"
          class="justify-center"
        ></v-card-subtitle>
      </div>
    </div>

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
  @Emit("on-click-favorite")
  private onClick(sendLikeInfo: SendLikeInfo) {}
}
</script>
