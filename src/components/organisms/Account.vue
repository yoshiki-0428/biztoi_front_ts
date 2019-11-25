<template>
  <div class="account_page">
    <v-card>
      <div class="secondary bg-color"></div>
      <v-avatar size="100px" color="primary" class="avater">
        <v-icon dark>mdi-account-circle</v-icon>
      </v-avatar>
      <v-card-title class="justify-center">User Name</v-card-title>
      <v-card-subtitle class="justify-center">@User id</v-card-subtitle>
      <v-card-title class="justify-center">User Info</v-card-title>
      <v-card-text>
        Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。
        Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。
        Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。
      </v-card-text>
      <hr />
      <v-card-actions class="mb-4">
        <v-row class="mx-5 mt-10 justify-space-around">
          <v-col md-4>
            <v-list-item class="flex-column">
              <div class="circle ansNumber mb-3">
                <p class="mt-4 display-1">5</p>
              </div>
              <v-list-item-title class="title">
                <v-icon size="25px" class="mr-2 pb-1">mdi-pencil</v-icon>Your
                Answers
              </v-list-item-title>
            </v-list-item>
          </v-col>
          <v-col md-4>
            <v-list-item class="flex-column">
              <div class="circle likeNumber mb-3">
                <p class="mt-4 display-1">12</p>
              </div>
              <v-list-item-title class="title">
                <v-icon size="25px" class="mr-2 pb-1">mdi-thumb-up</v-icon>Like
                Answers
              </v-list-item-title>
            </v-list-item>
          </v-col>
          <v-col md-4>
            <v-list-item class="flex-column">
              <div class="circle favNumber mb-3">
                <p class="mt-4 display-1">10</p>
              </div>
              <v-list-item-title class="title">
                <v-icon size="25px" class="mr-2 pb-1">mdi-heart</v-icon>Favorite
                Books
              </v-list-item-title>
            </v-list-item>
          </v-col>
        </v-row>
      </v-card-actions>
      <hr />
      <v-card-title>Your Profile</v-card-title>
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

<style scoped>
v-card {
  border-radius: 0;
}
.bg-color {
  height: 200px;
  width: 100%;
}
.avater {
  margin-top: -50px;
}
.circle {
  height: 75px;
  width: 75px;
  border-radius: 50%;
  border: 1px solid rgb(0, 0, 0);
}
hr {
  color: grey;
  display: inline-block;
  width: 95%;
}
</style>
