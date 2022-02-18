<template>
    <div id="app" >
      <div id='container' style="margin:10px ; width:190px; display: flex">
        <div class="columns" >
          <!--comboBoxes -->
           <div id="comboBoxess">
              <br>   
              <div class="padding-top">
                  <ejs-combobox id='années' :dataSource='AnnéeData'  :fields='annéeFields'  placeholder='Année' v-model="CmBx.année" ref="année"></ejs-combobox>
              </div>
              <button class="btn" @click="showGraph" >Afficher</button>
           </div>
         
        </div>

        <div class="columns" >
          <div style="width: 650px; height: 500px;">
            <!-- graphe -->
            <GradeChart v-if="show"/>
            <div v-if="show" class="base-demo" style="  padding-top: 50px; padding-left: 100px; width: 500px">
                <vue-table-dynamic :params="params"></vue-table-dynamic>
          </div>
          </div>
            
      </div>  
    </div>  
  </div>
</template>

<script>
import Vue from 'vue';
import { ComboBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(ComboBoxPlugin);
import GradeChart from '../Charts/gradeChart.vue'
import VueTableDynamic from 'vue-table-dynamic'

export default {

  name: 'AppTR',

  components: {

      GradeChart,
      VueTableDynamic,   
  },
  data(){
      return {
        params: {
        data: [
          ["Grade", "MA", "MAA", "MAB", "MCA","MCB","PROF"],
          ["Nbr Ens", 12, 15, 8, 9, 12, 4],
        ],
        header: 'row',
        border:false,
        stripe: true,
        highlight: { row: [0] },
        highlightedColor: 'rgba(0,100,255, 0.7)'
      },
        CmBx:{
                 formation: "Licence",
                 spécialité: "",
                 section: "",
                 semestre: "",
                 année: "",
        },
      show: false,
      AnnéeData: [
          //Année
          
        { AnnéeName: '2014 ', AnnéeId: '14' },
        { AnnéeName: '2015', AnnéeId: '15' },
        { AnnéeName: '2016', AnnéeId: '16' },
        { AnnéeName: '2017 ', AnnéeId: '17' },
        { AnnéeName: '2018', AnnéeId: '18' },
        { AnnéeName: '2019 ', AnnéeId: '19' },
        { AnnéeName: '2020', AnnéeId: '20' },
        { AnnéeName: '2021 ', AnnéeId: '21' },
      ], 
      annéeFields : { text: 'AnnéeName', value: 'AnnéeId' },
      }
  },
  methods: {  
        showGraph: function(){
          //console.log(document.getElementById('formations'));
           //console.log(this.$refs.formation);
           console.log(this.$refs.année.value);
           if( this.$refs.année.value == '20'){
             this.show = true;
           }
        }
  },  
}
</script>


<style scoped>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
#container .padding-top {
    padding-top: 20px;
    padding-left: 10px;  
}

.columns{
  margin: 20px 20px 20px 20px;
  width: 300px;
  padding-right: 20px;
  
}

.btn{
    margin-top: 20px;
    margin-left: 10px;
    width: 100px;
    height: 30px;
    background: #3d7dc1;
    border: 0ch;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 500;
    color: white;
}
</style>