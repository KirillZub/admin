<template>
    <div class="steps__block_list">
        <ul>
            <StepsItem
            v-for="(step, i) of steps" :key="step"
            v-bind:step="step"
            v-bind:index="i"
            v-on:remove-step="removeStep"
            />
        </ul>
    </div>
</template>

<script>

import StepsItem from '@/components/StepsItem'

export default {
    props: ['steps'],
    components:{
        StepsItem
    },
    methods: {
        removeStep(id) {
            this.$emit('remove-step', id)
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
}
</style>