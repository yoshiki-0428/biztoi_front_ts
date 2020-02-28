<template>
  <div>
    <v-breadcrumbs large :items="items" class="pa-1 mb-3">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item exact :disabled="item.disabled" :to="item.path">
          <v-icon v-if="item.name === 'top'" size="20">mdi-home</v-icon>
          <v-list-item-title v-else>{{ item.name }}</v-list-item-title>
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

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
