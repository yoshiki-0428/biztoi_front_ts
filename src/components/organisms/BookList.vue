<template>
  <div>
    <v-card v-for="book in books" :key="book.id">
      {{ book }}
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Book } from "@/axios";

@Component
export default class BookList extends Vue {
  @Prop(Array) private books: Array<Book> | undefined;
}
</script>
