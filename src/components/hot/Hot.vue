<template>
    <div class="answer-hot">
         <div class="img-box">
            <div v-for="(item, i) in imgList" :key="i">
                <img :src="item.avatar_url" alt="图片">
            </div>
        </div>
        <div class="answer-item" v-for="(item, i) in dataList" :key="i">
            <h2>{{ item.author_name }}</h2>
            <span>{{ item.book_info}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataList: [],
            imgList: [],
        }
    },
    methods: {
        async getData() {
            let ret = await this.$http.getHotList();
            console.log(ret);
            if (ret.status === 0) {
                this.dataList = ret.data.list;
                this.imgList = ret.data.imgList;
            }
        }
    },
    created() {
        this.getData();
    }
}

</script>

<style lang="less" scoped>
    @import '../../assets/css/normalize.less';
    .answer-hot {

        .img-box {
            float: right;
            width: 370px;
            border: 1px solid #e4e4e4;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            img {
                width: 80px;
                height: 80px;
                margin-top: 10px;
            }
        }
    }
</style>
