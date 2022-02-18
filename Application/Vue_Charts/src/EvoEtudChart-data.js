
export const nbrEtuSpeChartData = {
    type: "line",
    data: {
      labels: ["2014", "2015", "2016", "2017","2018","2019", "2020", "2021"],
      datasets: [
        {
          label: "Evolution du nombre des etudiants de la spécialité GTR",
          data: [40, 45, 50, 30, 60, 70,55, 80],
          backgroundColor:  ['rgba(255, 99, 132, 0.2)'],
          borderWidth: 0,
      //    fill: false,
        }, 
        {
          label: "Evolution du nombre des etudiants de la spécialité IISL",
          data: [ 163, 200,250, 200, 180, 150, 190, 210],
          backgroundColor:  ['rgba(255, 159, 64, 0.2)'],
          borderWidth: 0,
      //    fill: false,
        },
        {
          label: "Evolution du nombre des etudiants de la spécialité ACAD",
          data: [250, 275, 300,350,320, 450, 350, 320],
          backgroundColor:  ['rgba(255, 205, 86, 0.2)'],
          borderWidth: 0,
     //     fill: false,
        },  
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      title:{
        display: true,
        position:"bottom",
        text:"Evolution du nombre d'etudiant pour chaque spécialité de la formation licence",
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