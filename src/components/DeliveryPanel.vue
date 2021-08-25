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
           <router-view/>
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
.nav_send{
    margin-left: 50px;
}
.delivery__pannel{
  margin-left: -200px;
}

</style>