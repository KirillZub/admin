<template>
  <div class="delivery">
    <DevicesPanel/>
  </div>
</template>

<script>
// @ is an alias to /src
import DevicesPanel from '@/components/DevicesPanel.vue'

export default {
  name: 'Devices',
  components: {
    DevicesPanel
  }
}
</script>