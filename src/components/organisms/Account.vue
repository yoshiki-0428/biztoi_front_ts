<template>
  <div class="account_page">
    <v-card>
      <div class="userProfile">
        <v-avatar size="80px" color="primary" class="avater mt-5">
          <v-icon dark>mdi-account-circle</v-icon>
        </v-avatar>
        <v-card-title class="justify-center">User Name</v-card-title>
        <v-card-subtitle class="justify-center">@User id</v-card-subtitle>
        <v-card-title class="justify-center">User Info</v-card-title>
        <v-card-text class="caption">
          Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。
          Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。
          Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。
        </v-card-text>
        <hr />
        <v-card-actions class="mb-4">
          <v-row class="mx-5 mt-10 justify-space-around">
            <v-col md-4>
              <v-list-item class="flex-column">
                <div class="ansNumber mb-3">
                  <p class="mt-4 display-1" style="color:blue">5</p>
                </div>
                <v-list-item-title class="subtitle-1">
                  <v-icon size="20px" class="mr-2 pb-1">mdi-pencil</v-icon>Your
                  Answers
                </v-list-item-title>
              </v-list-item>
            </v-col>
            <v-col md-4>
              <v-list-item class="flex-column">
                <div class="likeNumber mb-3">
                  <p class="mt-4 display-1" style="color:blue">12</p>
                </div>
                <v-list-item-title class="subtitle-1">
                  <v-icon size="20px" class="mr-2 pb-1">mdi-thumb-up</v-icon
                  >Like Answers
                </v-list-item-title>
              </v-list-item>
            </v-col>
            <v-col md-4>
              <v-list-item class="flex-column">
                <div class="favNumber mb-3">
                  <p class="mt-4 display-1" style="color:blue">10</p>
                </div>
                <v-list-item-title class="subtitle-1">
                  <v-icon size="20px" class="mr-2 pb-1">mdi-heart</v-icon
                  >Favorite Books
                </v-list-item-title>
              </v-list-item>
            </v-col>
          </v-row>
        </v-card-actions>
      </div>
      <hr />
      <v-card-title class="justify-center">Your Profile</v-card-title>
      <div class="userName">
        <v-card-subtitle>User Name</v-card-subtitle>
        <v-card-text>User Nameが入ります。</v-card-text>
      </div>
      <div class="userEmail">
        <v-card-subtitle>Email</v-card-subtitle>
        <v-card-text>Emailアドレスが入ります。</v-card-text>
      </div>
      <div class="userWebSite">
        <v-card-subtitle>Web Site</v-card-subtitle>
        <v-card-text>Web Siteアドレスがはいります。</v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
export default class Account extends Vue {}
</script>

<style lng="scss" scoped></style>
