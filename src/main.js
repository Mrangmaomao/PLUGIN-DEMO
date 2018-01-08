import Vue from 'vue';
import VueRouter from 'vue-router';
import routers from './router.js';
import App from './app.vue';
import ElementUI from 'element-ui';
import commonJS from './common/js/commonJsFunction.js';
import Bus from './common/js/this.js';
import './common/css/main.css';
import VuePlugin from './plugin/index';
import './common/font/iconfont.css';
// import store from './store.js';
import '../node_modules/element-ui/lib/theme-chalk/index.css'
Vue.use( VueRouter );
Vue.use( ElementUI );
Vue.use(commonJS);
Vue.use(VuePlugin );
const RouterConfig = {
    mode: 'hash',
    mode: 'history',
    routes: routers
};
const router = new VueRouter(RouterConfig);
new Vue({
    el: '#app',
    router: router,
    // mode: 'history', //可以使用 h5 history
    replace: true,
    // store: store,
    render: h => h(App)
});
router.afterEach((to, from, next) => {
    document.title = to.meta.title || 'webpack + vue + element-ui';
})
Bus.$on('back',( n )=>{
    let num = n ? n : -1 ;
    router.go( num );
});
Bus.$on( 'go', ( clickNav ) => {
    let _thisPath = '';
    let path = ( ( typeof clickNav == 'object' ) ? clickNav.path : clickNav );
    router.push({
        path,
        query: {
            t: +new Date() //保证每次点击路由的query项都是不一样的，确保会重新刷新view
        }
    });
    // for ( var  i=0; i<routers.length; i++ ) {
    //     let item = routers[i];
    //     if ( path == item.path ){
    //         router.push( item );
    //         _thisPath = item;
    //         break;
    //     }
    // }
    if ( _thisPath != '' ) {
        let isSame = false;
        Bus.allRouter.forEach( ( item ,i ) => {
            if ( item.path == _thisPath.path  ){
                isSame = true;
            }
        });
        if( !isSame ) {
            Bus.allRouter.push(_thisPath);
        }
    }
    console.log( Bus.allRouter);
});
console.log( this,'------------------------');