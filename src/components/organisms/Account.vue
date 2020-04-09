<template>
  <div>
    <v-card class="pa-0">
      <div>
        <v-avatar size="20%" class="mt-5">
          <v-img :src="userInfo.pictureUrl" contain></v-img>
        </v-avatar>
        <v-spacer></v-spacer>
      </div>
      <div class="mt-4">
        <v-divider />
        <v-card-subtitle class="pa-1">Email</v-card-subtitle>
        <v-card-text class="pa-1">{{ userInfo.email }}</v-card-text>

        <v-divider />
        <v-card-subtitle class="pa-1">Name</v-card-subtitle>
        <v-card-text class="pa-1">{{ "未設定" }}</v-card-text>
        <v-card-text class="pa-1 grey--text"
          >※ アプリ上では表示されません</v-card-text
        >

        <v-divider />
        <v-card-subtitle class="pa-1">Nickname</v-card-subtitle>
        <v-card-text class="pa-1">{{
          userInfo.nickname || "未設定"
        }}</v-card-text>
        <v-card-text class="pa-1 grey--text"
          >※ アプリ上で表示されます</v-card-text
        >

        <v-divider />
        <v-card-subtitle class="pa-1">Birthday</v-card-subtitle>
        <v-card-text class="pa-1">{{ "未設定" }}</v-card-text>

        <v-divider />
        <v-card-subtitle class="pa-1">Gender</v-card-subtitle>
        <v-card-text class="pa-1">{{ "未設定" }}</v-card-text>

        <v-divider />
        <v-card-subtitle class="pa-1">Profile</v-card-subtitle>
        <v-card-text class="pa-1">{{ "未設定" }}</v-card-text>
      </div>
    </v-card>

    <v-btn outlined width="98%" @click="logout" class="mt-4" color="red"
      >ログアウト</v-btn
    >
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { BizToiUser } from "@/axios/biztoi";
import axios from "axios";
import router from "@/router";

@Component
export default class Account extends Vue {
  @Prop({ default: {} }) private userInfo!: BizToiUser;
  private logout() {
    axios
      .post(`${process.env.VUE_APP_API_BASE_URL}/logout`)
      .finally(() => router.push("/"));
  }
}
</script>
