<template>
  <div class="common-box">
    <div class="common-description">
        <h3><router-link :to="{path:`/home/articleDetail?id=${this.id}`}"><i class="el-icon-d-arrow-right" style="margin-right: 5px"></i>{{item.title}}</router-link></h3>
        <div>
            {{item.content}}
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
        return{
            id:this.item._id
        }
    },
    props: ['item']
  }
</script>

<style lang="less">
    @import '../../assets/css/normalize.less';
    .common-description {
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        padding: 20px;
        width: 100%;
        border: 1px solid black;
        margin-top: 36px;
    }

    .common-description img {
        float: left;
        width: 180px;
        height: 172px;
    }

    .common-description span {
        margin-left: 10px;
    }
</style>
