<template>
   <div id="answer-container">
       <CommentList></CommentList>
   </div>
</template>

<script>
   import CommentList from '../common/commentList.vue'
   export default{
       components:{ CommentList },
			data(){
                return{
                    messages:[]
                }
        },
        mounted () {
            this.getComment();
        },
        methods: {
            getComment () {
                this.axios.get('http://192.168.169.237:3000/comments/list').then(result => {
                    if(result.status == 200){
                        this.messages = result.data;
                    }
                }).catch(err => {
                    console.log(err);
                })
            }
        }
   }
</script>

<style lang="less" scoped>
    @import '../../assets/css/normalize.less';
</style>
