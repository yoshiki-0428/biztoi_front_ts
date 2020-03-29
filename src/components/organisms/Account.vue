<template>
  <v-card class="pa-0">
    <div>
      <v-avatar size="150px" class="mt-5">
        <v-img :src="userInfo.pictureUrl" contain></v-img>
      </v-avatar>
      <v-spacer></v-spacer>
    </div>
    <div>
      <v-card-title class="justify-center pa-1">
        {{ userInfo.nickname }}
      </v-card-title>
      <v-card-text class="pa-1">
        {{ userInfo.id }}
      </v-card-text>
      <v-divider />
      <v-card-subtitle class="pa-1">Email</v-card-subtitle>
      <v-card-text class="pa-1">{{ userInfo.email }}</v-card-text>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { BizToiUser } from "@/axios/biztoi";

@Component
export default class Account extends Vue {
  @Prop({ default: {} }) private userInfo!: BizToiUser;
}
</script>
