<template>
  <div class="input">
    <h3>ユーザー情報</h3>
    <div class="Form">
      <div class="Form-Item">
        <p class="Form-Item-Label">
          <span class="Form-Item-Label-Required">必須</span>ニックネーム
        </p>
        <input
          id="name"
          type="text"
          class="Form-Item-Input"
          placeholder="例）家計簿太郎"
          v-model="name"
        />
      </div>
      <div class="Form-Item">
        <p class="Form-Item-Label">
          <span class="Form-Item-Label-Required">必須</span>性別
        </p>
        <select id="sex" name="sex" class="Form-Item-Input" v-model="sex">
          <option value="" selected></option>
          <option value="男性">男性</option>
          <option value="女性">女性</option>
        </select>
      </div>
      <div class="Form-Item">
        <p class="Form-Item-Label">
          <span class="Form-Item-Label-Required">必須</span>年齢
        </p>
        <input
          id="age"
          type="text"
          class="Form-Item-Input"
          placeholder="例）25"
          v-model="age"
        />
      </div>
      <div class="Form-Item">
        <p class="Form-Item-Label">
          <span class="Form-Item-Label-Required">必須</span>居住地
        </p>
        <select
          id="prefecture"
          name="prefecture"
          class="Form-Item-Input"
          v-model="prefecture"
        >
          <option value="北海道">北海道</option>
          <option value="青森県">青森県</option>
          <option value="岩手県">岩手県</option>
          <option value="宮城県">宮城県</option>
          <option value="秋田県">秋田県</option>
          <option value="山形県">山形県</option>
          <option value="福島県">福島県</option>
          <option value="茨城県">茨城県</option>
          <option value="栃木県">栃木県</option>
          <option value="群馬県">群馬県</option>
          <option value="埼玉県">埼玉県</option>
          <option value="千葉県">千葉県</option>
          <option value="東京都" selected>東京都</option>
          <option value="神奈川県">神奈川県</option>
          <option value="新潟県">新潟県</option>
          <option value="富山県">富山県</option>
          <option value="石川県">石川県</option>
          <option value="福井県">福井県</option>
          <option value="山梨県">山梨県</option>
          <option value="長野県">長野県</option>
          <option value="岐阜県">岐阜県</option>
          <option value="静岡県">静岡県</option>
          <option value="愛知県">愛知県</option>
          <option value="三重県">三重県</option>
          <option value="滋賀県">滋賀県</option>
          <option value="京都府">京都府</option>
          <option value="大阪府">大阪府</option>
          <option value="兵庫県">兵庫県</option>
          <option value="奈良県">奈良県</option>
          <option value="和歌山県">和歌山県</option>
          <option value="鳥取県">鳥取県</option>
          <option value="島根県">島根県</option>
          <option value="岡山県">岡山県</option>
          <option value="広島県">広島県</option>
          <option value="山口県">山口県</option>
          <option value="徳島県">徳島県</option>
          <option value="香川県">香川県</option>
          <option value="愛媛県">愛媛県</option>
          <option value="高知県">高知県</option>
          <option value="福岡県">福岡県</option>
          <option value="佐賀県">佐賀県</option>
          <option value="長崎県">長崎県</option>
          <option value="熊本県">熊本県</option>
          <option value="大分県">大分県</option>
          <option value="宮崎県">宮崎県</option>
          <option value="鹿児島県">鹿児島県</option>
          <option value="沖縄県">沖縄県</option>
        </select>
      </div>
      <div class="Form-Item">
        <p class="Form-Item-Label">
          <span class="Form-Item-Label-Required">必須</span>勤務先
        </p>
        <select
          id="industry"
          name="industry"
          class="Form-Item-Input"
          v-model="industry"
        >
          <option value="" selected>選択してください。</option>
          <option value="金融">金融</option>
          <option value="建築">建築</option>
          <option value="不動産">不動産</option>
          <option value="流通">流通</option>
          <option value="小売">小売</option>
          <option value="IT">IT</option>
          <option value="マスコミ">マスコミ</option>
          <option value="メディア">メディア</option>
          <option value="広告">広告</option>
          <option value="エネルギー・資源">エネルギー・資源</option>
          <option value="自動車">自動車</option>
          <option value="機械">機械</option>
          <option value="電気">電気</option>
          <option value="精密機械">精密機械</option>
          <option value="食品・飲料">食品・飲料</option>
          <option value="生活用品">生活用品</option>
          <option value="サービス">サービス業</option>
          <option value="エンタメ・レジャー">エンタメ・レジャー</option>
          <option value="医療">医療</option>
          <option value="商社">商社</option>
          <option value="官公庁">官公庁</option>
          <option value="メーカー">メーカー</option>
          <option value="その他">その他</option>
        </select>
      </div>
      <h3>家計簿情報</h3>
      <div class="Form-Item">
        <p class="Form-Item-Label">
          <span class="Form-Item-Label-Required">必須</span>月の手取り
        </p>
        <input
          id="income"
          type="text"
          class="Form-Item-Input"
          placeholder="例）200000"
          v-model="income"
        />
      </div>
      <div class="Form-Item">
        <p class="Form-Item-Label">
          <span class="Form-Item-Label-Required">必須</span>家賃
        </p>
        <input
          id="rent"
          type="text"
          class="Form-Item-Input"
          placeholder="例）50000"
          v-model="rent"
        />
      </div>
      <div class="Form-Item">
        <p class="Form-Item-Label">
          <span class="Form-Item-Label-Required">必須</span>水道光熱費
        </p>
        <input
          id="utility"
          type="text"
          class="Form-Item-Input"
          placeholder="例）10000"
          v-model="utility"
        />
      </div>
      <div class="Form-Item">
        <p class="Form-Item-Label">
          <span class="Form-Item-Label-Required">必須</span>食費
        </p>
        <input
          id="food"
          type="text"
          class="Form-Item-Input"
          placeholder="例）30000"
          v-model="food"
        />
      </div>
      <div class="Form-Item">
        <p class="Form-Item-Label">
          <span class="Form-Item-Label-Required">必須</span>通信費
        </p>
        <input
          id="phone"
          type="text"
          class="Form-Item-Input"
          placeholder="例）5000"
          v-model="phone"
        />
      </div>
      <div class="Form-Item">
        <p class="Form-Item-Label">
          <span class="Form-Item-Label-Required">必須</span>雑費
        </p>
        <input
          id="miscellaneous"
          type="text"
          class="Form-Item-Input"
          placeholder="例）5000"
          v-model="miscellaneous"
        />
      </div>
      <div class="Form-Item">
        <p class="Form-Item-Label">
          <span class="Form-Item-Label-Required">必須</span>趣味・娯楽費
        </p>
        <input
          id="hobby"
          type="text"
          class="Form-Item-Input"
          placeholder="例）20000"
          v-model="hobby"
        />
      </div>
      <div class="Form-Item">
        <p class="Form-Item-Label">
          <span class="Form-Item-Label-Required">必須</span>交際費
        </p>
        <input
          id="entertainment"
          type="text"
          class="Form-Item-Input"
          placeholder="例）20000"
          v-model="entertainment"
        />
      </div>
      <div class="Form-Item">
        <p class="Form-Item-Label">
          <span class="Form-Item-Label-Required">必須</span>貯金
        </p>
        <input
          id="saving"
          type="text"
          class="Form-Item-Input"
          placeholder="例）30000"
          v-model="saving"
        />
      </div>
      <div class="Form-Item">
        <p class="Form-Item-Label">
          <span class="Form-Item-Label-Required">必須</span>投資
        </p>
        <input
          id="invest"
          type="text"
          class="Form-Item-Input"
          placeholder="例）30000"
          v-model="invest"
        />
      </div>
      <button class="Form-Btn" @click="submit">登録する</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputKakeiboForm",
  props: {
    msg: String,
  },
  data() {
    return {
      name: "",
      sex: "",
      age: "",
      prefecture: "",
      industry: "",
      income: "",
      rent: "",
      utility: "",
      food: "",
      phone: "",
      miscellaneous: "",
      hobby: "",
      entertainment: "",
      saving: "",
      invest: "",
    };
  },
  methods: {
    submit() {
      const axios = require("axios");
      axios
        .post(
          "https://firestore.googleapis.com/v1/projects/share-kakeibo-e0281/databases/(default)/documents/comments",
          {
            fields: {
              name: {
                stringValue: this.name,
              },
              sex: {
                stringValue: this.sex,
              },
              age: {
                stringValue: this.age,
              },
              prefecture: {
                stringValue: this.prefecture,
              },
              industry: {
                stringValue: this.industry,
              },
              income: {
                stringValue: this.income,
              },
              rent: {
                stringValue: this.rent,
              },
              utility: {
                stringValue: this.utility,
              },
              food: {
                stringValue: this.food,
              },
              phone: {
                stringValue: this.phone,
              },
              miscellaneous: {
                stringValue: this.miscellaneous,
              },
              hobby: {
                stringValue: this.hobby,
              },
              entertainment: {
                stringValue: this.entertainment,
              },
              saving: {
                stringValue: this.saving,
              },
              invest: {
                stringValue: this.invest,
              },
            },
          }
        )
        .then((response) => {
          console.log("success:", response);
        })
        .catch((error) => {
          console.log(error);
        });
      this.name = "";
      this.sex = "";
      this.age = "";
      this.prefecture = "";
      this.industry = "";
      this.income = "";
      this.rent = "";
      this.utility = "";
      this.food = "";
      this.phone = "";
      this.miscellaneous = "";
      this.hobby = "";
      this.entertainment = "";
      this.saving = "";
      this.invest = "";
    },
  },
};
</script>

<style scoped>
.Form {
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  max-width: 550px;
  text-align: center;
}
@media screen and (max-width: 480px) {
  .Form {
    margin-top: 40px;
  }
}
.Form-Item {
  padding-top: 24px;
  padding-bottom: 24px;
  width: 100%;
  display: flex;
  align-items: center;
}
@media screen and (max-width: 480px) {
  .Form-Item {
    padding-left: 14px;
    padding-right: 14px;
    padding-top: 16px;
    padding-bottom: 16px;
    flex-wrap: wrap;
  }
}
.Form-Item-Label {
  width: 100%;
  max-width: 248px;
  letter-spacing: 0.05em;
  font-weight: bold;
  font-size: 18px;
}
@media screen and (max-width: 480px) {
  .Form-Item-Label {
    max-width: inherit;
    display: flex;
    align-items: center;
    font-size: 15px;
  }
}
.Form-Item-Label.isMsg {
  margin-top: 8px;
  margin-bottom: auto;
}
@media screen and (max-width: 480px) {
  .Form-Item-Label.isMsg {
    margin-top: 0;
  }
}
.Form-Item-Label-Required {
  border-radius: 6px;
  margin-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 48px;
  display: inline-block;
  text-align: center;
  background: #545454;
  color: #fff;
  font-size: 14px;
}
@media screen and (max-width: 480px) {
  .Form-Item-Label-Required {
    border-radius: 4px;
    padding-top: 4px;
    padding-bottom: 4px;
    width: 32px;
    font-size: 10px;
  }
}
.Form-Item-Input {
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-left: 40px;
  padding-left: 1em;
  padding-right: 1em;
  height: 48px;
  flex: 1;
  width: 100%;
  max-width: 410px;
  background: #eaedf2;
  font-size: 18px;
}
@media screen and (max-width: 480px) {
  .Form-Item-Input {
    margin-left: 0;
    margin-top: 18px;
    height: 40px;
    flex: inherit;
    font-size: 15px;
  }
}
.Form-Item-Textarea {
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-left: 40px;
  padding-left: 1em;
  padding-right: 1em;
  height: 216px;
  flex: 1;
  width: 100%;
  max-width: 410px;
  background: #eaedf2;
  font-size: 18px;
}
@media screen and (max-width: 480px) {
  .Form-Item-Textarea {
    margin-top: 18px;
    margin-left: 0;
    height: 200px;
    flex: inherit;
    font-size: 15px;
  }
}
.Form-Btn {
  border-radius: 6px;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 280px;
  display: block;
  letter-spacing: 0.05em;
  background: #545454;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
}
@media screen and (max-width: 480px) {
  .Form-Btn {
    margin-top: 24px;
    padding-top: 8px;
    padding-bottom: 8px;
    width: 160px;
    font-size: 16px;
  }
}
</style>
