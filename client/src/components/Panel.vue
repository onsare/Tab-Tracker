<template>
  <div class="white elevation-2">
    <v-toolbar height="30px" flat dense class="cyan" dark>
        <v-toolbar-title>{{title}}</v-toolbar-title>
            <slot name="add-button"></slot>
    </v-toolbar>
    <div class="pl-4 pr-4 pt-2 pb-2">
        <slot>
            nothing here yet
        </slot>
        
    </div>
  </div>
 
</template>

<script>
export default {
  props: [
    'title'
  ]
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .margin-top{
    margin-top: 20px;
  }
</style>
