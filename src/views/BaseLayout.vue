<template>
  <div>
    <!-- TODO header footer -->
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

export default class BaseLayout extends Vue {}
</script>
