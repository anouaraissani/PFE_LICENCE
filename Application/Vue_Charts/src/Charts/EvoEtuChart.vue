<template>
  <div>
    <canvas id="evoEtudData-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import evoEtudData from '../EvoEtudChart-data.js'

export default {
  name: 'evoEtudData',
  data() {
    return {
      evoEtudData: evoEtudData
    }
  },
  mounted() {
    const ctx = document.getElementById('evoEtudData-chart');
    new Chart(ctx, this.evoEtudData);
  }
}
</script>