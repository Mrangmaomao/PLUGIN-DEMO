<style lang="less">
 .myself>.group {
   display: flex;
   align-items:flex-start;
 }
 .my {
   margin-left: 100px;
 }
 .myself>.group>p:first-child {
   margin-left: 2em;
 }
 .myself h3 {
   text-align: center;
 }
 .my>.myself {
   
   
   width:30%;
   color:#666;
 }
 .my-border{
   background-color: #d5f1fd;
   padding:15px;
   border:1px solid #c1d5fb;
   border-radius: 4px;
 }
 .my-flex {
    display: flex;
   align-items:flex-start;
   justify-content: flex-star;
   margin-bottom:20px;
 }
 .my-flex >div {
   margin-left: 15px;
 }
 .my-skills {
   width:40%;
 }
 .text-content {
   text-align: center;
 }
 .my-exper {
   width: 60%;
 }
 .exper-group-title {
   border-bottom: 1px solid #5aa0bd;
   padding-bottom: 10px;
 }
 .exper-group-content {
   margin-left: 10px;
 }
 .exper-group {
   margin-bottom: 40px; 
 }
</style>
<template>

  <div class='my'>
     <h2>个人简历</h2> 
    <div class="my-flex">
      
      <div class='myself my-border'>
        <h3>个人信息</h3>  
        <div class="group">
          <p>姓名：</p>
          <p>王茂</p>
        </div>
        <div class="group">
          <p>年龄：</p>
          <p>22岁</p>
        </div>
        <div class="group">
          <p>职业：</p>
          <p>前端工程师</p>
        </div>
        <div class="group">
          <p>爱好：</p>
          <p>摄影，锻炼，爬山</p>
        </div>
        <div class="group">
          <p>个人名言：</p>
          <p>热爱每一天，热爱生活，遇见最好的自己。</p>
        </div>
        <div class="group">
          <p>
            简历下载：
          </p>
          <p>
            <button class='down'>下载</button>
          </p>
        </div>
        <!-- <div class="group">
          <p>
            业余简历下载：
          </p>
          <p>
            <button class='down'>下载</button>
          </p>
        </div> -->
        
      </div> 

 
      <div class="my-border my-skills">
        <h3 class="text-content">专业技能</h3>
        <div>
          <p>
            1.  热爱 WEB 开发，熟练掌握 HTML,CSS,JS，Ajax 等常用技术能熟练使用 es6 常用
          </p>
           <p>
            2. 熟练掌握 JS 常用库 Jquery
          </p>
           <p>
            3.  熟练掌握 JS 常用框架 knockout，vue,了解 react。
          </p>
           <p>
            4.  熟练掌握前端常用 js/css 编译工具: coffee , Less
          </p>
           <p>
            5.  熟练掌握的版本管理工具： SVN, git
          </p>
           <p>
            6.  web 开发相关技能：express, nginx，jira , photoshop 简单图片处理
          </p>
          <p>
            7.  GitHub 地址 ：<a href="https://github.com/Mrangmaomao">https://github.com/Mrangmaomao</a>
          </p>
        </div>
      </div>
    </div>
    <div class="my-flex">
            <div class="my-border my-exper">
        <h3 class="text-content">个人经历</h3>
        <div>
          <div class="exper-group">
            <p class="exper-group-title">
                天露物流有限公司
            </p>
            <div class="exper-group-content">
              <p>时间：2017.9 - 至今 </p>
              <p>职位： 前端工程师</p>
              <p>岗位职责： 规范代码风格，确保运行效率。控制前度开发进度，页面交互。保证项目进度，上线。使用 git 对代码进入 合并开发分支与主分支，回滚等操作。使用svn进行内部资料的更换。  
                  前端版本迭代。对不利于的用户体验的前端功能提出建议，与产品经理讨论解决方式。 对已有的前端功能进行优化，保证运行速度。 </p>
            </div>
            
          </div>
          <div class="exper-group">
            <p class="exper-group-title">
                四川上品软件有限公司 
            </p>
            <div class="exper-group-content">
              <p>时间：2016.06-2017.09  </p>
              <p>职位： 前端工程师</p>
              <p>岗位职责：对页面的兼容性调整，页面优化，静态页面，页面交互，用户体验度。利用公司现用技术，html, css, css3, js , jquery, js, ztree, require ， ajax , bootstarp 对现有的OA系统进行维护（包括pc端，手机端 ，对页面的整洁性，性能，样式，兼容性，前端功能 ）以及新功能的添加，配合UI实现高效的页面重现，后端数据到前台的可视化。  其中包含 原生js函数功能的封装。在公司封装过的组件 手机端有： 下拉加载刷新， 左滑，右滑，轮播插件。pc 端 有：ie8兼容性 js函数的封装，列如 indexof。 左边列表滚动 封装。 学习新技术  react, antd , webpack dva, node 进行对新版的改革 。 使用前端技术 配合 任何一个项目  的前端工作。 例如 政府项目的pc网站 和 手机网站，公司官网 。 以及维护项目的前端工作 。   </p>
            </div>
            
          </div>
          <div class="exper-group">
            <p class="exper-group-title">
                四川星酷物联网科技有限公司  
            </p>
            <div class="exper-group-content">
              <p>时间：2015.01-2016.05 </p>
              <p>职位： SEO + 前端工程师</p>
              <p>岗位职责： 负责网站的日常优化以及公司官方微信的维护，以及利用photoshop进行推广图片制作，后期主要以前端工作为主要，包括 pc端页面的编写，ajax数据的交互以及展现，其中公司的产品是一个电商网站。星酷商城。  </p>
            </div>
            
          </div>
          <div class="exper-group">
            <p class="exper-group-title">
                西华大学 （本科）
            </p>
            <div class="exper-group-content">
              <p>时间：2019年毕业(预计) </p>
              <p>专业：工程造价 </p>
            </div>
            
          </div>
            <div class="exper-group">
            <p class="exper-group-title">
                四川省人民医院护士学校（中专） 
            </p>
            <div class="exper-group-content">
              <p>时间：2011.9 - 2014.6 </p>
              <p>专业：药剂学 </p>
            </div>
            
          </div>
          </p>
        </div>
      </div>
    </div>
    <Slip></Slip> 
  </div>
  

</template>
<script>
import Vue from 'vue';
import Timg from '../common/img/timg.jpg';
import Timg1 from '../common/img/timg1.jpg';
import Timg2 from '../common/img/timg2.jpg';
import Timg3 from '../common/img/timg3.jpg';
export default{
  data(){
    return{
       
    }
      
  },
  created(){
    console.log(this,6666666666666666)
  }
}
</script>