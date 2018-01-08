<style lang="less">
  // .el-carousel__item h3 {
  //   color: #475669;
  //   font-size: 18px;
  //   opacity: 0.75;
  //   line-height: 300px;
  //   margin: 0;
  // }
  
  // .el-carousel__item:nth-child(2n) {
  //   background-color: #99a9bf;
  // }
  
  // .el-carousel__item:nth-child(2n+1) {
  //   background-color: #d3dce6;
  // }
  .slides img{
    width: 100%;
    height: auto;
  }
</style>
<template>

  <div>
    
        <span>{{message}}</span>
        <el-row>
          <el-col :span="12">
            <el-carousel :interval="5000" arrow="always" class="slides" height="400px">
              <el-carousel-item v-for="item in urlData" :key="item.url">
                <img :src="item.url" alt="">
              </el-carousel-item>
            </el-carousel>
          </el-col>
        </el-row>

        <!-- <Slide :urlData="urlData" ></Slide> -->
    </div> 
   

</template>
<script>
import Vue from 'vue';
import Timg from '../common/img/timg.jpg';
import Timg1 from '../common/img/timg1.jpg';
import Timg2 from '../common/img/timg2.jpg';
import Timg3 from '../common/img/timg3.jpg';
export default{
  data(){
    return{
        message: 'hello,world6',
        slideStyle: {
          width: '800px',
          height: '450px'
        },
        urlData: [{
          url: Timg,
        },{
          url: Timg1,
        },{
          url: Timg2,
        },{
          url: Timg3,
        }
          
        ]
    }
      
  },
  created(){
    console.log(this,6666666666666666)
  }
}
</script>