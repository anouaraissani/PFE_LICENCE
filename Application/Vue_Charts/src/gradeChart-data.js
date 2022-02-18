export const gradeChartData = {
    type: "pie",
    data: {
      labels: ["MA", "MAA", "MAB", "MCA","MCB","PROF"],
      datasets: [
        {
          axis: 'y',
          label: "Nombre des enseignants par grade durant l'année 2019",
          data: [12, 15, 8, 9, 12, 4],
          backgroundColor:  ['rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'],
          borderWidth: 8,
          bodercoloer:"rgba(255, 159, 64, 0.2)"
        }, 
      ]
    },
    options: {
      indexAxis: 'y',
      title:{
        display: true,
        position:"bottom",
        text:"Nombre d'enseigants par grade dans l'année 2020",
        fontSize:18,
        fontSizeColor:"#111"
      },
    }
  };
  
  export default gradeChartData;