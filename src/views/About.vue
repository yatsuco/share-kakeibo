<template>
  <div class="container">
    <h3>家計簿一覧</h3>
    <select v-model="selected">
      <option value="new">最新順</option>
      <option value="age">年齢順</option>
      <option value="income">手取り順</option>
      <option value="rent">家賃順</option>
    </select>
    <div v-for="post in getItems" :key="post.name" class="list">
      <br />
      <div class="border">
        <div class="row">
          <span class="col-3 key"><b>ユーザー情報</b></span
          ><span class="col-3 value"
            >{{ post.fields.age.stringValue }}歳{{
              post.fields.sex.stringValue
            }}
          </span>
        </div>
        <div class="row">
          <span class="col-3 key"><b>居住地</b></span
          ><span class="col-3 value">{{
            post.fields.prefecture.stringValue
          }}</span>
        </div>
        <div class="row">
          <span class="col-3 key"><b>勤務先</b></span
          ><span class="col-3 value">{{
            post.fields.industry.stringValue
          }}</span>
        </div>
        <div class="row">
          <span class="col-3 key"><b>月の手取り</b></span
          ><span class="col-3 value"
            >{{ post.fields.income.stringValue }}円</span
          >
        </div>
        <div class="row">
          <span class="col-3 key"><b>家賃</b></span
          ><span class="col-3 value">{{ post.fields.rent.stringValue }}円</span>
        </div>
      </div>
      <button class="btn btn-primary button-position" @click="detailInfo(post)">
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
      parPage: 4,
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
    detailInfo(post) {
      localStorage.setItem("detailItem", JSON.stringify(post));
      this.$router.push({
        name: "detailInfo",
        params: {
          id: this.strtotime(post.createTime),
          data: post,
        },
      });
    },
    strtotime(d) {
      // ISO形式の時間からUNIX形式の時間に変換し一意のIDを生成
      return new Date(d).getTime();
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
.key {
  width: 50%;
}
.value {
  width: 50%;
}
.border {
  padding: 0.5em 1em;
  margin: 0.5em 0;
  font-weight: bold;
  border: solid 3px #000000;
}
</style>
