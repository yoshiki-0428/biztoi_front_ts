<template>
  <div>
    <v-text-field
      outlined
      label="書籍検索"
      :loading="isLoading"
      v-model="word"
      prepend-inner-icon="mdi-database-search"
    ></v-text-field>
    <v-item-group>
      <v-container class="pa-0">
        <v-row>
          <v-col
            v-for="(book, index) in books"
            :key="index"
            class="d-flex child-flex"
            cols="4"
          >
            <v-card flat class="d-flex" :to="`/top/book/${book.isbn}`">
              <v-img
                :src="book.pictureUrl"
                :lazy-src="book.pictureUrl"
                aspect-ratio="0.666"
                class="grey lighten-2"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue, Watch } from "vue-property-decorator";
import { Book, SendLikeInfo } from "@/axios/biztoi";
import { debounce, isNil } from "lodash";

@Component
export default class BookSearch extends Vue {
  @Prop(Array) public books: Book[] | undefined;
  private isLoading: boolean = false;
  private word: string = "";

  @Watch("word")
  public wordChanged() {
    if (!isNil(this.word)) {
      this.isLoading = true;
      this.debounceSearchBooks();
    }
  }

  private debounceSearchBooks: Function = debounce(
    () => this.searchWord(),
    1000
  );

  private searchWord() {
    this.$emit("search-word", this.word);
    this.isLoading = false;
  }

  @Emit("on-click-favorite")
  private onClick(sendLikeInfo: SendLikeInfo) {}
}
</script>
