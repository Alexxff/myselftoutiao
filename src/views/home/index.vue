<template>
  <el-container>
    <el-aside style='width:200px;height:100vh;background-color:#323745'>

      <layout-aside></layout-aside>
    </el-aside>
    <el-container>
      <el-header>
        <layout-header></layout-header>
      </el-header>
      <el-main style='padding:0 0'>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
// import layoutAside from '../../components/home/layout-aside'
// import layoutHeader from '../../components/home/layout-header'
export default {
  name: 'home'
  // components: {
  //   'layout-aside': layoutAside,
  //   'layout-header': layoutHeader

  // }
}
</script>
