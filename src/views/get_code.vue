<style lang="less">
    #canvas:hover{
        cursor: pointer;
    }
</style>
<template>
    <div>
        <canvas width="160" height="40" id='canvas' v-show="showCode"></canvas>  
        <button class='aa' @click="show">验证码验证</button>      
    </div>  
</template>
<script>
    import getCode from 'get-number-code';
    // import getCode from '../common/js/numCode.js';
    // import getCode from '../../node_modules/get-number-code/dist/numCode.chunk.js';
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
                let f = getCode({el:'#canvas',num:8});
                console.log( f.getFonts() );
            }
        }
    }
</script>