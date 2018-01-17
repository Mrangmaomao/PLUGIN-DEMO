<style lang="less">
    #canvas:hover{
        cursor: pointer;
    }
</style>
<template>
    <div>
        <canvas width="120" height="40" id='canvas' v-show="showCode"></canvas>  
        <button class='aa' @click="show">验证码验证</button>      
    </div>  
</template>
<script>
    import getCode from 'get-number-code';
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
            }
        }
    }
</script>