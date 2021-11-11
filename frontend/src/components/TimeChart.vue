<template>
  <div>
    <!-- canvas element for chart -->
    <canvas id="time-chart"></canvas>
  </div>
</template>


<script>
import Chart from 'chart.js'
import chartData from '../client.js'

export default {
  name: 'TimeChart',
  data() {
    return {
      chartData: chartData
    }
  },
  //establish Chart object after mounting the component
  mounted() {
    const ctx = document.getElementById('client');
    new Chart(ctx, this.chartData);
  }
}
</script>