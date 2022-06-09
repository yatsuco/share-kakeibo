<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <inputInfo></inputInfo>
  </div>
</template>

<script>
// @ is an alias to /src
import InputInfo from "../components/InputInfo.vue";

export default {
  name: "Home",
  components: {
    InputInfo,
  },
};
</script>
