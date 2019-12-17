<template>
  <v-container>
    <book-detail></book-detail>
    <!-- TODO 別コンポーネント化 -->
    <v-expansion-panels multiple accordion v-model="panel">
      <v-expansion-panel>
        <v-expansion-panel-header class="display-1"
          >Step 1</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          Some content
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header class="display-1"
          >Step 2</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          Some content
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header class="display-1"
          >Step 3</v-expansion-panel-header
        >
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
export default class AnswerDetailPage extends Vue {
  private panel: number[] = [0, 1, 2];
}
</script>
