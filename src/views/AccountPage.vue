<template>
  <account />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Account from "@/components/organisms/Account.vue";

@Component({
  components: {
    Account
  }
})
export default class TopPage extends Vue {}
</script>
