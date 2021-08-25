<template>
  <div class="delivery__pannel">
    <div class="pannel_title">
      <h3>Рассыльщик</h3>
    </div>
    <div class="delivery_nav" id="nav">
      <router-link to="/steps">Этапы</router-link>
      <router-link class="nav_send" to="/statistics">Статистика</router-link>
      <router-link to="/devices">Устройства</router-link>
    </div>
    
    <div class="block__column_workzone">
      <h3>Задачи</h3>
      <TasksList v-bind:tasks="tasks" @remove-task="removeTask" />
       <div class="block__settings">
         <h3>Settings</h3>
        <input type="checkbox" name="" id="">
        <input type="text" placeholder="Название">
        <input class="radio" type="radio" name="" id="" > 
        <input class="radio" type="radio" name="" id="" >
        <input class="radio" type="radio" name="" id="" >
      </div>
    </div>
    <div class="steps__add_block">
      <div class="steps__new input-tasks">
        <AddTask
        @add-task="addTask"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TasksList from "@/components/TasksList";
import AddTask from "@/components/AddTask";

export default {
  data() {
    return {
      tasks: [
        /* Добавить переобъявление в json */
      ],
    };
  },
  methods: {
    removeTask(id) {
      this.tasks = this.tasks.filter((t) => t.id !== id);
    },
    addTask(task) {
      this.tasks.push(task)
    }
  },
  components: {
    TasksList,
    AddTask,
  },
};
</script>

<style lang="scss" scoped>
#nav {
  a {
    font-weight: bold;
    color: #b6c5d3;
    font-size: 16px;
    padding: 0px 30px 0px 30px;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
    &:hover {
      color: #4ad395;
    }
  }
}
.delivery_nav {
  background-color: #141427;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  margin-top: 30px;
  border-radius: 5px;
}
.nav_send {
  margin-left: 50px;
}

.steps__block {
  margin-top: 30px;
  height: 65vh;
  max-height: 65vh;
}

.steps__add_block {
  margin-top: 25px;
  text-align: center;
  height: 10vh;
  background-color: #141427;
  padding-top: 1px;
}

.steps__new {
  margin-top: 20px;
}

.block__column_workzone {
  margin-top: 20px;
  background-color: #141427;
  padding: 20px 20px 20px 20px;
  height: 65vh;
  overflow-y: auto;
  border-radius: 5px;
  display: flex;
}

.block__settings{
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 50vh;
  background: #1d1d35;
  margin-left: 60px;
  margin-top: 55px;
}
.block__settings h3{
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
}

.block__settings input{
  margin: 20px;
}
.radio{
  color:ff
}

.block__column_workzone::-webkit-scrollbar{
  width: 7px;
}
.block__column_workzone::-webkit-scrollbar-track{
   background: rgb(63, 10, 148);
}

.block__column_workzone::-webkit-scrollbar-thumb {
  background-color: #3caf7b;    /* цвет плашки */
  border-radius: 20px;       /* закругления плашки */
}
.delivery__pannel{
  margin-left: -200px;
}
</style>