<style lang="">
    
</style>
<template>
    <div>
        <div class="header">
            <router-link to="/first/indexc">dddd</router-link>
            <ul class="nav" >
                <li v-for="(nav,index) in navs" :key="index+1">
                    <!-- <router-link :to="nav.path">{{nav.meta.title}}</router-link> -->
                    <a @click="navsAdd(nav)">{{nav.meta.title }}</a>
                </li>
            </ul>
        </div>
    </div>

</template>
<script>
    import Bus from '../common/js/this.js';
    export default{
        name:'Layouts',
        data(){
            return {
                navs:[]
            }
        },
        created(){
            let _this = this;
            _this.navs = Bus.allRouter;
            console.log(_this,1111);
            console.log( Bus ,2222);
        },
        methods:{
            navsAdd: function( item ){
                Bus.$emit( 'go',item);
            }
        }
    }
</script>