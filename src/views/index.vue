<style lang="less" scoped>
  .el-aside{
    background-color:#39f;
    height: 100%;
    position: fixed;
    left: 0px;
    padding-top: 20px;
    
  }
  .el-main {
    
    height: 100%;
    margin-left: 180px;
  }
  .el-container {
    height: 100%;
  }
  .menu {
     padding-left: 0px;
     
  }
  .menu li {
    list-style:none ;
    background-color: #62affc;
    border: 1px solid #62affc;
    height: 40px;
    line-height: 40px;
    padding-left: 15px;
    width: 180px;
  }
  .menu li a{
    text-decoration: none;
    color: #fff;
  }
</style>
<template>
    <div>
      <el-container>
        <el-aside width="180px">
          <el-menu :default-openeds="['1', '3']">
              <ul class="menu">
                <li v-for=" item in navs " :key="item.name" >
                  <router-link :to="item.url">{{item.name}}</router-link>
                </li>
              </ul>
          </el-menu>
        </el-aside>
        <el-container>
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
        navs: [
          {
            name:'验证码',
            url: '/getCode'
          }
        ],
        menu: {
          activeIndex: '1',
        },
        leftMenu: [
          {
            
          }
        ]
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