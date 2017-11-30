<style lang="less" scoped>
  .el-aside{
    background-color:#46566a;
    height: 100%;
    position: fixed;
    left: 0px;
    
  }
  .el-main {
    
    height: 100%;
    margin-left: 180px;
  }
  .el-header {
    background-color:#20a0ff;
    height: 48px;
    margin-left: 180px;
  }
  .el-container {
    height: 100%;
  }
  .el-menu {
        
    // margin-top: 32px;
  }
  .el-menu,.el-menu-item {
    // height: 28px;
    // line-height: 28px;
  }
</style>
<template>
    <div>
      <el-container>
        <el-aside width="180px">
          Aside
        </el-aside>
        <el-container>
          <el-header>
            <el-tabs type="border-card">
              <el-tab-pane label="用户管理" closable="true"></el-tab-pane>
              <el-tab-pane label="配置管理" closable="true"></el-tab-pane>
              <el-tab-pane label="角色管理" closable="true"></el-tab-pane>
              <el-tab-pane label="定时任务补偿" closable="true"></el-tab-pane>
            </el-tabs>
          </el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div> 
</template>
<script>
import Vue from 'vue';
import Bus from '../common/js/this';
export default{
  data(){
    return{
        message: 'hello,world6',
        visible: false,
        navs: [],
        menu: {
          activeIndex: '1',
        }
    } 
  },
  created(){
    let _this = this;
    _this.navs = Bus.allRouter;
  },
  methods: {
    adds(){
      Bus.$emit('go','indexc');
    }
  }
}
</script>