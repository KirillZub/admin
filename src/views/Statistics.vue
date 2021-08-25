<template>
  <div class="statistics">
    <StatisticsPanel/>
  </div>
</template>

<script>
// @ is an alias to /src
import StatisticsPanel from '@/components/StatisticsPanel.vue'

export default {
  name: 'Statistics',
  components: {
    StatisticsPanel
  }
}
</script>