<template>
  <div>
    <h1>
      <img src="../../public/img/8.jpg" alt />
    </h1>
    <van-form>
      <van-field
        v-model="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' },{pattern:/^[1][3,5,6,7,8,9][0-9]{9}$/ , message: '请输入正确的11位手机号'}]"
      />
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' },{pattern: /^\w{6,}$/,message:'密码不少于6位'}]"
      ></van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" @click="dl">登陆</van-button>
        <van-button round block type="danger" to="/zc" class="zc">注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    dl() {
      if (this.username.trim() == "") {
        return;
      }
      if (!this.username.match(/^[1][3,5,6,7,8,9][0-9]{9}$/)) {
        return;
      }
      if (this.password.trim() == "") {
        return;
      }
      if (!this.password.match(/^\w{6,}$/)) {
        return;
      }

      let a = localStorage.a;
      if (a) {
        a = JSON.parse(a);
        let b = false;
        //循环遍历
        a.map(i => {
          if (i.username == this.username && i.password == this.password) {
            b = true;
            return;
          }
        });
        if (b) {
          sessionStorage.a = this.username;
          this.$router.push({
            path: "/Zhu"
          });
        } else {
          this.$notify({
            type: "danger",
            message: "输入的账号或密码有误"
          });
        }
      }
    }
  }
};
</script>
        
<style>
img {
  width: 100%;
}
.zc {
  margin-top: 20px;
}
</style>