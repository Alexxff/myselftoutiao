<template>
<el-row class="layout-header" type="flex" justify="space-between">
  <el-col :span="6" class="left-header">
    <i class="el-icon-s-unfold"></i>
    <span>江苏传智播客教育科技股份有限公司</span>
  </el-col>
  <el-col class="layout-right" :span="3">
    <img src="../../assets/img/avatar.jpg" alt="">
    <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          我我我
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>git地址</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
  </el-col>
</el-row>
</template>

<script>
export default {

}
</script>

<style>

</style>
