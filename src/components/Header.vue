<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <img alt="House Logo" class="logo-size" src="../assets/house.png" />
      <b-navbar-brand href="#">シェア家計簿</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            ><router-link to="/input" class="routerlink"
              >家計簿登録</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link to="/about" class="routerlink"
              >家計簿一覧</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link to="/register" class="routerlink"
              >ユーザー登録</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link to="/login" class="routerlink"
              >ログイン</router-link
            ></b-nav-item
          >
          <b-nav-item href="https://twitter.com/yatsu_co">Twitter</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<style scoped>
.logo-size {
  width: 30px;
}
.routerlink {
  text-decoration: none;
  color: white;
}
</style>
