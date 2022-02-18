export const tauxRChartData = {
    type: "bar",
    data: {
      labels: ["ACAD", "ISIL", "GTR" ],
      datasets: [
        {
          barPercentage: 0.5,
          barThickness: 30,
          maxBarThickness: 60,
          minBarLength: 0.5,
          label: "Taux de réussite des étudiants dans chaque spécialité",
          data: [95, 86, 71 ],
          backgroundColor: ['rgba(255, 99, 132, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(201, 203, 207, 0.2)'],
          borderWidth: 0
        }, 
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      title:{
        display: true,
        position:"bottom",
        text:"Taux de réussite des étudiants de chaque spécialité de la formation licence",
        fontSize:18,
        fontSizeColor:"#111"
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              padding: 25
            }
          }
        ]
      }
    }
  };
  
  export default tauxRChartData;