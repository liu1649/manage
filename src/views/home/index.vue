<template>
  <div class="home-container">
    <h1 v-if="name === 'Super Admin'">管理员、运维人员首页：需要监控服务器</h1>
    <h1 v-else>单系统用户首页、需要单点登录</h1>
    <div class="home-text">{{ name }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapGetters(["name"]),
  },
};
</script>

<style lang="scss" scoped>
.home {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
