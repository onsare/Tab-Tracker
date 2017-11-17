<template>
  <panel title="YouTube Video">
    <youtube :player-height="300" :video-id="song.youtubeId"></youtube>
  </panel>
</template>
<script>
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  props: [
    'song'
  ]
}
</script>
<style scoped>

</style>