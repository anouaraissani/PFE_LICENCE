<template>
<div id="comboBoxess">
         <br>
          <div style="padding-left: 10px">
          <ejs-combobox id='formations' :dataSource='formationData' :fields='formationfields' :change='onformationChange' placeholder='Formation' 
          ></ejs-combobox>
        </div>

        <div class="padding-top">
          <ejs-combobox id='semestres' :dataSource='SemestreData' :enabled='semestreenabled' :fields='semestreFields'  placeholder='Semestre'></ejs-combobox>
        </div> 
        <div class="padding-top">
          <ejs-combobox id='années' :dataSource='AnnéeData'  :fields='annéeFields'  placeholder='Année'></ejs-combobox>
        </div>
        
</div>
 
</template>

<script>
import Vue from 'vue';
import { ComboBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(ComboBoxPlugin);
import { Query } from '@syncfusion/ej2-data';

export default {
  name: 'app',
   data () {
    return {
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
      

      annéeFields : { text: 'AnnéeName', value: 'AnnéeId' },
      semestreFields : { text: 'SemestreName', value: 'SemestreId' },
      
      
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
        
    }  
}
</script>

<style scoped>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>