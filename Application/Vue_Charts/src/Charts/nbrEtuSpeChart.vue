<template>
  <div>
    <canvas id="nbrEtuSpeData-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import nbrEtuSpeData from '../nbrEtuSpeChart-data.js'

export default {
  name: 'nbrEtuSpeData',
  data() {
    return {
      nbrEtuSpeData: nbrEtuSpeData
    }
  },
  mounted() {
    const ctx = document.getElementById('nbrEtuSpeData-chart');
    new Chart(ctx, this.nbrEtuSpeData);
  }
}
</script>