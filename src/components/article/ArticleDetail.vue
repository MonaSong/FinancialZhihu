<template>
    <div class="articleDetail">
      <h3 class="title">{{article.title}}</h3>
      <p>
        {{article.content}}
      </p>
      <br><br><br>

      <el-input v-model="comment.content" style="width: 500px;"></el-input>
      <el-button type="primary" @click="addComment">添加评论</el-button>
      <div v-for="(comment, index) in article.comments" :key="index" style="margin-top: 20px;" class="comment-item">
        <div>
          <span class="cname">{{comment.uname}}</span>
          <span class="cdate">{{comment.date | format}}</span>
        </div>
        <div class="cct">
          {{comment.content}}
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "ArticleDetail",
      data(){
          return{
            id: this.$route.params._id,
            article: [],
            comment: {
              content:''
            }
          }
      },
      filters: {
        curFormatDate (value) {
          return this.formatDate(value);
        }
      },
      methods:{
        getSingleArticle(){
          this.$http.getSingleArticle({_id: `${this.id}`})
            .then(result => {
              this.article = result[0];
            })
        },
        addComment(){
          this.$http.addComments({
            _id: this.id,
            uname: window.localStorage['name'],
            content: this.comment.content
          })
          .then(result =>{
              this.comment.content = '';
              this.getSingleArticle()
          });
        }
      },
      mounted(){
        console.log(this.$route.params._id);
        this.getSingleArticle()
      }
    }
</script>

<style lang="less" scoped>
    @import '../../assets/css/normalize.less';
    .articleDetail{
        width: 1200px;
        margin: 0 auto;
    }
    .title{
        font-size: 24px;
        padding: 30px 0;
    }

    .comment-item{
      .cname{
        font-size: @fs16;
      }
      .cdate{
        color: @defaultColor;
      }
    }
</style>
