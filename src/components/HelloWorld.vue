<template>
  <div class="hello">
    {{ msg }}
    <book-list></book-list>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BookList from "@/container/BookList";
@Component({
  components: { BookList }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>
