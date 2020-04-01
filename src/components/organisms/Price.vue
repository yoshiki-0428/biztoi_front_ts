<template>
  <v-simple-table height="200px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center"></th>
          <th class="text-center">通常会員</th>
          <th class="text-center">プレミアム会員</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>回答投稿</td>
          <td>✔</td>
          <td>✔</td>
        </tr>
        <tr>
          <td>閲覧制限</td>
          <td>5件/1日</td>
          <td>なし</td>
        </tr>
        <tr>
          <td>広告</td>
          <td>表示あり</td>
          <td>非表示</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Price extends Vue {}
</script>
