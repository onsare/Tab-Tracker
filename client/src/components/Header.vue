<template>
  <v-toolbar fixed dark color="cyan" light dense>
     <v-toolbar-side-icon @click="navigateTo({name: 'Hello'})">        
       <v-icon>playlist play</v-icon>
     </v-toolbar-side-icon> 
    
    <v-toolbar-items>
      <v-btn flat dark 
        @click="navigateTo({name: 'Songs'})">
        Browse
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark 
        @click="navigateTo({name: 'Login'})">
        Login
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark 
        @click="navigateTo({name: 'Register'})">
        Sign Up
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
      <v-btn v-if="$store.state.isUserLoggedIn" flat dark 
        @click="logout">
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    methods: {
      navigateTo (route) {
        this.$router.push(route)
      },
      logout () {
        this.$store.dispatch('setUser', null)
        this.$store.dispatch('setToken', null)
        this.$router.push({name: 'Hello'})
      }
    }

}
</script>

<style>
  
</style>