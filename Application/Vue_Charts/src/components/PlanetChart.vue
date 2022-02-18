
<template>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
    <h1> YOU KNOW THAT U CAN DO IT</h1>
        <div>  
          <div class="chart-container" style="position: relative; height:30vh; width:50vw">
            <canvas id="planet-chart" width="40" height="20"></canvas>
          </div >
      </div>
      <br>
       <br>
        <br>
         <br>
          <br>
           <br>
            <br>
             <br>
              <br>

          
  <!--    <div style="width: 600px">
          <vue-table-dynamic :params="params" ref="table"></vue-table-dynamic>
      </div>-->
  </body>
  </html>
</template>

<script>
import Chart from 'chart.js'
import Enseignement from '../Connect-API.js'
//import VueTableDynamic from 'vue-table-dynamic'

let data1 = [];
let data2 = [];

chartIt();
async function chartIt(){
  await created();
  const ctx = document.getElementById('planet-chart');
    new Chart(ctx, {
    type: "bar",
    data: {     
    labels:data1,
    datasets: [
      {
        barPercentage: 0.5,
        barThickness: 30,
        maxBarThickness: 60,
        minBarLength: 0.5,
       // label: "Nombre d'enseignants par grade",
        data: data2,
        backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                
            ],
        borderWidth: 0.1
      },
      ]},
    options: {
      title:{
        display: true,
        position:"bottom",
        text:"Graphe à bar identifiant le nombre d'enseignant par grade",
        fontSize:18,
        fontSizeColor:"#111"
      },
    }
})}
  
 async function created(){
        try {
          const lebel = await Enseignement.getEns();
          data1=lebel[1];
          data2=lebel[0];
          data2.push(0)
        } catch (err) {
          this.error = err.message; 
        }
      }
 export default {chartIt}
 /*
 data(){
  return {
      params: {
        data: [
          ['Nbr_Enseignant', 'Grade'],
          [data1[0], data2[0]],
          [data1[1], data2[1]]
        ],
        header: 'row',
        border: true,
        stripe: true
      },
    }
    },
       async create(){
       try {
          const lebel = await Enseignement.getEns();
          this.data = lebel
            console.log(lebel);
        } catch (err) {
          this.error = err.message;
        }
      }, components: { VueTableDynamic },
  };
 */
 
</script>
