<template>
    <div class="steps__block_list">
        <ul>
            <DevicesItem
            v-for="(device, i) of devices" :key="device"
            v-bind:device="device"
            v-bind:index="i"
            v-on:remove-device="removeDevice"
            />
        </ul>
    </div>
</template>

<script>

import DevicesItem from '@/components/DevicesItem'

export default {
    props: ['devices'],
    components:{
        DevicesItem
    },
    methods: {
        removeDevice(id) {
            this.$emit('remove-device', id)
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