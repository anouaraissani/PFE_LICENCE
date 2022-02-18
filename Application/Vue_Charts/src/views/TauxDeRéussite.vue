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
          <div class="padding-top">
              <ejs-combobox id='semestres' :dataSource='SemestreData' :enabled='semestreenabled' :fields='semestreFields'  placeholder='Semestre' v-model="CmBx.semestre" ref="semestre"></ejs-combobox>
          </div> 
          <div class="padding-top">
              <ejs-combobox id='années' :dataSource='AnnéeData'  :fields='annéeFields'  placeholder='Année' v-model="CmBx.année" ref="année"></ejs-combobox>
          </div>
           <button class="btn" @click="showGraph" >Afficher</button>
          </div>
          
        </div>

        <div class="columns" >
          <div style="width: 650px; height: 500px;">
            <!-- graphe -->
            <TauxRChart v-if="show"/>
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
import TauxRChart from '../Charts/TauxRLChart.vue'
import VueTableDynamic from 'vue-table-dynamic'
export default {

  name: 'AppTR',

  components: {

      TauxRChart,
      VueTableDynamic 
  },
  data(){
      return {

        params: {
        data: [
          ["Spécialité", "ACAD", "ISIL", "GTR" ],  
          ["%reussite", "95%", "86%", "71%"],
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


      SemestreData: [
          //Semestre
          //LICENCE
        { SemestreName: 'S3', SemestreId: '03', formationId: '1' },
        { SemestreName: 'S4', SemestreId: '04', formationId: '1' },
        { SemestreName: 'S5', SemestreId: '05', formationId: '1' },
        { SemestreName: 'S6', SemestreId: '06', formationId: '1' },
          //MASTER
        { SemestreName: 'S1', SemestreId: '01', formationId: '2' },
        { SemestreName: 'S2', SemestreId: '02', formationId: '2' },
        { SemestreName: 'S3', SemestreId: '01', formationId: '2' },
        { SemestreName: 'S4', SemestreId: '02', formationId: '2' },
      ],
      

      

      formationfields : { text: 'formationName', value: 'formationId' },
      spécialitéfields : { value: 'spécialitéId', text: 'spécialitéName' },
      sectionfields : { text: 'sectionName', value: 'sectionId' },

      annéeFields : { text: 'AnnéeName', value: 'AnnéeId' },
      semestreFields : { text: 'SemestreName', value: 'SemestreId' },
      
      spécialitéenabled : false,
      sectionenabled : false,
      semestreenabled : false,
      }
  },
  methods: {

     onformationChange: function() {
          var formationObj = document.getElementById('formations').ej2_instances[0];
          var semestreObj = document.getElementById('semestres').ej2_instances[0];
           

           //Query the data source based on formation ComboBox selected value
          semestreObj.query = new Query().where('formationId', 'equal', formationObj.value);
          // enable the spécialité ComboBox
          semestreObj.enabled = true;
          //clear the existing selection.
          semestreObj.text = null;
          // bind the property changes to spécialité ComboBox
          semestreObj.dataBind();

        },
       

        showGraph: function(){
          //console.log(document.getElementById('formations'));
           //console.log(this.$refs.formation);
           if(this.$refs.formation.value == '1' && this.$refs.semestre.value == '03' && this.$refs.année.value == '18'){
             this.show = true;
           }
           console.log(this.$refs.formation.value);
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