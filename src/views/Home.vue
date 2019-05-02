<template>
  <div class="wrapper">
    <diagram-button @diagramClick="msg='認識中'">{{ msg }}</diagram-button>
    <div class="image">
      <v-img
        width="500"
        :src="image"
        v-for="(image, idx) in imageList"
        :key="image"
        v-show="idx===showIdx"
      ></v-img>
    </div>
  </div>
</template>

<script>
import DiagramButton from '@/components/DiagramButton'
export default {
  name: 'Home',
  components: {
    DiagramButton
  },
  data () {
    return {
      msg: '押してね',
      imageList: [
        require('@/assets/rouge_20190501_223820.png'),
        require('@/assets/rouge_20190501_224109.png'),
        require('@/assets/rouge_20190501_224215.png'),
        require('@/assets/rouge_20190501_224238.png'),
        require('@/assets/rouge_20190501_224254.png'),
        require('@/assets/rouge_20190501_224311.png'),
        require('@/assets/rouge_20190501_224330.png'),
        require('@/assets/rouge_20190501_224346.png'),
        require('@/assets/rouge_20190501_224420.png'),
        require('@/assets/rouge_20190501_224914.png'),
        require('@/assets/rouge_20190501_224933.png'),
        require('@/assets/rouge_20190501_224950.png'),
        require('@/assets/rouge_20190501_225208.png')
      ],
      showIdx: 0
    }
  },
  created () {
    this.changeImage()
  },
  methods: {
    changeImage () {
      this.showIdx = Math.floor(Math.random() * this.imageList.length)
      setTimeout(this.changeImage, 3000)
    }
  }
}
</script>

<style scoped>
.v-image {
  margin: auto;
}
</style>
