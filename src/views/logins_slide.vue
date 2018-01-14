<style lang="">
    
</style>
<template>
    <div>
    {{msg}}
    
        <canvas width="300" height="150" id='canvas' v-show="showCode"></canvas>  
        <button class='aa' @click="show">验证码验证</button>      
    </div>  
</template>
<script>
    import getCode from '../common/js/chinese.js';
    export default {
        data(){
            return {
                msg: 'hello',
                showCode: false,

            }
        },
        watch: {
            showCode: function( val, oldVal) {
                // if( val ) getCode({el:'#canvas'});
            }
        },
        created(){
           
        },
        methods:{
            show: function() {
                this.showCode = true;
                let f = getCode({el:'#canvas'});
                console.log( f.getFonts() );
                console.log( f.getPositions() );
            }
        }
    }
</script>