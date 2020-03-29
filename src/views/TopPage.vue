<template>
  <v-container>
    <book-slide title="人気ランキング" />
    <book-slide title="いいねランキング" />
    <book-slide title="あなたへのおすすめ" />
    <book-slide title="回答途中の本" />
    <contact-form />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BookSlide from "@/container/BookSlide";
import ContactForm from "@/components/organisms/ContactForm.vue";

@Component({
  components: {
    BookSlide,
    ContactForm
  }
})
export default class TopPage extends Vue {}
</script>
