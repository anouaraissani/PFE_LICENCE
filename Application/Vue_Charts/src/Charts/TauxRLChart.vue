<template>
  <div>
    <canvas id="TauxRLData-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import TauxRLData from '../TauxRL-data.js'

export default {
  name: 'TauxRLData',
  data() {
    return {
      TauxRLData: TauxRLData
    }
  },
  mounted() {
    const ctx = document.getElementById('TauxRLData-chart');
    new Chart(ctx, this.TauxRLData);
  }
}
</script>