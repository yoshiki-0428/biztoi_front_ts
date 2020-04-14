<template>
  <div>
    <v-expansion-panels multiple accordion>
      <v-expansion-panel>
        <v-expansion-panel-header
          class="white--text pt-5 d-flex justify-center title"
        >
          開発者のご紹介
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card
            v-for="(account, index) in accounts"
            :key="index"
            class="mx-2 my-4"
            color="#26c6da"
            :href="account.link"
            target="_blank"
          >
            <v-card-title>
              <v-icon large left>
                mdi-twitter
              </v-icon>
              <span class="font-weight-black">{{ account.profile }}</span>
            </v-card-title>

            <v-card-text v-if="account.profileDetail" class="font-weight-light">
              {{ account.profileDetail }}
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img class="elevation-6" :src="account.picture"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ account.name }}</v-list-item-title>
                </v-list-item-content>
                <v-row align="center" justify="end">
                  <v-icon class="mr-1">mdi-heart</v-icon>
                  <v-icon class="mr-1">mdi-share-variant</v-icon>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Developers extends Vue {
  private accounts = [
    {
      name: "yoshiki__0428",
      link: "https://twitter.com/yoshiki__0428",
      picture:
        "https://pbs.twimg.com/profile_images/1013825851069063169/ULkWPIoC_400x400.jpg",
      profile: "BizToiを0から開発した人",
      profileDetail:
        "技術選定から構成までを考えてアプリを作成。API開発から最新のフロントエンド開発, インフラ構築までなんでも屋さん"
    },
    {
      name: "Match_Books",
      link: "https://twitter.com/Match_Books",
      picture:
        "https://pbs.twimg.com/profile_images/1234072746784505856/V-7wYjCq_400x400.jpg",
      profile: "BizToiを考案した人",
      profileDetail: ""
    },
    {
      name: "ma-ryu",
      link: "",
      picture: "",
      profile: "BizToiフロントを開発した人",
      profileDetail: ""
    }
  ];
}
</script>
