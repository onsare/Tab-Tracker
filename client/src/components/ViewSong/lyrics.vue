<template>
  <panel title="Lyrics">
    <textarea readonly>
    {{song.lyrics}}
    </textarea>
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
textarea {
  width: 100%;
  overflow: auto;
  height: 400px;
  text-align: center;
}
</style>