<template>
    <panel title="Songs">
        <v-btn 
        slot="add-button"
        fab
        absolute
        medium
        right
        middle
        color="red"  
        dark @click="navigateTo({name: 'SongCreate'})">
        <v-icon>add</v-icon>
        </v-btn>

        <div class="song" v-for="song in songs" :key="song.id">
            <v-layout>
                <v-flex xs6>
                    <div class="song-title">{{song.title}}</div>
                    <div class="song-artist">{{song.artist}}</div>
                    <div class="song-album">{{song.album}}</div>
                        <v-btn 
                        color="cyan"  
                        dark 
                        @click="navigateTo({
                            name: 'Song',
                            params: {
                                songId: song.id
                            }
                        })">View Song
                        </v-btn>
                </v-flex>
                <v-flex xs6>
                    <img v-bind:src="song.albumImageUrl" />
                </v-flex>
            </v-layout>
            
        </div>
    </panel>
</template>
<script>
import Panel from '@/components/Panel'
import SongService from '@/services/SongService'

export default {
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongService.index(value)).data
      }
    }
  },
  components: {
    Panel
  }
}
</script>
<style scoped>
h1{
    font-size: 30px;
}
h2{
    font-size: 22px;
}
h3{
    font-size: 22px;
}
img{
    width: 100%;
   
}

</style>