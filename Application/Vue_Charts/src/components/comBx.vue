<template>
<div id="comboBoxess">
         <br>
          <div style="padding-left: 10px">
          <ejs-combobox id='formations' :dataSource='formationData' :fields='formationfields' :change='onformationChange' placeholder='Formation' 
          ></ejs-combobox>
        </div>
        <div class="padding-top">
          <ejs-combobox id='spécialités' :dataSource='spécialitéData' :enabled='spécialitéenabled' :fields='spécialitéfields' :change='onspécialitéChange' placeholder='Spécialité'></ejs-combobox>
        </div>
        <div class="padding-top">
          <ejs-combobox id='sections' :dataSource='sectionData' :enabled='sectionenabled' :fields='sectionfields' placeholder='Section'></ejs-combobox>
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
      sectionData : [
          //LICENCE
          //ISIL
        { sectionName: 'A', spécialitéId: '101', sectionId: 201 },
        { sectionName: 'B', spécialitéId: '101', sectionId: 202 },
          //ACAD
        { sectionName: 'A', spécialitéId: '102', sectionId: 203 },
        { sectionName: 'B', spécialitéId: '102', sectionId: 204 },
        { sectionName: 'C', spécialitéId: '102', sectionId: 205 },
          //GTR
        { sectionName: 'A', spécialitéId: '103', sectionId: 206 },
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
          var spécialitéObj = document.getElementById('spécialités').ej2_instances[0];
          var sectionObj = document.getElementById('sections').ej2_instances[0];
          var semestreObj = document.getElementById('semestres').ej2_instances[0];
           //Query the data source based on formation ComboBox selected value
          spécialitéObj.query = new Query().where('formationId', 'equal', formationObj.value);
          // enable the spécialité ComboBox
          spécialitéObj.enabled = true;
          //clear the existing selection.
          spécialitéObj.text = null;
          // bind the property changes to spécialité ComboBox
          spécialitéObj.dataBind();

           //Query the data source based on formation ComboBox selected value
          semestreObj.query = new Query().where('formationId', 'equal', formationObj.value);
          // enable the spécialité ComboBox
          semestreObj.enabled = true;
          //clear the existing selection.
          semestreObj.text = null;
          // bind the property changes to spécialité ComboBox
          semestreObj.dataBind();

          //clear the existing selection in section ComboBox
          sectionObj.text = null;
          //disabe the section ComboBox
          sectionObj.enabled = false;
          //bind the property cahnges to section ComboBox
          sectionObj.dataBind();
        },
        onspécialitéChange: function() {
          var spécialitéObj = document.getElementById('spécialités').ej2_instances[0];
          var sectionObj = document.getElementById('sections').ej2_instances[0];
          sectionObj.query = new Query().where('spécialitéId', 'equal', spécialitéObj.value);
          // enable the section ComboBox
          sectionObj.enabled = true;
          //clear the existing selection
          sectionObj.text = null;
          // bind the property change to section ComboBox
          sectionObj.dataBind();
        }
    }  
}
</script>

<style scoped>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>