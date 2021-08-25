<template>
  <div class="backgrond" id="app">
    <div class="work">
      <div class="navigation">
        <div class="navigation__logo">
          <img src="../src/assets/logo.png" alt="" />
          <h3>FastLead</h3>
        </div>
        <div class="navigation__menu" id="nav">
          <router-link class="router_links" to="/"><b-icon class="icon__menu icon_house" icon="house"></b-icon>Admin</router-link>
          <router-link class="router_links links_under" to="/delivery"><b-icon class="icon__menu icon_delivery" icon="chat-left-text"></b-icon>Рассыльщик</router-link>
          <router-link class="router_links links_logout" to="/login"><b-icon class="icon__menu icon_delivery" icon="person-circle"></b-icon>Выйти</router-link>
        </div>
      </div>
      <div class="work-zone">
          <router-view />
        </div>
    </div>
  </div>
</template>


<style scoped lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #fff;
}

#nav {
  a {
    font-weight: bold;
    color: #6c7892;
    font-size: 14px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-decoration: none;
    &.router-link-exact-active {
      color: #3caf7b;
      background-color: #2f2f68;
      border-radius: 5px;
      
    }
    &:hover {
      color: #4ad395;
      transition: all 0.5s;
    }
  }
}
.router_links{
  padding-left: 20px;
  margin-top: 15px;
}
.links_logout{
  margin-top: 65vh;
}
.navigation {
  padding-top: 20px;
  width: 300px;
  height: 100vh;
  /* position: absolute; */
  background-color: #141427;
}
.navigation__none{
    display: none;
}
.navigation__menu {
  display: flex;
  flex-direction: column;
  padding-left: 25px;
  padding-right: 25px;
  margin-top: 5px;
}
.navigation__logo {
  display: flex;
  border-bottom: 1px solid #fff;
  align-items: center;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
}
.navigation__logo img{
  margin-top: -10px;
  padding-right: 10px;
}

.work{
  display: flex;
}
.work-zone{
  padding-top: 30px;
  padding-left: 250px;
  padding-right: 50px;
  width: 100%;
  background-color: #1d1d35;
  height: 100vh;
}
.backgrond{
  width: 100%;
  height: 100vh;
}

.icon__menu{
  margin-right: 10px;
}
</style>
