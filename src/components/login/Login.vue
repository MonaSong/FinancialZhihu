<template>
  <div class="login_back">
    <transition appear name="list" mode="out-in">
      <div class="form">
        <div class="top">
          <p class="text">登录</p>
        </div>
        <div class="bottom">
          <form action="" method="post" class="login">
            <ul class="ul_1">
              <li class="li_1">
                <input class="input" v-model="form.name" type="text" maxlength="16" placeholder="请输入用户名"/>
              </li>
              <li class="li_2">
                <input class="input" v-model="form.password" maxlength="16" type="password" placeholder="请输入密码">
              </li>
            </ul>
            <ul class="ul_2">
              <li class="li_3">
                <router-link :to="{path:'/register'}">注册账号</router-link>
              </li>
            </ul>
            <button type="button" id="button" class="b_login" @click="login">
              <span>
                <i :class="{'el-icon-loading': isLogining}" style="margin-right: 10px"></i>
                {{isLogining ? '正在登陆':'登陆'}}
              </span>
            </button>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        isLogining: false,
        form: {
          name: '',
          password: ''
        }
      }
    },
    methods: {
        setData () {
            localStorage.setItem('name', this.form.name);
            localStorage.setItem('password', this.form.password);
        },
        async login() {
            if (this.form.password === '' || this.form.name === '') {
            this.$message.error('请输入用户名或密码');
            return
            }
            this.isLogining = true;
            let ret = await this.$http.login(this.form);
            this.isLogining = false;
            if (ret.status === 0) {
                this.setData();
                this.$message.success('登录成功');
                setTimeout(_ => {
                this.$router.push('/home');
                }, 1000)
            } else {
            this.$message.error('登陆失败');
            }
        }
    },
    mounted() {
        if (window.localStorage['name'] && window.localStorage['password']) {
            this.name = window.localStorage['name'];
            this.password = window.localStorage['password'];
        }
    }
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
    height: 300px;
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
    color: white;
  }

  .top .text {
    text-align: center;
    margin-top: 5px;
  }

  .bottom .ul_1 {
    width: 250px;
    height: 71px;
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
    color: white;
    border-radius: 6px;
    margin: 14px auto 0;
    letter-spacing: 5px;
  }

  .login .b_login:active {
    background: #3072bd;
  }

  .el-icon-loading {
    font-size: 13px;
    width: 13px;
    height: 13px;
  }
</style>
