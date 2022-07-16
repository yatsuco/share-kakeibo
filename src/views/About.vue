<template>
  <div class="about">
    <h1>家計簿一覧</h1>
    <div v-for="post in getItems" :key="post.name">
      <br />
      <div>
        ユーザー情報：{{ post.fields.age.stringValue }}歳{{
          post.fields.sex.stringValue
        }}
      </div>
      <div>居住地：{{ post.fields.prefecture.stringValue }}</div>
      <div>勤務先：{{ post.fields.industry.stringValue }}</div>
      <div>月の手取り：{{ post.fields.income.stringValue }}円</div>
      <div>家賃：{{ post.fields.rent.stringValue }}円</div>
    </div>
    <div class="paging">
      <b-pagination
        v-model="currentPage"
        :total-rows="this.posts.length"
        :per-page="parPage"
      ></b-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      posts: [],
      parPage: 5,
      currentPage: 1,
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
        // 日時を昇順にソート
        this.posts.sort(function (a, b) {
          return (
            new Date(b.createTime).getTime() - new Date(a.createTime).getTime()
          );
        });
        console.log(response.data.documents);
      });
  },
  computed: {
    getItems: function () {
      let current = this.currentPage * this.parPage;
      let start = current - this.parPage;
      return this.posts.slice(start, current);
    },
  },
};
</script>
<style scoped>
.paging {
  width: 200px;
  margin: 10px auto;
}
</style>
