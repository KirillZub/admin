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
      <h3>Устройста</h3>
      <DevicesList v-bind:devices="devices" @remove-device="removeDevice" />
    </div>
    <div class="steps__add_block">
      <div class="steps__new input-steps">
        <AddDevice
        @add-device="addDevice"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DevicesList from "@/components/DevicesList";
import AddDevice from "@/components/AddDevice";

export default {
  data() {
    return {
      devices: [
        /* Добавить переобъявление в json */
      ],
    };
  },
  methods: {
    removeDevice(id) {
      this.devices = this.devices.filter((t) => t.id !== id);
    },
    addDevice(device) {
      this.devices.push(device)
    }
  },
  components: {
    DevicesList,
    AddDevice,
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