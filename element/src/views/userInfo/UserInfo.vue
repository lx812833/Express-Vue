<template>
  <div class="infoshow">
    <el-row class="row-bg" type="flex" justify="center">
      <el-col :span='8'>
        <div class="user">
          <img :src="user.avatar" alt="">
        </div>
      </el-col>
      <el-col :span='16'>
        <div class="userinfo">
          <div class="user-item">
            <i class="el-icon-service"></i>
            <span>{{user.name}}</span>
          </div>
          <div class="user-item">
            <i class="el-icon-setting"></i>
            <span>{{user.identity == 'manager' ? '管理员' : '普通员工'}}</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "infoshow",
  computed: {
    user() {
      return this.$store.getters.user;
    }
  }
};
</script>
<style lang="less" scoped>
.infoshow {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .row-bg {
    width: 100%;
    height: 100%;
    .user {
      text-align: center;
      position: relative;
      top: 30%;
      img {
        width: 150px;
        border-radius: 50%;
      }
    }
    .userinfo {
      height: 100%;
      background-color: #eee;
      .user-item {
        position: relative;
        top: 30%;
        padding: 26px;
        font-size: 28px;
        color: #333;
        span {
          padding-left: 5px;
        }
      }
    }
  }
}

// .user span {
//   display: block;
//   text-align: center;
//   margin-top: 20px;
//   font-size: 20px;
//   font-weight: bold;
// }
</style>
