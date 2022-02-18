export const tauxRChartData = {
    type: "bar",
    data: {
      labels: ["BDD2", "GL2", "COMPIL", "RESEAUX", "SI2", "ANGLAIS" ],
      datasets: [
        {
          label: "Etat d’avancement des modules de la specialité ISIL section A",
          data: [50, 60, 52 , 45, 55, 47],
          backgroundColor: "#fec8c1",
          borderColor: "#36495d",
          borderWidth: 0
        }, 
        {
          label: "Etat d’avancement des modules de la specialité ISIL section B",
          data: [45, 55, 47, 80,50, 60],
          backgroundColor: "#0e87c1",
          borderColor: "#36495d",
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
        text:"Etat d'avancement des modules dans chaque section de la spécialité ISIL",
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