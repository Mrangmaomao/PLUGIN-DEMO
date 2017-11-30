import Vue from 'vue';
import Vuex from 'vuex';
Vue.use( Vuex );
// const state = { //定义初始值
//     login: false,
// };
// const mutations = { //修改状态的事件回调函数
//     changeState ( state,bool ) {
//         state.login = bool;
//     }
// }
// const actions = { //组件内部用来分发mutation事件的函数
    
// }
// const getters = { // 组件内部使用
//     count( context ) {
//         return context.count;
//     },
// }
export default new Vuex.Store({
    state : {
        login :false,
    },
    mutations : {
        changeState: state => {
            console.log( state );
        }
    },
    actions: {
        async actionA ({ commit }) {
            commit('gotData', await getData())
        },
        async actionB ({ dispatch, commit }) {
            await dispatch('actionA') // 等待 actionA 完成
            commit( 'gotOtherData' , await getOtherData() );
        }
    },
    getters : {
        getState : state => {
            return state;
        }
    }
})
