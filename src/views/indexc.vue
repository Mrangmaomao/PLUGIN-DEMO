<style lang="less">
  
</style>
<template>

  <div>
    
        <span>{{message}}</span>
        <Slide :urlData="urlData" ></Slide>
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