<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <button @click.end="button">start</button>
      <!-- <button @click.end="toggle">toggle</button> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
import DiagramFlow from '@/util/MyDiagram.js'
import aisatu from '@/resource/aisatu.js'
import count from '@/resource/count.js'
// import nani from '@/resource/nani.js'
export default {
  name: 'app',
  data () {
    return {
      diagramFlow: new DiagramFlow(),
      morningList: aisatu.morning,
      nightList: aisatu.night,
      otukareList: aisatu.otukare,
      zakoList: count.zako
    }
  },
  created () {
    // 挨拶系
    this.$data.diagramFlow.append('名取', [
      'https://www.natorisana.love/sounds/%E5%B9%B3%E6%88%90%E6%9C%80%E5%BE%8C%E3%81%AE%E9%85%8D%E4%BF%A1%E3%81%A0%E3%81%8C%E7%A4%BC%E3%81%AF%E3%81%84%E3%82%89%E3%82%93%E3%82%BE%EF%BD%97%E3%81%A3%E3%81%A6%E3%81%AD/%E3%81%AA%E3%81%AB%E3%83%BC%EF%BC%9F.mp3'
    ])
    this.$data.diagramFlow.append('知ってたよ', [
      'https://www.natorisana.love/sounds/Let‘s GO！名取さな＃1/知ってたなら教えてよ～.mp3'
    ])
    this.$data.diagramFlow.append(
      'おはよう',
      [this.fetchRandomFromList(this.$data.morningList)]
    )
    this.$data.diagramFlow.append(
      'こんばんは',
      [this.fetchRandomFromList(this.$data.nightList)]
    )
    this.$data.diagramFlow.append(
      'バイバイ',
      [this.fetchRandomFromList(this.$data.nightList)]
    )
    this.$data.diagramFlow.append(
      'バイバーイ',
      [this.fetchRandomFromList(this.$data.nightList)]
    )
    this.$data.diagramFlow.append(
      'ばいばい',
      [this.fetchRandomFromList(this.$data.otukareList)]
    )
    this.$data.diagramFlow.append(
      'さよなら',
      [this.fetchRandomFromList(this.$data.otukareList)]
    )
    this.$data.diagramFlow.append(
      'またね',
      [this.fetchRandomFromList(this.$data.otukareList)]
    )
    this.$data.diagramFlow.append(
      'ザコって言って',
      [this.fetchRandomFromList(this.$data.zakoList)]
    )
    this.$data.diagramFlow.append(
      '雑魚って言って',
      [this.fetchRandomFromList(this.$data.zakoList)]
    )
    this.$data.diagramFlow.append(
      '数えて',
      [this.fetchRandomFromList(this.$data.zakoList)]
    )
  },
  methods: {
    button () {
      this.$data.diagramFlow.play()
    },
    fetchRandomFromList (target) {
      const idx = Math.floor(Math.random() * target.length)
      return target[idx]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
