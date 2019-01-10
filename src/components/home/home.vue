<template>
	<div class="home">
    <div class="home-header">
      <div class="box">
        <h1 class="title">财经知乎</h1>
        <p class="title-des">你想要的财经知识，都在这里</p>
        <div class="des"><span>你好！{{uname}}</span> <span style="cursor: pointer; padding-left: 20px;" @click="loginout">退出</span> </div>
      </div>
    </div>
    <div class="home-content">
      <el-menu :default-active="activeIndex" @select="handleClick" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">
          <router-link to="/home/hot">热门</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/home/answer">答疑</router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <router-link to="/home/article">文章</router-link>
        </el-menu-item>
      </el-menu>
      <router-view/>
    </div>

	</div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '1',
            uname: '',
        }
    },
    methods: {
        handleClick(index) {
            switch(index) {
                case '1':
                this.$router.push({path: '/home/hot'});
                break;
                case '2':
                this.$router.push({path: '/home/answer'});
                break
                case '3':
                this.$router.push({path: '/home/article'});
            }
        },
        judgeActive(){
            let path = this.$route.path;
            if(path.includes('article')){
                this.activeIndex = '3';
            } else if(path.includes('answer')){
                this.activeIndex = '2';
            } else {
                this.activeIndex = '1';
            }
        },
        loginout () {
            localStorage.clear();
            this.$router.push('/login');
        }
    },
    created() {
        this.judgeActive();
        this.uname = localStorage.getItem('name');
    }
}

</script>

<style lang="less" scoped>
@import '../../assets/css/normalize.less';
.home{
  .home-content{
    width: 1140px;
    margin: 0 auto;
  }
  .home-header{
    width: 100%;
    height: 170px;
    background-color: @primaryColor;
    .box{
        width: 1140px;
        height: 170px;
        margin: 0 auto;
        position: relative;
      .title{
        position: relative;
        font-weight: 800;
        color: @whiteColor;
        font-size: 40px;
        letter-spacing: 10px;
      }
      .title-des{
        letter-spacing: 2px;
        color: @whiteColor;
      }
      .des{
        position: absolute;
        bottom: 5px;
        right: 3px;
        letter-spacing: 2px;
        color: @whiteColor;
      }
    }

  }
}
</style>
