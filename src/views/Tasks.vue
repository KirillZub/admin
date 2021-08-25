<template>
  <div class="task">
    <TasksPanel/>
  </div>
</template>

<script>
// @ is an alias to /src
import TasksPanel from '@/components/TasksPanel.vue'

export default {
  name: 'Steps',
  components: {
    TasksPanel
  }
}
</script>