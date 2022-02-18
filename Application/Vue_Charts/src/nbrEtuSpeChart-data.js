export const nbrEtuSpeChartData = {
    type: "horizontalBar",
    data: {
      labels: ["BIO.INFO", "IL", "MIND", "MIV","RSD", "SII", "SSI"],
      datasets: [
        {
          label: "",
          data: [70, 250, 200 , 150, 180, 68, 55],
          backgroundColor:['rgba(255, 99, 132, 0.4)',
          'rgba(255, 159, 64, 0.4)',
          'rgba(255, 205, 86, 0.4)',
          'rgba(75, 192, 192, 0.4)',
          'rgba(54, 162, 235, 0.4)',
          'rgba(153, 102, 255, 0.4)',
          'rgba(201, 203, 207, 0.4)'],
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
        text:"Nombre d'etudiant par spécialité de la formation licence, l'année 2015",
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
  
  export default nbrEtuSpeChartData;