<style lang="less" scoped>
    .slide {
        width: 600px;
        height: 400px;
        overflow: hidden;
        position: relative;
    }
    .slide:after {
        content: '';
        display: block;
        overflow: hidden;
        visibility: hidden;
        height: 0px;
        clear: both;
    }
    .slide>div {
        float: left;
        // width: 600px;
    }
    .slide>div>img{
        width: 600px;
        height: 400px;
    }
    .iconfont {
        font-size: 36px;
    }
    .icon-btn {
        position: absolute;
        top: 0px;
        background-color: #efefef;
        color: #333;
        height: 400px;
        line-height: 400px;
        opacity: 0.5;
        padding: 0px 10px;
    }
    .icon-btn:hover{
        cursor: pointer;
    }
    .icon-left {
        // left: 15px;
    }
    .icon-you {
        right: 0px;
    }
</style>
<template>
  <div class="slide" v-if="urlData.length">
      <div @click="prev()" v-if="leftRight" class="icon-btn iconfont icon-left">

      </div>
      <div class="" v-for="(item,index) in urlData" :key="index" v-if="item.status">
          <img :src="item.url" :alt="item.title?item.title: '' ">
      </div>
      <div  @click="next()" v-if="leftRight" class="icon-btn iconfont icon-you">

      </div>
  </div>
</template>
<script>
    export default {
        name: 'Slide',
        props:{
            urlData: {
                type: Array,
                default: [],
            },
            leftRight: {
                type: Boolean,
                default: true
            }
        },
        created(){
            let _this = this;
            _this.urlData.forEach(function( item, index ) {
                let bool = index == 0 ? true : false;
                Object.assign(item,{status: bool})
            });
        },
        data(){
            return {

            }
        },
        methods: {
            clearStatus: function() {
                let _this = this;
                let i;
                _this.urlData.forEach(function( item,index ){
                    if( item.status){
                        i = index;
                    }
                    item.status = false;
                    _this.$set( _this.urlData,index,_this.urlData[index])
                });
                return i;
            },
            prev: function( ){
                let _this = this;
                
                let i = _this.clearStatus();
                if ( i == 0 ){
                    i = _this.urlData.length-1;
                    _this.urlData[i].status = true;
                } else {
                    _this.urlData[i-1].status = true;
                }
                _this.$set( _this.urlData,i,_this.urlData[i])
            },
            next: function() {
                let _this = this;
                let i = _this.clearStatus();
                if ( i == _this.urlData.length-1 ){
                    i = 0;
                    _this.urlData[0].status = true;
                } else {
                    _this.urlData[i+1].status = true;
                }
                _this.$set( _this.urlData,i,_this.urlData[i])
            }
        }
    }

</script>
