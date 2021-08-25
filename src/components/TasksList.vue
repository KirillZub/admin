<template>
    <div class="steps__block_list">
        <ul>
            <TasksItem
            v-for="(task, i) of tasks" :key="task"
            v-bind:task="task"
            v-bind:index="i"
            v-on:remove-task="removeTask"
            />
        </ul>
    </div>
</template>

<script>

import TasksItem from '@/components/TasksItem'

export default {
    props: ['tasks'],
    components:{
        TasksItem
    },
    methods: {
        removeTask(id) {
            this.$emit('remove-task', id)
        }
    }
}
</script>



<style scoped>
.steps__block_list{
    margin-top: 20px;
}
ul {
    list-style: none;
    margin: 1;
    padding: 0;
    width: 550px;
}
</style>