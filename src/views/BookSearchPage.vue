<template>
  <v-container>
    <breadcrumb :items="paths" />
    <book-search />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BookSearch from "@/container/BookSearch";
import Breadcrumb, {
  IBreadcrumbs
} from "@/components/organisms/Breadcrumb.vue";
import router from "@/router";

@Component({
  components: {
    BookSearch,
    Breadcrumb
  }
})
export default class BookSearchPage extends Vue {
  // ToDo URL ex(/top/search)
  private paths: IBreadcrumbs[] = [
    {
      name: "TOPへ戻る",
      path: "/top",
      disabled: false
    }
  ];
}
</script>
