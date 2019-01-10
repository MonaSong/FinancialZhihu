<template>
  <div id="answer-container">
    <div class="plus" @click="dialogFormVisible = true"><i>+</i></div>
    <div class="answer-item" v-for="item in listData" :key="item._id">
      <h2><span @click="goToSigle(item._id)">{{item.title}}</span></h2>
      <span>{{item.content}}</span>
    </div>


    <el-dialog title="添加文章" :visible.sync="dialogFormVisible">
      <el-form :model="article">
        <el-form-item label="文章名称" label-width="120px">
          <el-input v-model="article.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="文章内容" label-width="120px">
          <el-input type="textarea" v-model="article.content" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addArticle">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import CommentList from '../common/commentList.vue'

  export default {
    data(){
      return{
        listData: [],
        dialogFormVisible: false,
        article: {
            title:'',
            content:''
        }
      }
    },
    components: {
      CommentList
    },
    methods:{
      getArticle () {
        this.$http.getArticleList()
        .then(result => {
            this.listData = result;
        })
        .catch(error=>{
            this.$message.error("哎呀，发生错误了...")
        })
      },
      addArticle () {
        this.$http.addArticle({
            title: this.article.title,
            content: this.article.content,
            uname: window.localStorage['name']
          })
          .then(result => {
            this.dialogFormVisible = false;
            this.getArticle();
          })
      },
      goToSigle (_id) {
          this.$router.push({ name: 'ArticleDetail', params: { _id }})
      }
    },
    mounted(){
        this.getArticle()
    }
  }
</script>

<style lang="less" scoped>
    @import '../../assets/css/normalize.less';
    #answer-container{
      .plus{
        border: 1px solid gainsboro;
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        float: right;
        margin-top: 10px;
        cursor: pointer;
        i{
          font-size: 80px;
          position: relative;
          color: #BDBDBD;
          left: -2px;
        }
      }
    }
</style>
