<template>
  <div class="login_back">
    <transition appear name="list" mode="out-in">
      <div class="form">
        <div class="top">
          <p class="text">注册</p>
        </div>
        <div class="bottom">
          <form action="" method="post" class="login">
            <ul class="ul_1">
                <li class="li_1">
                    <input class="input" v-model="form.name" maxlength="16" type="text" placeholder="请输入用户名"/>
                </li>
                <li class="li_1">
                    <input class="input" v-model="form.password" maxlength="16" type="password" placeholder="请输入密码">
                </li>
                <li>
                    <input class="input" v-model="form.againPassword" maxlength="16" type="password" placeholder="请确认密码">
                </li>
            </ul>
            <ul class="ul_2">
                <li class="li_3">
                    <router-link :to="{path:'/login'}">已有账号,去登陆</router-link>
                </li>
            </ul>
            <button type="button" id="button" class="b_login" @click="register">注册</button>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "Register",
    data() {
      return {
        form: {},
      }
    },
    methods: {
      async register() {
        if (this.form.password !== this.form.againPassword) {
          this.$message.error('两次密码不一致')
          return
        }
        if (this.password == '' || this.name == '') {
          this.$message.error('请输入用户名或密码');
          return
        }
        let ret = await this.$http.register(this.form);
        if(ret.status === 0) {
          this.$message.success('注册成功');
          setTimeout(_ => {
              this.$router.push('/login');
          }, 2000)
        } else {
          this.$message.error('注册失败')
        }
      },
    },
    mounted () {}
  }
</script>

<style lang="less" scoped>
   @import '../../assets/css/normalize.less';
   
  .login_back {
    width: 100%;
    height: 100%;
    background: url('../../assets/img/back.png') no-repeat;
    background-size: cover;
  }

  .form {
    width: 400px;
    height: 330px;
    margin: 0 auto;
    border: 0;
    border-radius: 8px;
    box-shadow: 1px 1px 20px #c4c4c4;
    position: relative;
    top: calc(50% - 200px);
  }

  /* top start */
  .top {
    width: 100%;
    height: 52px;
    padding-top: 15px;
    border-radius: 6px 6px 0 0;
    background-color: @primaryColor;
    font-size: 18px;
    color: @whiteColor;
  }

  .top .text {
    text-align: center;
    margin-top: 5px;
  }

  .bottom .ul_1 {
    width: 250px;
    height: 107px;
    margin: 40px auto 0;
    border-radius: 6px;
    border: 1px solid @primaryColor;
  }

  .ul_1 li {
    width: 100%;
    height: 35px;
    float: left;
    display: flex;
    align-items: center;
  }

  .ul_1 li input {
    height: 100%;
    background-color: transparent;
    float: left;
    border: none;
  }

  .input {
    width: 100%;
    border-radius: 5px;
    padding-left: 10%;
    color: #585858;
    letter-spacing: 1px;
  }

  .ul_1 .li_1 {
    border-bottom: 1px solid @primaryColor;
  }

  .ul_2 {
    width: 250px;
    margin: 14px auto 0;
    font-size: 12px;
  }

  .ul_2 .li_3 a:hover {
    color: #3072bd;
  }

  .login .b_login {
    width: 250px;
    height: 35px;
    background-color: @primaryColor;
    border: none;
    font-size: 14px;
    display: block;
    color: @whiteColor;
    border-radius: 6px;
    margin: 14px auto 0;
    letter-spacing: 5px;
  }

  .login .b_login:active {
    background: #3072bd;
  }
</style>
