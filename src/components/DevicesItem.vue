<template>
    <router-link class="steps_links" v-bind:to="'/info_device' + index"><li>
        <span>
        <strong>{{ index+1 + " Устройство"}}</strong>
        {{ device.title }}
        </span>
        <span><span class="status">status: </span><span class="status__active" v-if="status !== true">Active</span><span class="status__passive" v-else-if="status !== false">Passive</span></span>
        <span class="status">Аккаунтов: 564654</span>
    </li></router-link>
</template>

<script>

export default {
    props:{
        device: {
            type: Object,
        },
        index: Number,
        status: Boolean
    }
}
</script>

<style scoped>
li {
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
    align-items: center;
    margin-top: 35px;
    background: none;
}

li:hover{
    cursor: pointer;
    background: #2f2f68;
    /* color: #000; */
    transition: all 0.5s;
}


.icon__trash{
    width: 20px;
    margin-top: 3px;
}

.steps_links{
    color: #fff;
    text-decoration: none;
}

.status__active{
    margin-left: 10px;
    color: #28bb79;
}
.status__passive{
    margin-left: 10px;
    color: #b80808;
}

</style>