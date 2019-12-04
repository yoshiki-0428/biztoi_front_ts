<template>
  <v-container class="pa-0" style="padding:0px;">
    <div class="grey pb-5" style="height:100px;width:100%;"></div>
    <v-avatar
      size="100px"
      style="position:absolute;left:0;right:0;margin:auto;margin-top:-50px;overflow:hidden;"
    >
      <v-img src="https://picsum.photos/100/100" contain></v-img>
    </v-avatar>
    <div class="pt-10">
      <v-card-title class="justify-center pt-5">User Name</v-card-title>
      <v-card-subtitle class="justify-center">@User ID</v-card-subtitle>
      <v-card-title class="justify-center">User Info</v-card-title>
      <v-card-text class="caption">
        Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。
        Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。
        Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。
      </v-card-text>
      <v-divider />
      <v-card-actions class="mb-4">
        <v-row class="mx-5 mt-10 justify-space-around">
          <v-col md-4>
            <v-list-item class="flex-column">
              <div class="mb-3">
                <p class="mt-3 display-1" style="color:blue">5</p>
              </div>
              <v-list-item-title class="subtitle-1">
                <v-icon size="20px" class="mr-2 pb-1">mdi-pencil</v-icon>
                Your Answers
              </v-list-item-title>
            </v-list-item>
          </v-col>
          <v-col md-4>
            <v-list-item class="flex-column">
              <div class="mb-3">
                <p class="mt-3 display-1" style="color:blue">12</p>
              </div>
              <v-list-item-title class="subtitle-1">
                <v-icon size="20px" class="mr-2 pb-1">mdi-thumb-up</v-icon>
                Like Answers
              </v-list-item-title>
            </v-list-item>
          </v-col>
          <v-col md-4>
            <v-list-item class="flex-column">
              <div class="mb-3">
                <p class="mt-3 display-1" style="color:blue">10</p>
              </div>
              <v-list-item-title class="subtitle-1">
                <v-icon size="20px" class="mr-2 pb-1">mdi-heart</v-icon>
                Favorite Books
              </v-list-item-title>
            </v-list-item>
          </v-col>
        </v-row>
      </v-card-actions>
    </div>
    <v-divider />
    <v-card-title class="justify-center">Your Profile</v-card-title>
    <div>
      <v-card-subtitle>User Name</v-card-subtitle>
      <v-card-text>User Nameが入ります。</v-card-text>
    </div>
    <v-card-subtitle>Email</v-card-subtitle>
    <v-card-text>Emailアドレスが入ります。</v-card-text>
    <div>
      <v-card-subtitle>Web Site</v-card-subtitle>
      <v-card-text>Web Siteアドレスがはいります。</v-card-text>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
export default class Account extends Vue {}
</script>

<style lng="scss" scoped></style>
