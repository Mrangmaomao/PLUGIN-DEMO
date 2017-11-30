<style lang="less">
  
</style>
<template>

  <div>
        <span>{{message}}</span>

    </div> 
   

</template>
<script>
import Vue from 'vue';

export default{
  data(){
    return{
        message: 'hello,world6',
        
    }
      
  },
  created(){
    console.log(this,6666666666666666)
  }
}
</script>