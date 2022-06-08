<template>
  <div class="about">
    <h1>家計簿一覧</h1>
    <div v-for="post in posts" :key="post.name">
      <br />
      <div>
        ユーザー情報：{{ post.fields.age.stringValue }}歳{{
          post.fields.sex.stringValue
        }}
      </div>
      <div>居住地：{{ post.fields.prefecture.stringValue }}</div>
      <div>勤務先：{{ post.fields.industry.stringValue }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  created() {
    const axios = require("axios");
    axios
      .get(
        "https://firestore.googleapis.com/v1/projects/share-kakeibo-e0281/databases/(default)/documents/comments"
      )
      .then((response) => {
        this.posts = response.data.documents;
        console.log(response.data.documents);
      });
  },
};
</script>
