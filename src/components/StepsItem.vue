<template>
    <span class="span__li">
        <router-link class="steps_links" v-bind:to="'/tasks' + index">
        <span>
        <strong>{{ index+1 + " Этап"}}</strong>
        {{ step.title }}
        </span>
        </router-link>
        <b-button v-on:click="$emit('remove-step', step.id)" class="button-del"  variant="danger"><b-icon class="icon__trash" icon="trash"></b-icon></b-button>
    </span>
</template>

<script>

export default {
    props:{
        step: {
            type: Object,
        },
        index: Number
    }
}
</script>

<style scoped>

.span__li {
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

.span__li:hover{
    cursor: pointer;
    background: #1d1d35;
    color: #000;
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
</style>