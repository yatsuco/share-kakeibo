<template>
  <div class="about">
    <h3>家計簿一覧</h3>
    <select v-model="selected">
      <option value="new">最新順</option>
      <option value="age">年齢順</option>
      <option value="income">手取り順</option>
      <option value="rent">家賃順</option>
    </select>
    <div v-for="(post, index) in getItems" :key="post.name" class="list">
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
      <button
        class="btn btn-primary button-position"
        @click="detailInfo(index)"
      >
        詳しく見る
      </button>
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
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
      parPage: 5,
      currentPage: 1,
      selected: "new",
    };
  },
  created() {
    axios
      .get(
        "https://firestore.googleapis.com/v1/projects/share-kakeibo-e0281/databases/(default)/documents/comments"
      )
      .then((response) => {
        this.posts = response.data.documents;
        this.sortDay();
      });
  },
  computed: {
    getItems: function () {
      let current = this.currentPage * this.parPage;
      let start = current - this.parPage;
      return this.posts.slice(start, current);
    },
  },
  watch: {
    selected: function () {
      axios
        .get(
          "https://firestore.googleapis.com/v1/projects/share-kakeibo-e0281/databases/(default)/documents/comments"
        )
        .then((response) => {
          this.posts = response.data.documents;
          if (this.selected === "age") {
            this.posts.sort(
              (a, b) => a.fields.age.stringValue - b.fields.age.stringValue
            );
          } else if (this.selected === "income") {
            this.posts.sort(
              (a, b) =>
                a.fields.income.stringValue - b.fields.income.stringValue
            );
          } else if (this.selected === "rent") {
            this.posts.sort(
              (a, b) => a.fields.rent.stringValue - b.fields.rent.stringValue
            );
          } else {
            this.sortDay();
          }
          console.log(response.data.documents);
        });
    },
  },
  methods: {
    sortDay() {
      // 日時を昇順にソート
      this.posts.sort(function (a, b) {
        return (
          new Date(b.createTime).getTime() - new Date(a.createTime).getTime()
        );
      });
    },
    detailInfo(index) {
      localStorage.setItem("option", JSON.stringify(this.posts[index]));
      this.$router.push({
        name: "detailInfo",
        params: {
          id: index,
          data: this.posts[index],
        },
      });
    },
  },
};
</script>
<style scoped>
.paging {
  width: 200px;
  margin: 10px auto;
}
.button-position {
  margin: 5px auto;
}
</style>
