<template>
  <v-container>
    <breadcrumb :items="paths" />
    <book-list></book-list>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BookList from "@/container/BookList";
import Breadcrumb, {
  IBreadcrumbs
} from "@/components/organisms/Breadcrumb.vue";
import router from "@/router";

@Component({
  components: {
    BookList,
    Breadcrumb
  }
})
export default class FavoritePage extends Vue {
  // URL ex(/top/favorite)
  private paths: IBreadcrumbs[] = [
    {
      name: "top",
      path: "/top",
      disabled: false
    }
    // {
    //   name: "accont",
    //   path: `/top/${router.currentRoute.params.accountId}`,
    //   disabled: false
    // }
  ];
}
</script>
