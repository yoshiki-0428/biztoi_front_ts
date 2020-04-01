<template>
  <div>
    <v-autocomplete
      :items="books"
      :loading="isLoading"
      :search-input.sync="word"
      label="書籍検索"
      item-text="title"
      placeholder="Search"
      prepend-inner-icon="mdi-database-search"
      no-filter
      clearable
      outlined
    >
      <template v-slot:item="data">
        <template>
          <v-list-item-content>
            <v-list-item-title v-html="data.item.title"></v-list-item-title>
          </v-list-item-content>
        </template>
      </template>
    </v-autocomplete>
    <book-over-view
      v-for="(book, index) in books"
      :key="index"
      :book="book"
    ></book-over-view>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Book } from "@/axios/biztoi";
import { debounce, isNil } from "lodash";
import BookOverView from "@/components/organisms/BookOverView.vue";

@Component({
  components: {
    BookOverView
  }
})
export default class BookSearch extends Vue {
  isLoading: boolean = false;
  word: string = "";

  @Prop(Array) public books: Book[] | undefined;
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
}
</script>
