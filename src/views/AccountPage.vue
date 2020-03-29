<template>
  <v-container>
    <account />
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Account from "@/container/Account";

@Component({
  components: {
    Account
  }
})
export default class AccountPage extends Vue {}
</script>
