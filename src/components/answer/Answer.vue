<template>
  <div id="answer-container">
    <div class="time-box">
    <el-button type="primary" @click="askQuestion" style="margin-top:10px;float:right;">我要提问</el-button>
    <el-input
      style="width:200px;margin:10px 10px 0;float:right;"
      placeholder="请输入搜索内容"
      v-model="searchInfo">
      <i slot="suffix" class="el-input__icon el-icon-search" @click="searchData"></i>
    </el-input>
	</div>

	  <div class="answer-item" v-for="item in questionList" :key="item._id" @click="goDetail(item._id)">
			<h2>{{item.title}}</h2>
      <span>{{item.description}}</span>
	  <span style="float:right">提问时间：{{item.date | format}}</span>
      <div v-for="(p,i) in item.answer" :key="i">{{p.name}}回答：{{p.content}}</div>
		</div>

    <ask-question
      @closeDialog="closeDialog"
      @saveData="saveData"
      :dialogVisible="dialogVisible">
    </ask-question>
  </div>
</template>

<script>
  import askQuestion from '../common/toAsk.vue' ;
  export default{
    components: {
      askQuestion
    },
    data(){
      return{
        questionList: [],
        dialogVisible: false,
        searchInfo: '',
      }
    },
    created(){
      this.getAnswer();
    },
    methods:{
      askQuestion() {
        this.dialogVisible = true;
      },
      closeDialog () {
        this.dialogVisible = false;
      },
      async saveData(data){
        console.log(data);
        let ret = await this.$http.addAnswer(data);
        if (ret.status === 0) {
          this.$message.success('提问成功');
          this.dialogVisible = false;
          this.getAnswer();
        }
      },
      goDetail(id){
          this.$router.push({ name: 'AnswerDetail', params: { id }})
      },
      async getAnswer(){
        let ret = await this.$http.getAnswerList();
        if(ret.status === 0) {
          this.questionList = ret.data;
        } else {
          this.$message.error('获取答疑列表失败');
        }
      },
      // 搜索答疑
      async searchData() {
		  let ret;
        if (this.searchInfo) {
			ret = await this.$http.searchAnswer({title: this.searchInfo});
			if(ret.status === 0) {
				this.questionList = ret.data;
			} else {
				this.$message.error('哎呀... 搜索出问题了');
			}
        } else {
			ret = await this.$http.getAnswerList();
			if (ret.status === 0) {
				this.questionList = ret.data;
			}
		}
      }
    }
  }
</script>

<style lang="less" scoped>
   @import '../../assets/css/normalize.less';
   .time-box{
      width:100%;
	  overflow:hidden;
   }
</style>
