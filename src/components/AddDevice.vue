<template>
  <form @submit.prevent="onSubmit">
    <input class="input-steps-field" type="text" v-model="title" />
    <b-button type="submit" class="input-steps-button" variant="success"
      ><b-icon class="icon__square" icon="plus-square"></b-icon></b-button
    >
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    onSubmit() {
        console.log('Submit', this.title)
      if (this.title.trim()) {
        const newDevice = {
          id: Date.now(),
          title: this.title,
        }
        
        this.$emit('add-device', newDevice)
        this.title=""
      }
    },
  },
};
</script>

<style scoped>
.input-steps-field {
  width: 60%;
  height: 39px;
  border-radius: 5px 0px 0px 5px;
  border: 1px solid #42b983;
  padding-left: 20px;
}

.input-steps-button {
  border-radius: 0px 5px 5px 0px;
   margin-top: -1px;
  
}

.btn-check:focus + .btn-success,
.btn-success:focus {
  box-shadow: none;
}


.icon__square{
    margin-top: 1px;
}
</style>