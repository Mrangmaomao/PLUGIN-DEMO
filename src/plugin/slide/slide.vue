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
    .slides-enter,.slides-enter-active{
        transition: all 0.5s ease;
        transform: translateX(0)
    }
    .slides-leave,.slides-leave-active{
        transition: all 2s ease;
        transform: translateX(-100%);
    }
    .img-content {
        display:flex;
        align-items: content;
    }
</style>
<template>
  <div class="slide" v-if="urlData.length" @mouseover="clearAnimation" @mouseout="startAnimation">
      <div @click="prev()" v-if="leftRight" class="icon-btn iconfont icon-left" >

      </div>
    <transition-group tag="div" name='slides' class='img-content'>
        <img v-for="(item,index) in urlData" :key="0" v-show="showIndex == index" :src="item.url" :alt="index">
    </transition-group>
      <div  @click="next()" v-if="leftRight" class="icon-btn iconfont icon-you" >

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
            },
            time: {
                type: Number,
                default: 8000
            }
        },
        created(){
            let _this = this;
            _this.startAnimation();
        },
        data(){
            return {
                showIndex: 0,
            }
        },
        computed:{
            prevIndex: function() {
                let _this = this;
                let i  = ( _this.showIndex == 0 ) ? _this.urlData.length - 1 :  _this.showIndex - 1;
                return i;
                
            },
            nextIndex: function() {
                let _this = this;
                let i = ( _this.showIndex == _this.urlData.length-1 ) ? 0 :  _this.showIndex + 1;
                return i;
            },
            timeOut: function() {

            }
        },
        beforeDestroy() {
            let _this = this;
            _this.clearAnimation();
        },
        methods: {
            prev: function( ){
                let _this = this;
                _this.showIndex = _this.prevIndex;
            },
            next: function() {
                let _this = this;
                _this.showIndex = _this.nextIndex;
            },
            clearAnimation: function() {
                let _this = this;
                clearInterval( _this.animation );
            },
            startAnimation: function() {
                let _this =this;
                _this.animation = setInterval( ()=>{
                    _this.next();
                }, _this.time)
            }
        }
    }
</script>
