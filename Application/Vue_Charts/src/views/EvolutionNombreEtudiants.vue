<template>
    <div id="app" >
      <div id='container' style="margin:10px ; width:190px; display: flex">
        <div class="columns" >
          <!--comboBoxes -->
          <div id="comboBoxess">
          <br>
          <div style="padding-left: 10px">
               <ejs-combobox id='formations' :dataSource='formationData' :fields='formationfields' :change='onformationChange' placeholder='Formation' v-model="CmBx.formation" ref="formation" ></ejs-combobox>
          </div> 
          <button class="btn" @click="showGraph" >Afficher</button>                                                                                                                          
          </div>
           
        </div>

        <div >
          <div style="width: 650px; height: 500px;">
            <!-- graphe -->
            <EvoEtudChart v-if="show"/>
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
import { Query } from '@syncfusion/ej2-data';
import EvoEtudChart from '../Charts/EvoEtuChart.vue'
import VueTableDynamic from 'vue-table-dynamic'

export default {

  name: 'AppTR',

  data(){
      return {

        params: {
        data: [
          ["Année/Spécialité", "2014", "2015", "2016", "2017","2018","2019", "2020", "2021"],
        
          ["GTR", 40, 45, 50, 30, 60, 70,55, 80],
          ["ISIL", 163, 200,250, 200, 180, 150, 190, 210],
          ["ADAD", 250, 275, 300,350,320, 450, 350, 320]
        ],
        header: 'row',
        border:false,
        stripe: true,
        highlight: { row: [0] },
        highlightedColor: 'rgba(0,100,255, 0.7)'
      },
        CmBx:{
                 formation: "",
                 spécialité: "",
                 section: "",
                 semestre: "",
                 année: "",
        },
          show: false,


           formationData: [
        { formationName: 'Licence', formationId: '1' },
        { formationName: 'Master', formationId: '2' }
      ],
      spécialitéData: [
          //LICENCE
        { spécialitéName: 'ISIL', formationId: '1', spécialitéId: '101' },
        { spécialitéName: 'ACAD ', formationId: '1', spécialitéId: '102' },
        { spécialitéName: 'GTR ', formationId: '1', spécialitéId: '103' },
          //MASTER
        { spécialitéName: 'RSD', formationId: '2', spécialitéId: '104' },
        { spécialitéName: 'IL ', formationId: '2', spécialitéId: '105' },
        { spécialitéName: 'SII ', formationId: '2', spécialitéId: '106' },
        { spécialitéName: 'SSI ', formationId: '2', spécialitéId: '107' },
        { spécialitéName: 'MIND ', formationId: '2', spécialitéId: '108' },
        { spécialitéName: 'MIV ', formationId: '2', spécialitéId: '109' },
        { spécialitéName: 'BIO.INFO ', formationId: '2', spécialitéId: '110' }
      ],
      

      

      formationfields : { text: 'formationName', value: 'formationId' },
      spécialitéfields : { value: 'spécialitéId', text: 'spécialitéName' },
      
      spécialitéenabled : false,

      }
  },
  methods: {

     onformationChange: function() {
          var formationObj = document.getElementById('formations').ej2_instances[0];
          var spécialitéObj = document.getElementById('spécialités').ej2_instances[0];
         
           //Query the data source based on formation ComboBox selected value
          spécialitéObj.query = new Query().where('formationId', 'equal', formationObj.value);
          // enable the spécialité ComboBox
          spécialitéObj.enabled = true;
          //clear the existing selection.
          spécialitéObj.text = null;
          // bind the property changes to spécialité ComboBox
          spécialitéObj.dataBind();
        },

        showGraph: function(){
          //console.log(document.getElementById('formations'));
           //console.log(this.$refs.formation);
           console.log(this.$refs.formation.value);
           if(this.$refs.formation.value == '1'){
             this.show = true;
           }
        }
  },

  components: {

      EvoEtudChart,   
      VueTableDynamic,
  },
      
  };
          
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