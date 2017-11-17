<template>
  <v-layout class="margin-top">
    <v-flex xs6 offset-xs3>
        <search-panel></search-panel>
        <songs-panel class="mt-2"></songs-panel>
    </v-flex>
  </v-layout>

</template>
<script>
import SongsPanel from './SongsPanel'
import SearchPanel from './SongsSearchPanel'
export default {
  components: {
    SongsPanel,
    SearchPanel
  }
}
</script>
<style scoped>
 .margin-top{
    margin-top: 20px;
  }
</style>