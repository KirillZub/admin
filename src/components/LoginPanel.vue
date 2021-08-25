<template>
  <div class="delivery__pannel">
    <div class="pannel_title">
      <h3>Авторизация</h3>
    </div>
    <div class="block__column_workzone">
      <div>
        <b-form @submit="onSubmit" v-if="show">
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Your Name:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.name"
              placeholder="Enter name"
              required
            ></b-form-input>
          </b-form-group>
          <router-link class="router_links" to="/"
            ><b-button class="submit" type="submit" variant="primary"
              >Войти</b-button
            ></router-link
          >
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
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
.block__column_workzone {
  margin-top: 40px;
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
.delivery__pannel {
margin-left: -488px;
background-color: #1d1d35;
width: 100%;
height: 100vh;
margin-top: -30px;
padding: 200px 50px 20px 400px;
}
.nav_send {
  margin-left: 50px;
}
.submit {
  margin-top: 10px;
}
</style>