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
        :rules="[{ required: true, message: '请填写密码' }  ]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" @click="zc">注册</van-button>
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
    zc() {
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

      //获取数据
      let a = localStorage.a;
      if (a) {
        a = JSON.parse(a);
      } else {
        a = [];
      }
      //push进数组
      a.push({
        username: this.username,
        password: this.password
      });
      localStorage.a = JSON.stringify(a);

      this.$notify({
        type: "success",
        message: "注册成功"
      });

      setTimeout(() => {
        this.$router.push(
          {
            path: "/dl"
          },
          2000
        );
      });
    }
  }
};
</script>

<style>
img {
  width: 100%;
}
</style>