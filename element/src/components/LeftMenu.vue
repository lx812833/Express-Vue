<template>
  <el-row class="left-nav">
    <el-col>
      <el-menu
        class="el-menu-vertical-demo"
        background-color="#324057"
        text-color="#fff"
        active-text-color="#409eff"
      >
        <router-link to="/home">
          <el-menu-item index="0">
            <i class="el-icon-location"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <template v-for="item in items">
            <el-submenu
              v-if="item.children"
              :index="item.path"
              :key="item.path"
            >
              <template slot="title">
                <i :class="item.icon"></i>
                <span slot="title">{{item.name}}</span>
              </template>
              <router-link
                v-for="(val, index) in item.children"
                :to="val.path"
                :key="index"
              >
                <el-menu-item :index="val.path">
                  <span slot="title">{{val.name}}</span>
                </el-menu-item>
              </router-link>
            </el-submenu>
          </template>
        </router-link>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "left-nav",
  data() {
    return {
      items: [
        {
          icon: "el-icon-menu",
          name: "资金管理",
          path: "fund",
          children: [{ path: "fundlist", name: "资金流水" }]
        },
        {
          icon: "el-icon-setting",
          name: "信息管理",
          path: "info",
          children: [{ path: "userInfo", name: "个人信息" }]
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.left-nav {
  position: fixed;
  top: 71px;
  left: 0;
  min-height: 100%;
  background-color: #324057;
  z-index: 99;
  .el-menu {
    border: none;
  }
  .fa-margin {
    margin-right: 5px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 180px;
    min-height: 400px;
  }
  .el-menu-vertical-demo {
    width: 35px;
  }
  .el-submenu .el-menu-item {
    min-width: 180px;
  }

  .hiddenDropdown,
  .hiddenDropname {
    display: none;
  }
  a {
    text-decoration: none;
  }
}
</style>