<template>
<el-row class="layout-header" type="flex" justify="space-between">
  <el-col :span="16" class="left-header">
    <i class="el-icon-s-unfold"></i>
    <span>江苏传智播客教育科技股份有限公司</span>
  </el-col>
  <el-col class="layout-right" :span="3">
    <!-- <img src="../../assets/img/avatar.jpg" alt=""> -->
    <img :src="user.photo?user.photo:defaultImg" alt="">
    <el-dropdown trigger="click" @command="commandAction">
        <span class="el-dropdown-link">
          我我我
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="account">个人信息</el-dropdown-item>
          <el-dropdown-item command="git">git地址</el-dropdown-item>
          <el-dropdown-item commond="out">退出</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
  </el-col>
</el-row>
</template>

<script>
export default {
  data () {
    return {
      user: {
      },
      defaultImg: require('../../assets/img/avatar.jpg')
    }
  },
  methods: {
    getUserInfo () {
      let userInfo = window.localStorage.getItem('user-info')
      let token = userInfo ? JSON.parse(userInfo).token : null
      token && this.$axios({
        url: './user/profile',
        headers: { 'Authorization': `Bearer ${token}` }
      }).then(result => {
        this.user = result.data.data
      })
    },
    commandAction (command) {
      if (command === 'account') {
        this.$router.push('/home/account')
      } else if (command === 'git') {
        window.location.href = 'https://github.com/Alexxff/myselftoutiao'
      } else {
        window.localStorage.clear()
        this.$router.push('/login')
      }
    }
  },
  created () {
    this.getUserInfo()
  }
}
</script>

<style lang="less" scoped>
.layout-header{
padding:12px 0;
.left-header{
  display:flex;
  align-items: center;
  i{
    font-size: 20px;
    margin-right:4px;
  }
}
.layout-right{
  display: flex;
  align-items: center;
  img{
    width: 40px;
    height: 40px;
    border-radius:50%;
    margin-right:10px;
  }
}
}
</style>
