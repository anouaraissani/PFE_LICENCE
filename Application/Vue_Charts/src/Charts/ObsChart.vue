<template>
  <div>
    <canvas id="ObsChartData-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import ObsChartDatatData from '../ObsChart-data.js'

export default {
  name: 'ObsChartDatat',
  data() {
    return {
      ObsChartDatatData: ObsChartDatatData
    }
  },
  mounted() {
    const ctx = document.getElementById('ObsChartData-chart');
    new Chart(ctx, this.ObsChartDatatData);
  }
}
</script>