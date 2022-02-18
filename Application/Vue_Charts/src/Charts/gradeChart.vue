<template>
  <div>
    <canvas id="gradeData-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import gradeData from '../gradeChart-data.js'

export default {
  name: 'gradeData',
  data() {
    return {
      gradeData: gradeData
    }
  },
  mounted() {
    const ctx = document.getElementById('gradeData-chart');
    new Chart(ctx, this.gradeData);
  }
}
</script>