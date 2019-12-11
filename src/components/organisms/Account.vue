<template>
  <v-container class="pa-0">
    <div>
      <div class="grey" style="height:100px;"></div>
      <v-avatar
        size="100px"
        style="position:absolute; left:0; right:0; margin:auto; margin-top:-50px; overflow:hidden;"
      >
        <v-img src="https://picsum.photos/100/100" contain></v-img>
      </v-avatar>
      <div style="height:50px;"></div>
    </div>
    <v-container class="px-0">
      <v-card-title class="justify-center">User Name</v-card-title>
      <v-card-subtitle class="justify-center">@User ID</v-card-subtitle>
      <v-divider />
      <v-card-actions>
        <v-row class="justify-space-around">
          <v-col cols="4" class="pa-0">
            <div>
              <p class="display-1" style="color:blue;">5</p>
            </div>
            <v-icon>mdi-pencil</v-icon>
            <v-card-title class="subtitle-1">
              Your Answer
            </v-card-title>
          </v-col>
          <v-col cols="4" class="pa-0">
            <div>
              <p class="display-1" style="color:blue;">122</p>
            </div>
            <v-icon>mdi-thumb-up</v-icon>
            <v-card-title class="subtitle-1">
              Like Answer
            </v-card-title>
          </v-col>
          <v-col cols="4" class="pa-0">
            <div>
              <p class="display-1" style="color:blue;">10</p>
            </div>
            <v-icon>mdi-heart</v-icon>
            <v-card-title class="subtitle-1">
              Favorite Book
            </v-card-title>
          </v-col>
        </v-row>
      </v-card-actions>
      <v-divider />

      <v-card-title class="justify-center">Profile Detail</v-card-title>
      <v-card-text class="caption">
        Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。
        Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。
        Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。
      </v-card-text>
      <v-divider />

      <v-card-title class="justify-center">Your Profile</v-card-title>
      <div>
        <v-card-subtitle>User Name</v-card-subtitle>
        <v-card-text>Biztoi Toi</v-card-text>
      </div>
      <div>
        <v-card-subtitle>Email</v-card-subtitle>
        <v-card-text>biztoi@biztoi.jp</v-card-text>
      </div>
      <div>
        <v-card-subtitle>Web Site</v-card-subtitle>
        <v-card-text>https://biztoi.jp</v-card-text>
      </div>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
export default class Account extends Vue {}
</script>
