<template>
  <div class="admin">
    <AdminPanel/>
  </div>
</template>

<script>
// @ is an alias to /src
import AdminPanel from '@/components/AdminPanel.vue'

export default {
  name: 'Admin',
  components: {
    AdminPanel
  }
}
</script>
