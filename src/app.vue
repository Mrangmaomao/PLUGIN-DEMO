<style lang="less" scoped>
    .app {
        .btn {
            color: red;
        }
       height: 100%;
       
    }
    .bg {
         background: url('./common/img/psb.jpg');
        height: 100%;
        background-size: cover;
        min-height: 1000px;
    }
    .model {
        background: rgba(0,0,0,.5);
        min-height: 300px;
        width: 50%;
        margin: 0 auto;
        position: absolute;
        top: 100px;
        left: 25%;
        color: #fff;
    }
    .model h2{
        text-align: center;
    }
    .content p{
        text-indent: 2em;
        padding: 10px 16px;

    }
    .content a{
        text-align: center;
        display: block;
        width: 120px;
        margin:2rem auto;
        color: #39f;
        border: 1px solid #39f;
        padding: 8px 15px;
        border-radius: 4px;
    }
    .content a:hover{
        cursor: pointer;
        color: #fff;
        background-color:#39f; 

    }
</style>
<template>
    <div class="app">
        <div class="bg" v-if="isLogin == 0">
            <div class="model">
                <div class="content">
                    <h2>欢迎来到猫猫的主页</h2>
                    <p>大家好，我是一名从事计算机工作的程序媛，很高兴来到我的个人主页。我写这个网站的目的有两点，第一点是为了通过这个网站使自己成长起来，增长见识，学习到更多的知识，以便以后能够用到自己的所学，第二点是为了读者，看我网站的人其实是幸运的，因为我是一个初学者，读者朋友可以和我一起进步，一起探讨，共同进步，达到互利共赢，也希望我写的博客内容能够帮助一些在编程方面有问题的朋友。在这里如果你发现我写的有哪些不对或不足之处，请您谅解。你可以及时评论来告诫我，我会采纳改正的，我会不断完善我的个人网页的。希望你们常来，谢谢！</p>
                    <a v-if="isLogin == 0" @click="goMain">跳转到主页</a>
                </div>
                
            </div>
            
        </div>
        
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