<style lang="less">
    .app {
        .btn {
            color: red;
        }
    }
</style>
<template>
    <div class="app">
        
        <a v-if="isLogin == 0" @click="goMain">跳转到主页</a>
       <router-view v-if="isLogin == 1"></router-view>
    </div>
    
</template>
<script>
import { mapGetters  } from 'vuex';
import Bus from './common/js/this.js';
import Vue from "vue";
export default{
    data(){
        let _this = this;
        return {
            isLogin: 0,
            mounth: [
                1,2,3,4
            ],
            navs: []
        }
        
    },
    created(){
        let _this = this;
        let _isLogin = sessionStorage.getItem('isLogin');
        _this.isLogin = _isLogin;
        _this.navs = Bus.allRouter;
    },
    methods:{
        goMain: function(){
            let _this = this;
            Bus.$emit( 'go','/indexc');
            _this.isLogin = true;
            Bus.isLogin = 1;
        },
    }
}
</script>