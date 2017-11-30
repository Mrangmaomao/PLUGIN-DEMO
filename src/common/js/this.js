import Vue from 'vue';
import routers from '../../router.js';
export default new Vue({
    data(){
        return {
            isLogin: 0, // 0 未登陆 1 已登录
            allRouter: [Object.assign(routers[0],{'id':1})],
        }
    },
    created(){
        let _login = sessionStorage.getItem('isLogin') || '';
        if ( _login == '') {
            sessionStorage.setItem('isLogin',this.isLogin);
        }
    },
    watch:{
        isLogin : function (val, oldVal ){
            sessionStorage.setItem('isLogin',val);
        },
        allRouter: function( val,oldVal ){
            val.forEach(function( index, item ) {
             item.id = index +1 ;   
            });
        }
    }
})