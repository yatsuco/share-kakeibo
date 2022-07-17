<template>
  <div class="detailInfo">
    <h3>家計簿詳細</h3>
    <table class="detail-view">
        <tr>
            <th>ニックネーム</th>
            <td>{{ data.fields.name.stringValue }}</td>
        </tr>
        <tr>
            <th>性別</th>
            <td>{{ data.fields.sex.stringValue }}</td>
        </tr>
        <tr>
            <th>年齢</th>
            <td>{{ data.fields.age.stringValue }}</td>
        </tr>
        <tr>
            <th>居住地</th>
            <td>{{ data.fields.prefecture.stringValue }}</td>
        </tr>
        <tr>
            <th>勤務先</th>
            <td>{{ data.fields.industry.stringValue }}</td>
        </tr>
        <tr>
            <th>月の手取り</th>
            <td>{{ data.fields.income.stringValue }}</td>
        </tr>
        <tr>
            <th>家賃</th>
            <td>{{ data.fields.rent.stringValue }}</td>
        </tr>
        <tr>
            <th>水道光熱費</th>
            <td>{{ data.fields.utility.stringValue }}</td>
        </tr>
        <tr>
            <th>食費</th>
            <td>{{ data.fields.food.stringValue }}</td>
        </tr>
        <tr>
            <th>通信費</th>
            <td>{{ data.fields.phone.stringValue }}</td>
        </tr>
        <tr>
            <th>雑費</th>
            <td>{{ data.fields.miscellaneous.stringValue }}</td>
        </tr>
        <tr>
            <th>趣味・娯楽費</th>
            <td>{{ data.fields.hobby.stringValue }}</td>
        </tr>
        <tr>
            <th>交際費</th>
            <td>{{ data.fields.entertainment.stringValue }}</td>
        </tr>
        <tr>
            <th>貯金</th>
            <td>{{ data.fields.saving.stringValue }}</td>
        </tr>
        <tr>
            <th>投資</th>
            <td>{{ data.fields.invest.stringValue }}</td>
        </tr>
    </table>
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
    };
},
props: {
    data: [],
}
  
};
</script>
<style scoped>
.detail-view {
    width: 200px;
    margin: 0 auto;
}
</style>
