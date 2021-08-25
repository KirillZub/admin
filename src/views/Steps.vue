<template>
  <div class="delivery">
    <StepsPanel/>
  </div>
</template>

<script>
// @ is an alias to /src
import StepsPanel from '@/components/StepsPanel.vue'

export default {
  name: 'Steps',
  components: {
    StepsPanel
  }
}
</script>