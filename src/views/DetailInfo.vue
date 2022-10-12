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
        <td>{{ dataValue.fields.age.stringValue }}歳</td>
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
        <td>
          {{ Number(dataValue.fields.income.stringValue).toLocaleString() }}円
        </td>
      </tr>
      <tr>
        <th>家賃</th>
        <td>
          {{ Number(dataValue.fields.rent.stringValue).toLocaleString() }}円
        </td>
      </tr>
      <tr>
        <th>水道光熱費</th>
        <td>
          {{ Number(dataValue.fields.utility.stringValue).toLocaleString() }}円
        </td>
      </tr>
      <tr>
        <th>食費</th>
        <td>
          {{ Number(dataValue.fields.food.stringValue).toLocaleString() }}円
        </td>
      </tr>
      <tr>
        <th>通信費</th>
        <td>
          {{ Number(dataValue.fields.phone.stringValue).toLocaleString() }}円
        </td>
      </tr>
      <tr>
        <th>雑費</th>
        <td>
          {{
            Number(dataValue.fields.miscellaneous.stringValue).toLocaleString()
          }}円
        </td>
      </tr>
      <tr>
        <th>趣味・娯楽費</th>
        <td>
          {{ Number(dataValue.fields.hobby.stringValue).toLocaleString() }}円
        </td>
      </tr>
      <tr>
        <th>交際費</th>
        <td>
          {{
            Number(dataValue.fields.entertainment.stringValue).toLocaleString()
          }}円
        </td>
      </tr>
      <tr>
        <th>貯金</th>
        <td>
          {{ Number(dataValue.fields.saving.stringValue).toLocaleString() }}円
        </td>
      </tr>
      <tr>
        <th>投資</th>
        <td>
          {{ Number(dataValue.fields.invest.stringValue).toLocaleString() }}円
        </td>
      </tr>
    </table>
    <router-link to="/about"
      ><button class="btn btn-primary back-btn">戻る</button></router-link
    >
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
    this.dataValue = JSON.parse(localStorage.getItem("detailItem"));
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
