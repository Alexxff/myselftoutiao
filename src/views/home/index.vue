<template>
  <el-container>
    <el-aside style='width:200px;height:100vh;background-color:#323745'>

      <layout-aside></layout-aside>
    </el-aside>
    <el-container>
      <el-header>头部内容</el-header>
      <el-main>中间区域</el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import layoutAside from '../../components/home/layout-aside'
export default {
  name: 'home',
  components: {
    'layout-aside': layoutAside
  }
}
</script>
