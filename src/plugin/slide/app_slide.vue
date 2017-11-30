<template>
  <div id="tableFixed" style="width:400px;overflow:auto">
    <div v-if="isFixed">

    </div>
    <div>
        <div class="headColumns">
          <table >
              <thead >
                  <tr>
                    <th v-for="(item,index) in columns" :key="index">{{item.name}}</th>
                  </tr>
                  
              </thead>
          </table>
      </div>
      <div class="content">
          <table >
              <tbody>
                  <tr v-for="(item,index) in data" :key="index">
                      <td v-for="(cItem,cIndex) in item" :key="cIndex">
                          {{cItem}}
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
    </div>

  </div>
</template>
<script>
    import './app_slide.css';
    export default{
        name:'TableFixed',
        props:{
            fixed:{
                type: Number,
                default (){
                    return 0;
                }
            },
            columns : {
                type: Array,
                default (){
                    return [];
                }
            },
            data : {
                type: Array,
                default (){
                    return [];
                }
            }
        },
        data(){
            return {
                name:'dddd',
                isFixed: false,
            }
        },
        computed:{ //计算

        },
        created(){
            let _this = this;
            if ( _this.fixed != 0 ) {
                _this.fixed = true;
            }
             console.log(this.data);

        },

        methods: {

        }
    }
</script>