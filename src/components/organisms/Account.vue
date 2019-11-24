<template>
  <div class="account_page">
    <v-card>
      <v-img
        :src="require('@/assets/noimage.png')"
        max-height="200px"
        max-width="100%"
      />
      <v-avatar size="100px" color="indigo" class="avater">
        <v-icon dark>mdi-account-circle</v-icon>
      </v-avatar>
      <v-card-title class="justify-center">
        User Name
      </v-card-title>
      <v-card-subtitle class="justify-center">
        @User id
      </v-card-subtitle>
      <v-card-title class="justify-center">
        User Info
      </v-card-title>
      <v-card-text>
        Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。
        Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。
        Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。Userの説明が入ります。
      </v-card-text>
      <hr />
      <v-card-actions>
        <v-row class="mx-5 mt-10 justify-space-around">
          <div>
            <v-btn icon class="mb-3">
              <v-icon dark size="75px">mdi-pencil</v-icon>
            </v-btn>
            <p>Answer</p>
          </div>
          <div>
            <v-btn icon class="mb-3">
              <v-icon dark size="75px">mdi-heart</v-icon>
            </v-btn>
            <p>Favorite</p>
          </div>
        </v-row>
      </v-card-actions>
    </v-card>
    <v-card>
      <v-card-title>Edit Profile</v-card-title>
      <v-form ref="form" v-model="valid" lazy-validation class="pa-3">
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          v-model="country"
          :rules="countryRules"
          label="Country"
        ></v-text-field>
        <v-text-field
          v-model="website"
          :rules="websiteRules"
          label="Web Site"
        ></v-text-field>
        <v-text-field
          v-model="aboutMe"
          :rules="aboutMeRules"
          label="About Me"
        ></v-text-field>
        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
        ></v-checkbox>
        <v-btn color="error" class="mr-4" @click="reset">
          Reset
        </v-btn>

        <v-btn color="primary" @click="update">
          Update Profile
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
export default class Account extends Vue {}
</script>

<style scoped>
.avater {
  margin-top: -50px;
}
hr {
  color: grey;
  display: inline-block;
  width: 95%;
}
</style>
