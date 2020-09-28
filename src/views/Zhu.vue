<template>
  <div>
    <van-nav-bar style="background-color:#2F8FEA;" :border="false">
      <template #title>
        <span style="color:#fff">我的知乎</span>
      </template>
      <template #left>
        <van-icon name="arrow-left" color="#fff" />
      </template>
      <template #right>
        <van-icon color="#fff" @click="go">退出</van-icon>
      </template>
    </van-nav-bar>

    <!-- 下面的东西 -->

    <div class="a" @click="xs">
      <img src="../../public/img/7.jpg" alt />
      <br />
      <div class="login-text" v-if="username==''">登录/注册</div>
      <div class="login-text" v-else>{{username}}</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    data() {
      return {
        username: ""
      };
    },
    go() {
      this.$router.push({
        path: "/dl"
      });
    },
      xs(){
      if(this.username == ''){
        this.$router.push({
          path: '/zc'
        })
      }else{
        this.$router.push({
          path: '/tc'
        })
      }
      
    }
  },
  created() {
      //把数据展示出来
    let a= sessionStorage.a;
    if (a) {
      this.username = a;
    }
  }
};
</script>

<style>
.a {
  width: 100%;
  height: 300px;
  background-color: aqua;
  text-align: center;
}
img {
  width: 200px;
  height: 200px;
  margin-top: 20px;
}
</style>