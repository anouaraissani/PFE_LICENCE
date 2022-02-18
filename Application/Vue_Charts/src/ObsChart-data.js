export const ObsChartData = {
    type: "polarArea",
    data: {
      labels: ["ADMIS", "ADMIS SESSION 2", "ADMIS DETTES", "AJOURNE"],
      datasets: [
        {
          label: "Nombre d’étudiants de département par observation",
          data: [150, 120, 55 ,11],
          backgroundColor:  [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(255,0,0)'
          ],
          borderColor: "#36495d",
          borderWidth: 1
        }, 
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      title:{
        display: true,
        position:"bottom",
        text:"Nombre d'etudiant par observation",
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
  
  export default ObsChartData;