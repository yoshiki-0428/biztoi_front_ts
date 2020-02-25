<template>
  <v-container>
    <breadcrumb :items="paths" />
    <account />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Account from "@/components/organisms/Account.vue";
import Breadcrumb, {
  IBreadcrumbs
} from "@/components/organisms/Breadcrumb.vue";
import router from "@/router";

@Component({
  components: {
    Account,
    Breadcrumb
  }
})
export default class TopPage extends Vue {
  // URL ex(/top/account)
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
