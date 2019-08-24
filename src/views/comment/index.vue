<template>
<el-card>

<bread-crumb slot='header'>
<template slot=‘title>评论列表</template>
</bread-crumb>
<el-table :data="list" stripe>
    <el-table-column prop='title' width='500' label='标题'></el-table-column>
    <el-table-column :formatter="formatter" prop="comment_status" label="评论状态"></el-table-column>
    <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
    <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
    <el-table-column label="操作">
        <el-button type="text">修改</el-button>
        <el-button type="text">关闭评论</el-button>
    </el-table-column>
</el-table>
</el-card>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    getComments () {
      this.$axios({
        url: '/articles',
        params: {
          response_type: 'comment'
        }
      }).then(result => {
        this.list = result.data.results
      })
    },
    formatter (row, column, cellValue, index) {
      return cellValue ? '正常' : '关闭'
    }
  },
  created () {
    this.getComments()
  }
}
</script>

<style>

</style>
