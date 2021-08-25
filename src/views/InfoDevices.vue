<template>
  <div class="delivery">
    <InfoDevicesPanel/>
  </div>
</template>

<script>
// @ is an alias to /src
import InfoDevicesPanel from '@/components/InfoDevicesPanel.vue'

export default {
  name: 'InfoDevices',
  components: {
    InfoDevicesPanel
  }
}
</script>