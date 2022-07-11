<template>
  <div class="form-wrapper">
    <h2>アカウント登録</h2>
    <div class="form">
      <div class="form-item">
        <label for="email"></label>
        <input
          id="email"
          type="email"
          v-model="email"
          placeholder="メールアドレス"
          required="required"
        />
        <p v-if="validateEmailFlag" class="error">
          メールアドレスの形式で入力してください。
        </p>
      </div>
      <div class="form-item">
        <label for="password"></label>
        <input
          id="password"
          type="password"
          v-model="password"
          placeholder="パスワード"
          required="required"
        />
        <p v-if="validatePasswordFlag" class="error">
          半角英数字8文字以上で入力してください。
        </p>
      </div>
      <div class="button-panel">
        <button class="button" @click="register">登録</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../axios-auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      validateEmailFlag: false,
      validatePasswordFlag: false,
    };
  },
  methods: {
    register() {
      this.isInvalidEmail();
      this.isInvalidPassword();
      if (this.validateEmailFlag || this.validatePasswordFlag) {
        return;
      }
      axios
        .post("/accounts:signUp?key=AIzaSyAE-PbN7AUFZZQG9Cz324qvCi8DCE4gc7k", {
          email: this.email,
          password: this.password,
          returnSecureToken: true,
        })
        .then((response) => {
          console.log(response);
        });
    },
    isInvalidEmail() {
      const reg = new RegExp(
        /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/
      );
      if (!reg.test(this.email)) {
        this.validateEmailFlag = true;
      } else {
        this.validateEmailFlag = false;
      }
    },
    isInvalidPassword() {
      const reg = new RegExp(/^[a-z\d]{8,100}$/i);
      if (!reg.test(this.password)) {
        this.validatePasswordFlag = true;
      } else {
        this.validatePasswordFlag = false;
      }
    },
  },
};
</script>
<style scoped>
/* Fonts */
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400);

/* fontawesome */
@import url(http://weloveiconfonts.com/api/?family=fontawesome);
[class*="fontawesome-"]:before {
  font-family: "FontAwesome", sans-serif;
}

/* Simple Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* body */
body {
  background: #e9e9e9;
  color: #5e5e5e;
  font: 400 87.5%/1.5em "Open Sans", sans-serif;
}

/* Form Layout */
.form-wrapper {
  background: #fafafa;
  margin: 3em auto;
  padding: 0 1em;
  max-width: 370px;
}

h1 {
  text-align: center;
  padding: 1em 0;
}

form {
  padding: 0 1.5em;
}

.form-item {
  margin-bottom: 0.75em;
  width: 100%;
}

.form-item input {
  background: #fafafa;
  border: none;
  border-bottom: 2px solid #e9e9e9;
  color: #666;
  font-family: "Open Sans", sans-serif;
  font-size: 1em;
  height: 50px;
  transition: border-color 0.3s;
  width: 100%;
}

.form-item input:focus {
  border-bottom: 2px solid #c0c0c0;
  outline: none;
}

.button-panel {
  margin: 2em 0 0;
  width: 100%;
}

.button-panel .button {
  background: #1c6ecd;
  border: none;
  color: #fff;
  cursor: pointer;
  height: 50px;
  font-family: "Open Sans", sans-serif;
  font-size: 1.2em;
  letter-spacing: 0.05em;
  text-align: center;
  text-transform: uppercase;
  transition: background 0.3s ease-in-out;
  width: 100%;
}

.button:hover {
  background: #ee3e52;
}

.form-footer {
  font-size: 1em;
  padding: 2em 0;
  text-align: center;
}

.form-footer a {
  color: #8c8c8c;
  text-decoration: none;
  transition: border-color 0.3s;
}

.form-footer a:hover {
  border-bottom: 1px dotted #8c8c8c;
}

.error {
  text-align: left;
  color: red;
}
</style>
