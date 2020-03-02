<template>
  <v-container>
    <breadcrumb :items="paths" />
    <account />
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Account from "@/components/organisms/Account.vue";
import Breadcrumb, {
  IBreadcrumbs
} from "@/components/organisms/Breadcrumb.vue";

@Component({
  components: {
    Account,
    Breadcrumb
  }
})
export default class AccountPage extends Vue {
  @Prop()
  "userId": string;
  // URL ex(/top/account)
  private paths: IBreadcrumbs[] = [
    {
      name: "top",
      path: "/top",
      disabled: false
    }
    // {
    //   name: "accont",
    //   path: `/top/${this.userId}`,
    //   disabled: true
    // }
  ];
}
</script>
