<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <button @click.end="button">start</button>
    </div>
    <input v-model="t"/>
    <br>
    <a :href="text" target="_blank">{{"'"+text+"'"}}</a>
    <router-view/>
  </div>
</template>

<script>
import DiagramFlow from '@/util/MyDiagram.js'
import { AudioRandom } from '@/util/MyAudio.js'
import aisatu from '@/resource/aisatu.js'
import count from '@/resource/count.js'
import nani from '@/resource/nani.js'
import hagemashi from '@/resource/hagemashi.js'
import are from '@/resource/are.js'
import tene from '@/resource/tene.js'

export default {
  name: 'app',
  data () {
    return {
      diagramFlow: new DiagramFlow(),
      morning: new AudioRandom(aisatu.morning),
      night: new AudioRandom(aisatu.night),
      otukare: new AudioRandom(aisatu.otukare),
      zako: new AudioRandom(count.zako),
      nani: new AudioRandom(nani.nani),
      ganbare: new AudioRandom(hagemashi.ganbare),
      ageage: new AudioRandom(hagemashi.ageage),
      suki: new AudioRandom(hagemashi.suki),
      kire: new AudioRandom(are.kire),
      tene: new AudioRandom(tene.tene),
      t: ''
    }
  },
  computed: {
    text: {
      get () {
        return 'https://www.natorisana.love/sounds/' + this.t + '.mp3'
      }
    }
  },
  created () {
    // this.$data.diagramFlow.aizutiFunc()
    // 呼びかけ
    this.$data.diagramFlow.append('名取', this.$data.nani)
    this.$data.diagramFlow.append('ナトリ', this.$data.nani)
    this.$data.diagramFlow.append('なとり', this.$data.nani)
    // マウント
    this.$data.diagramFlow.append('知ってた', new AudioRandom([
      'https://www.natorisana.love/sounds/Let‘s GO！名取さな＃1/知ってたなら教えてよ～.mp3'
    ]))
    // 挨拶
    this.$data.diagramFlow.append('おはよう', this.$data.morning)
    this.$data.diagramFlow.append('こんばんは', this.$data.night)
    this.$data.diagramFlow.append('バイバイ', this.$data.otukare)
    this.$data.diagramFlow.append('バイバーイ', this.$data.otukare)
    this.$data.diagramFlow.append('さよなら', this.$data.otukare)
    this.$data.diagramFlow.append('またね', this.$data.otukare)
    // ザコっていってくれるやつ
    this.$data.diagramFlow.append('ザコって言って', this.$data.zako)
    this.$data.diagramFlow.append('雑魚って言って', this.$data.zako)
    this.$data.diagramFlow.append('数えて', this.$data.zako)
    this.$data.diagramFlow.append('カウントダウン', this.$data.zako)
    // 頑張れ
    this.$data.diagramFlow.append('疲れた', this.$data.ganbare)
    this.$data.diagramFlow.append('疲れる', this.$data.ganbare)
    this.$data.diagramFlow.append('嫌だ', this.$data.ganbare)
    // あげていくぞ
    this.$data.diagramFlow.append('天才', this.$data.ageage)
    this.$data.diagramFlow.append('いけそう', this.$data.ageage)
    this.$data.diagramFlow.append('よさそう', this.$data.ageage)
    this.$data.diagramFlow.append('良さそう', this.$data.ageage)
    this.$data.diagramFlow.append('行けそう', this.$data.ageage)
    this.$data.diagramFlow.append('いける', this.$data.ageage)
    this.$data.diagramFlow.append('行ける', this.$data.ageage)
    this.$data.diagramFlow.append('できた', this.$data.ageage)
    this.$data.diagramFlow.append('完璧', this.$data.ageage)
    // 好き
    this.$data.diagramFlow.append('好き', this.$data.suki)
    this.$data.diagramFlow.append('すき', this.$data.suki)
    this.$data.diagramFlow.append('すこ', this.$data.suki)
    // まな板って言ったらキレる
    this.$data.diagramFlow.append('まな板', this.$data.kire)
    this.$data.diagramFlow.append('壁', this.$data.kire)
  },
  methods: {
    button () {
      this.$data.diagramFlow.play()
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
