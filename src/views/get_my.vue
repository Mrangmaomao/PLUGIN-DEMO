<style lang="less">
    #canvas:hover{
        cursor: pointer;
    }
    #rich {
        width: 100%;
        height: 300px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
    .richText div {
        margin-top: 20px;
    }
    .richText .operation span{
        width:120px;
        height: 34px;
        line-height: 34px;
        background-color: #fda085;
        color: #fff;
        display: inline-block;
        margin: 10px;
        text-align: center;
        border-radius:8px;
    }
    .richText .operation span:hover {
        cursor:pointer;
    }
</style>
<template>
    <div class="richText">
       <div>{{title}} </div>
       <div class="operation">
           <span @click="closeWrite">关闭</span>
           <span @click="addBold">加粗</span>
           <span @click="addItalics">斜体</span>
           <span @click="addUnderline">下划线</span>
           <span @click="addBorder">字符边框</span>
           <span @click="addDelete">删除线</span>
           <span @click="addSuper">上标</span>
           <span @click="addSub">下标</span>
           <span @click="addClean">清除格式</span>
           <span @click="addBrush">格式刷</span>
           <span @click="addAuto">自动排版</span>
           <span @click="addRef">引用</span>
           <span @click="addTextCopy">纯文本粘贴模式</span>
           <span @click="addFontsColor">字体颜色</span>
           <span @click="addBgColor">背景色</span>
           <span @click="addFutrue">全选</span>
           <span @click="addCleanText">清空文档</span>
       </div>
       <div id="rich"></div>       
    </div>  
</template>
<script>
    import richText from '../common/js/richText.js';
    export default {
        data(){
            return {
                title: '富文本',
                el: ''
            }
        },
        watch: {
            showCode: function( val, oldVal) {
                // if( val ) getCode({el:'#canvas'});
            }
        },
        created(){
           
        },
        mounted(){
            let _this = this;
            _this.el = document.querySelector( '#rich' );
            _this.closeWrite();
        },
        methods:{
            closeWrite: function() {
                let isEdit = this.el.contentEditable;
                this.el.contentEditable = ( isEdit == 'inherit' || isEdit == 'false' ) ? true : false;    
            },
            addBold: function(){ //加粗

            },
            addItalics: function(){

            },
            addUnderline: function(){

            },
            addBorder: function() {

            },
            addDelete: function(){

            },
            addSuper: function() {

            },
            addSub: function(){

            },
            addClean: function(){

            },
            addBrush: function(){

            },
            addAuto: function(){

            },
            addRef: function(){

            },
            addTextCopy: function(){

            },
            addFontsColor: function(){

            },
            addBgColor: function(){

            },
            addFutrue: function(){

            },
            addCleanText: function(){
                
            }
        }
    }
</script>
