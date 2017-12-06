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
  .header {
        margin-top: 12px;
        background-color: #efefef;
        height: 40px;
  }
  .header:after{
    content: '';
    display: block;
    visibility: hidden;
    height: 0px;
    clear: both;
    
   
  }
  .header li{
     list-style: none;
     width: 180px;
     float: left;
     color: #666;
     outline-style: none;
     line-height: 40px;
  }
</style>
<template>
    <div>
      <el-container>
        <el-aside width="180px">
          猫猫收银系统
        </el-aside>
        <el-container>
          <el-header>
            <div>
              <ul class="header">
                <li>
                  <a href="">首页</a>
                </li>
                <li>
                  <a href="">辅助</a>
                </li>  
              </ul>               
            </div>

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
// function call(fn,...arg) {
//   return new Promise((resolve,reject)=>{
//     fn(...arg).then(response=>{
//       resolve(response)
//     }).catch(e=>{
//       reject(e)
//     })
//   })
// }
// function actuator(genFun) {
//   return new Promise((resolve,reject)=>{
//     let gen = genFun();
//     function next() {
//       let value = gen.next();
//       if (value.done) {
//         resolve(value);
//         return;
//       }
//       if(value.value&&value.value.then){
//         value.value.then(response=>{
//           gen.next(response)
//         })
//       } else {
//         gen.next();
//       }
//     };
//     next();
//   });
 
// }
// function getData(time) {
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('done'),3000)
//   })
// }
// function * init() {
//   const a = yield call(getData,3000);
//   console.log(a);
// }
// actuator(init);
</script>