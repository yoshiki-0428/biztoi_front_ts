<template>
  <v-container>
    <book-detail></book-detail>
    <!-- TODO 別コンポーネント化 -->
    <v-expansion-panels multiple>
      <v-expansion-panel>
        <v-expansion-panel-header>Step 1</v-expansion-panel-header>
        <v-expansion-panel-content>
          Some content
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Step 2</v-expansion-panel-header>
        <v-expansion-panel-content>
          Some content
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Step 3</v-expansion-panel-header>
        <v-expansion-panel-content>
          Some content
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BookDetail from "@/container/BookDetail";

@Component({
  components: {
    BookDetail
  }
})
export default class AnswerDetailPage extends Vue {}
</script>
