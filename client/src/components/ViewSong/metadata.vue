<template>
  <panel title="Song Metadata" >
    <div>
      <v-layout>
        <v-flex xs6>
          <img v-bind:src="song.albumImageUrl" />
        </v-flex>
        <v-flex xs6>
          <div class="song-title">{{song.title}}</div>
          <div class="song-artist">{{song.artist}}</div>
          <div class="song-album">{{song.album}}</div>
         <v-btn color="cyan"  dark @click="navigateTo({
           name: 'SongEdit',
           params () {
             return {
               songId: song.id
              }
           }
         })">Edit Song</v-btn>
        </v-flex>
      </v-layout>
    </div>
  </panel>
    
</template>
<script>
import Panel from '@/components/Panel'
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  components: {
    Panel
  },
  props: [
    'song'
  ]
}
</script>
<style scoped>
img{
  width: 100%;
}
</style>