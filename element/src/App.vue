<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";

export default {
  name: "app",
  created() {
    if (localStorage.TOKEN) {
      const decode = jwt_decode(localStorage.TOKEN);
      this.$store.dispatch("setAutnenticated", !this.isEmpty(decode));
      this.$store.dispatch("setUser", decode);
    } else {
      this.$router.push("/login");
    }
  },
  methods: {
    isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      );
    }
  }
};
</script>

<style lang="less">
html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
