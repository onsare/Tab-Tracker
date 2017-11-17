<template>
  <v-layout class="margin-top">
    <v-flex xs6 offset-xs3>
      <panel title="Login">
        <v-layout row>
          <v-text-field
            name="email"
            type="email"
            label="Enter Email"
            v-model="email"
            autocomplete="off"
          ></v-text-field>
        </v-layout>
        <v-layout row>
          <v-text-field
            name="password"
            type="password"
            label="Password"
            v-model="password"
            autocomplete="off"
          ></v-text-field>
        </v-layout>
          <p class="error" v-html="error"></p>
          <v-btn color="cyan"  dark @click="register">Login</v-btn>
      </panel>
    </v-flex>
  </v-layout>
  
</template>

<script>
import Panel from '@/components/Panel'
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data)
        this.$store.dispatch('setUser', response.data)
      } catch (error) {
        this.error = error.response.data.error
        console.log(this.error)
      }
    }
  },
  components: {
    Panel
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error{
    color: white;
  }
  .margin-top{
    margin-top: 20px;
  }
</style>
