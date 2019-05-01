import DiagramFlow from '@/util/MyDiagram.js'
import { AudioRandom } from '@/util/MyAudio.js'
import aisatu from '@/resource/aisatu.js'
import count from '@/resource/count.js'
import nani from '@/resource/nani.js'
import hagemashi from '@/resource/hagemashi.js'
import are from '@/resource/are.js'
import tene from '@/resource/tene.js'

class NatoriDiagram {
  constructor () {
    this.diagramFlow = new DiagramFlow()
    const _morning = new AudioRandom(aisatu.morning)
    const _night = new AudioRandom(aisatu.night)
    const _otukare = new AudioRandom(aisatu.otukare)
    const _zako = new AudioRandom(count.zako)
    const _nani = new AudioRandom(nani.nani)
    const _ganbare = new AudioRandom(hagemashi.ganbare)
    const _ageage = new AudioRandom(hagemashi.ageage)
    const _suki = new AudioRandom(hagemashi.suki)
    const _kire = new AudioRandom(are.kire)
    const _tene = new AudioRandom(tene.tene)

    // 呼びかけ
    this.diagramFlow.append('名取', _nani)
    this.diagramFlow.append('ナトリ', _nani)
    this.diagramFlow.append('なとり', _nani)
    // マウント
    this.diagramFlow.append('知ってた', new AudioRandom([
      'https://www.natorisana.love/sounds/Let‘s GO！名取さな＃1/知ってたなら教えてよ～.mp3'
    ]))
    // 挨拶
    this.diagramFlow.append('おはよう', _morning)
    this.diagramFlow.append('こんばんは', _night)
    this.diagramFlow.append('バイバイ', _otukare)
    this.diagramFlow.append('バイバーイ', _otukare)
    this.diagramFlow.append('さよなら', _otukare)
    this.diagramFlow.append('またね', _otukare)
    // ザコっていってくれるやつ
    this.diagramFlow.append('ザコって言って', _zako)
    this.diagramFlow.append('雑魚って言って', _zako)
    this.diagramFlow.append('数えて', _zako)
    this.diagramFlow.append('カウントダウン', _zako)
    // 頑張れ
    this.diagramFlow.append('疲れた', _ganbare)
    this.diagramFlow.append('疲れる', _ganbare)
    this.diagramFlow.append('嫌だ', _ganbare)
    // あげていくぞ
    this.diagramFlow.append('天才', _ageage)
    this.diagramFlow.append('いけそう', _ageage)
    this.diagramFlow.append('よさそう', _ageage)
    this.diagramFlow.append('良さそう', _ageage)
    this.diagramFlow.append('行けそう', _ageage)
    this.diagramFlow.append('いける', _ageage)
    this.diagramFlow.append('行ける', _ageage)
    this.diagramFlow.append('できた', _ageage)
    this.diagramFlow.append('完璧', _ageage)
    // 好き
    this.diagramFlow.append('好き', _suki)
    this.diagramFlow.append('すき', _suki)
    this.diagramFlow.append('すこ', _suki)
    // まな板って言ったらキレる
    this.diagramFlow.append('まな板', _kire)
    this.diagramFlow.append('壁', _kire)
    // てねっていって
    this.diagramFlow.append('てねって言って', _tene)
    this.diagramFlow.append('てねっていって', _tene)
  }
  start () {
    this.diagramFlow.play()
  }
}

export default NatoriDiagram
