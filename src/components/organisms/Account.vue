<template>
  <v-card class="pa-0">
    <div>
      <v-avatar size="150px" class="mt-5">
        <v-img :src="userInfo.pictureUrl" contain></v-img>
      </v-avatar>
      <v-spacer></v-spacer>
    </div>
    <v-container>
      <v-card-title class="justify-center">
        {{ userInfo.nickname }}
      </v-card-title>
      <v-card-subtitle class="justify-center">
        {{ userInfo.id }}
      </v-card-subtitle>
      <v-divider />
      <v-card-subtitle>Email</v-card-subtitle>
      <v-card-text>{{ userInfo.email }}</v-card-text>
    </v-container>
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
