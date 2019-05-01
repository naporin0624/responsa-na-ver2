<template>
  <div class="wrapper">
    <diagram-button @diagramClick="msg='認識中'">{{ msg }}</diagram-button>
    <v-img :src="image"></v-img>
  </div>
</template>

<script>
import DiagramButton from '@/components/DiagramButton'
export default {
  components: {
    DiagramButton
  },
  data () {
    return {
      msg: '押してね',
      image: require('@/assets/rouge_20190501_224330.png')
    }
  }
}
</script>
