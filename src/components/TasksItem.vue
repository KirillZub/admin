<template>
    <li>
        <span>
        <strong>{{ index+1 + " Задача"}}</strong>
        {{ task.title }}
        </span>
        <b-button v-on:click="$emit('remove-task', task.id)" class="button-del"  variant="danger"><b-icon class="icon__trash" icon="trash"></b-icon></b-button>
    </li>
</template>

<script>

export default {
    props:{
        task: {
            type: Object,
        },
        index: Number
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
    background: #ccc;
    color: #000;
    transition: all 0.5s;
}


.icon__trash{
    width: 20px;
    margin-top: 3px;
}
</style>