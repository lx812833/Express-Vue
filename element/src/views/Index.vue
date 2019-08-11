<template>
  <div class="index">
    <HeadNav />
    <LeftNav />
    <div class="rightContainer">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeadNav from "@/components/HeadNav.vue";
import LeftNav from "@/components/LeftMenu.vue";
export default {
  name: "index",
  components: {
    HeadNav,
    LeftNav
  }
};
</script>
<style lang="less" scoped>
.index {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .rightContainer {
    position: relative;
    top: 0;
    left: 180px;
    width: calc(100% - 180px);
    height: calc(100% - 71px);
    overflow: auto;
  }
}
</style>
