<template>
  <div>
    <v-layout>
      <v-flex xs6 ml-2 class="margin-top">
        <metadata :song="song"></metadata>
      </v-flex>
      <v-flex xs6 ml-2 mr-2 class="margin-top">
        <youtube :song="song"></youtube>
      </v-flex>
      
    </v-layout>
    <v-layout>
      <v-flex xs6 ml-2 class="margin-top">
        <lyrics :song="song"></lyrics>
      </v-flex>
      <v-flex xs6 ml-2 mr-2 class="margin-top">
        <tabs :song="song"></tabs>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import SongService from '@/services/SongService'
import Metadata from './metadata'
import Youtube from './youtube'
import Tabs from './tabs'
import Lyrics from './lyrics'

export default {
  data () {
    return {
      song: ''
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongService.show(songId)).data
  },
  components: {
    Metadata,
    Youtube,
    Tabs,
    Lyrics
  }
}
</script>
<style scoped>

.margin-top{
    margin-top: 20px;
  }
</style>