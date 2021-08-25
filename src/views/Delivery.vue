<template>
  <div class="delivery">
    <DeliveryPanel/>
  </div>
</template>

<script>
// @ is an alias to /src
import DeliveryPanel from '@/components/DeliveryPanel.vue'

export default {
  name: 'Delivery',
  components: {
    DeliveryPanel
  }
}
</script>
