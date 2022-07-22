<template>
  <div class="detailInfo">
    <h3>家計簿詳細</h3>
    <table class="detail-view">
      <tr>
        <th>ニックネーム</th>
        <td>{{ dataValue.fields.name.stringValue }}</td>
      </tr>
      <tr>
        <th>性別</th>
        <td>{{ dataValue.fields.sex.stringValue }}</td>
      </tr>
      <tr>
        <th>年齢</th>
        <td>{{ dataValue.fields.age.stringValue }}</td>
      </tr>
      <tr>
        <th>居住地</th>
        <td>{{ dataValue.fields.prefecture.stringValue }}</td>
      </tr>
      <tr>
        <th>勤務先</th>
        <td>{{ dataValue.fields.industry.stringValue }}</td>
      </tr>
      <tr>
        <th>月の手取り</th>
        <td>{{ dataValue.fields.income.stringValue }}</td>
      </tr>
      <tr>
        <th>家賃</th>
        <td>{{ dataValue.fields.rent.stringValue }}</td>
      </tr>
      <tr>
        <th>水道光熱費</th>
        <td>{{ dataValue.fields.utility.stringValue }}</td>
      </tr>
      <tr>
        <th>食費</th>
        <td>{{ dataValue.fields.food.stringValue }}</td>
      </tr>
      <tr>
        <th>通信費</th>
        <td>{{ dataValue.fields.phone.stringValue }}</td>
      </tr>
      <tr>
        <th>雑費</th>
        <td>{{ dataValue.fields.miscellaneous.stringValue }}</td>
      </tr>
      <tr>
        <th>趣味・娯楽費</th>
        <td>{{ dataValue.fields.hobby.stringValue }}</td>
      </tr>
      <tr>
        <th>交際費</th>
        <td>{{ dataValue.fields.entertainment.stringValue }}</td>
      </tr>
      <tr>
        <th>貯金</th>
        <td>{{ dataValue.fields.saving.stringValue }}</td>
      </tr>
      <tr>
        <th>投資</th>
        <td>{{ dataValue.fields.invest.stringValue }}</td>
      </tr>
    </table>
    <router-link to="/about"><button class="btn btn-primary back-btn">戻る</button></router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      posts: [],
      parPage: 5,
      currentPage: 1,
      selected: "new",
      test: [],
      dataValue: this.data,
    };
  },
  props: {
    data: [],
  },
  // TODO: 遷移したときも呼ばれてしまう 更新したらdataが読み込まれないのでmountしたときにローカルストレージから読み込む
  beforeMount: function () {
    this.dataValue = JSON.parse(localStorage.getItem("option"));
  },
};
</script>
<style scoped>
.detail-view {
  width: 200px;
  margin: 0 auto;
}
.back-btn {
  margin: 10px auto;
}
</style>
