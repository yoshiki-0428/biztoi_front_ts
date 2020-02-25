<template>
  <div>
    <v-breadcrumbs :items="items" class="pl-0 pt-0">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item
          exact
          :disabled="item.disabled"
          :to="item.path"
          class="subtitle-1"
        >
          <v-icon v-if="item.name === 'top'" size="20">mdi-home</v-icon>
          <v-card-text v-else>{{ item.name }}</v-card-text>
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import router from "@/router";

export interface IBreadcrumbs {
  name: string;
  path: string;
  disabled: boolean;
}
@Component
export default class Breadcrumb extends Vue {
  @Prop({ default: () => [] })
  private items!: IBreadcrumbs[];
}
</script>
