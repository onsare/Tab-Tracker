<template>
  <v-layout class="margin-top">
    <v-flex xs5 mr-2 ml-2>
        <panel title="Song Metadata">
            <v-layout row>
                <v-text-field
                    name="title"
                    type="text"
                    label="Song Title"
                    v-model="song.title"
                    required
                    :rules="[required]"
                ></v-text-field>
            </v-layout>
            <v-layout row>
                <v-text-field
                    name="genre"
                    type="text"
                    label="Genre"
                    v-model="song.genre"
                    :rules="[required]"
                    required
                ></v-text-field>
            </v-layout>
            <v-layout row>
                <v-text-field
                    name="artist"
                    type="text"
                    label="Artist"
                    v-model="song.artist"
                    :rules="[required]"
                    required
                ></v-text-field>
            </v-layout>
            <v-layout row>
                <v-text-field
                    name="album"
                    type="text"
                    label="Album"
                    v-model="song.album"
                    :rules="[required]"
                    required
                ></v-text-field>
            </v-layout>
            <v-layout row>
                <v-text-field
                    name="youtubeId"
                    type="text"
                    label="Youtube ID"
                    v-model="song.youtubeId"
                    :rules="[required]"
                    required
                ></v-text-field>
            </v-layout>
            <v-layout row>
                <v-text-field
                    name="albumImage"
                    type="text"
                    label="Album Image URL"
                    v-model="song.albumImageUrl"
                    :rules="[required]"
                    required
                ></v-text-field>
            </v-layout>
        </panel>
    </v-flex>
     <v-flex xs7 mr-2 ml-2>
        <panel title="Song Structure">
            <v-layout row>
                <v-text-field
                    multi-line
                    name="lyrics"
                    type="text"
                    label="Song Lyrics"
                    v-model="song.lyrics"
                    :rules="[required]"
                    required
                ></v-text-field>
            </v-layout>
            <v-layout row>
                <v-text-field
                    multi-line
                    name="tabs"
                    type="text"
                    label="Guitar Tabs"
                    v-model="song.tabs"
                    :rules="[required]"
                    required
                ></v-text-field>
            </v-layout>
            <div v-if="error" class="error">{{error}}</div>
             <v-btn
                color="cyan"  
                dark 
                @click="update">Save Song
            </v-btn>
        </panel>
    </v-flex>
  </v-layout>

</template>
<script>
import Panel from '@/components/Panel'
import SongService from '@/services/SongService'
export default {
  data () {
    return {
      song: {
        title: null,
        genre: null,
        artist: null,
        album: null,
        youtubeId: null,
        albumImageUrl: null,
        lyrics: null,
        tabs: null
      },
      error: null,
      required: (value) => !!value || 'Required'
    }
  },
  methods: {
    async update () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'All fields must be filled'
        return
      }
      const songId = this.$store.state.route.params.songId
      try {
        await SongService.put(this.song)
        this.$router.push({
          name: 'Song',
          params: {
            songId: songId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongService.show(songId)).data
    } catch (err) {
      console.log(err)
    }
  },
  components: {
    Panel
  }
}
</script>
<style scoped>

.margin-top{
    margin-top: 20px;
  }
</style>