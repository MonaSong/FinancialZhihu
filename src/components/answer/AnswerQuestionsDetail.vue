<template>
  <div class="answerDetail">
    <h1 class="title">{{answerData.title}}</h1>
    <div class="des">{{answerData.description}}</div>

    <el-input style="width:300px;" type="textarea" v-model="answer" placeholder="评论"></el-input>
    <br>
    <el-badge :value="12" class="item">
      <el-button size="small" @click="answerQuestion">评论</el-button>
    </el-badge>
    <el-badge :value="12" class="item">
      <el-button size="small">点赞</el-button>
    </el-badge>

    <div v-for="(item,index) in answerData.answer" :key="index" class="answer">
      {{item.name}} 回答：{{item.content}}
    </div>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        id: this.$route.params.id,
        answerData: {},
        form: {},
        answer: '',
      }
    },
    created() {
      this.getQuestionDetail()
    },

    methods: {
      async getQuestionDetail(){
        let ret = await this.$http.getAnswerDetail({id:this.id});
        if(ret.status === 0) {
          this.answerData = ret.data[0];
        } else {
          this.$message.error('获取问题详情失败');
        }
      },
      async answerQuestion(){
        let ret = await this.$http.addQuestionAnswer({
          name:window.localStorage['name'],
          content:this.answer,
          _id:this.id,
        })
        if (ret.status === 0) {
          this.$message.success('评论成功');
          this.getQuestionDetail();
        } else {
          this.$message.error('评论失败');
        }
      }
    },
  }
</script>


<style lang="less" scoped>
    @import '../../assets/css/normalize.less';
.answerDetail {
  .title{
    text-align: center;
    margin-top: 10px;
  }
  .des{
    padding: 5px;
    font-size: 16px;
    min-height: 100px;
  }
  .answer{
    line-height: 30px;
    font-size: 14px;
  }
  .item{
    margin: 15px 30px 30px 0;
  }
}
</style>


