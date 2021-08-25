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
      <h3>Свойства устройства</h3>
      <div class="block__info_device">
      <h5>Имя устройства:</h5>
      <h5>Количество аккаунтов:</h5>
      </div>
    </div>
  </div>
</template>


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

.block__column_workzone {
  margin-top: 20px;
  background-color: #141427;
  padding: 20px 20px 20px 20px;
  height: 80vh;
  overflow-y: auto;
  border-radius: 5px;
}
.block__column_workzone::-webkit-scrollbar {
  width: 7px;
}
.block__column_workzone::-webkit-scrollbar-track {
  background: rgb(63, 10, 148);
}

.block__column_workzone::-webkit-scrollbar-thumb {
  background-color: #3caf7b; /* цвет плашки */
  border-radius: 20px; /* закругления плашки */
}
.block__info_device{
    margin-top: 40px;
}
.block__info_device h5{
    margin-top: 40px;
}
.delivery__pannel{
  margin-left: -200px;
}
</style>