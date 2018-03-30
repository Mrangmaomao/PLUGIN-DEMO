<style scoped lang="less">

</style>
<template>
 <div> {{mess}}
     <ul>
         <li v-for='(item , index) in pages' :key="item"
         :style="[transformIndex(index),transform(index)]"
         >
             {{item.src}}
         </li>
     </ul>
 </div>
</template>
<script>
    export default {
        name:'Slip',
        data(){
            return {
                mess: 'lip',
                pages: [{
                    src : 1,

                },{
                    src : 2,

                },{
                    src : 3,

                },{
                    src : 4,

                },{
                    src : 5,

                }]
            }
        }
    }
</script>