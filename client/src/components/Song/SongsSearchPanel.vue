<template>
    <panel title="Search">
      <div class="search">
        <v-layout>
            <v-layout row>
                <v-text-field
                    name="search"
                    type="text"
                    label="Search song by title, artist, album or genre"
                    v-model="search"
                    autocomplete="off"
                ></v-text-field>
            </v-layout>
        </v-layout>     
      </div>
    </panel>
</template>
<script>
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search (value) {
      const route = {
        name: 'Songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    },
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  },
  components: {
    Panel
  }
}

</script>
<style>

</style>