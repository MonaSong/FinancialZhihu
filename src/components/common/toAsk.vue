<template>
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="40%"
    :before-close="closeDialog"
    center>

    <el-form :model="form" label-width="80px">
      <el-form-item label="问题标题">
        <el-input v-model="form.title" placeholder="请输入评论标题"></el-input>
      </el-form-item>

      <el-form-item label="问题描述">
        <el-input type="textarea" v-model="form.description" placeholder="请输入问题描述"></el-input>
      </el-form-item>

    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click='closeDialog'>取消</el-button>
      <el-button type="primary" @click="onSubmit">确定</el-button>
    </span>

  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      msg:'',
      form:{},
    }
  },
  props: {
    dialogVisible: {
      type: Boolean,
    },
  },
  methods: {
    onSubmit() {
      console.log('请提交数据');
      this.$emit('saveData',this.form);
    },
    closeDialog() {
      this.$emit('closeDialog');
    }
  }
}
</script>
