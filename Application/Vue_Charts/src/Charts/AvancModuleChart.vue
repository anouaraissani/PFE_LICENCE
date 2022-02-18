<template>
  <div>
    <canvas id="AvancModuleData-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import AvancModuleDatatData from '../AvancModule-data.js'

export default {
  name: 'AvancModuleDatat',
  data() {
    return {
      AvancModuleDatatData: AvancModuleDatatData
    }
  },
  mounted() {
    const ctx = document.getElementById('AvancModuleData-chart');
    new Chart(ctx, this.AvancModuleDatatData);
  }
}
</script>