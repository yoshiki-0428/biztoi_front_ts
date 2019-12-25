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
    <v-row>
      <v-spacer></v-spacer>
      <v-flex xs6>
        <v-select
          class="pr-4"
          :items="targets"
          label="絞り込み検索"
          return-object
          v-model="selected"
        ></v-select>
      </v-flex>
    </v-row>
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
  targets: string[] = ["all", "title", "author"];
  selected: string = "all";

  @Prop(Array)
  public books: Book[] | undefined;

  @Watch("word")
  public wordChanged() {
    if (!isNil(this.word)) {
      this.isLoading = true;
      this.debounceSearchBooks();
    }
  }
  @Watch("selected")
  public targetsChanged() {
    if (!isNil(this.word) && !isNil(this.targets)) {
      this.isLoading = true;
      this.debounceSearchBooks();
    }
  }
  private debounceSearchBooks: Function = debounce(
    () => this.searchWord(),
    400
  );
  private searchWord() {
    this.$emit("search-word", BookSearch.getResource(this.selected, this.word));
    this.isLoading = false;
  }
  private static getResource(searchType: string, word: string): string {
    if (searchType === "author") {
      return `inauthor:${word}`;
    } else if (searchType === "title") {
      return `intitle:${word}`;
    } else {
      return word;
    }
  }
}
</script>
