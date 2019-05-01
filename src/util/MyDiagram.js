/* eslint-disable no-undef */
import { AudioWithList, AudioRandom } from '@/util/MyAudio.js'
import { hunhun, unnunn } from '@/resource/aizuti.js'
import levenshtein from 'js-levenshtein'

class DiagramFlow {
  constructor () {
    // eslint-disable-next-line no-undef
    // eslint-disable-next-line no-use-before-define
    const SpeechRecognition = webkitSpeechRecognition || SpeechRecognition
    // eslint-disable-next-line no-undef
    // eslint-disable-next-line no-use-before-define
    const SpeechGrammarList = webkitSpeechGrammarList || SpeechGrammarList
    this.recognition_ = new SpeechRecognition()
    this.recognition_.lang = 'ja-JP'
    // 連続認識を可能にするかどうか
    this.recognition_.interimResults = true
    // 認識単語辞書
    this.grammarList = new SpeechGrammarList()
    // 単語と音声を紐づける辞書
    this.hookWord = {}
    // 対話プログラムが開始しているかどうか
    this.isStart = false
    // 相槌を今しているかどうか
    this.isAizuti = false
    // 相槌オーディオAPI
    this.aizutiAudio = new AudioRandom(hunhun.concat(unnunn))
  }
  // これを実行するとはじまる
  play () {
    // 単語辞書登録してみたけどダメそう
    const grammar = '#JSGF V1.0; grammar words; public <words> = ' + Object.keys(this.hookWord).join(' | ') + ' ;'
    this.grammarList.addFromString(grammar, 1)
    this.recognition_.grammar = this.grammarList
    // 会話プログラムの開始
    this._play()
    this.recognition_.onend = () => {
      this._play()
    }
  }
  async _play () {
    let promiseList = []
    this.recognition_.start()
    // 認識結果を返す
    console.log('認識中')
    const userInputVoice = await this.recognitionResultPromise()
    console.log('認識終了')
    promiseList.push(userInputVoice)
    console.log(userInputVoice)
    // 認識終了
    console.log('認識終了')
    // 認識結果に対して名取がしゃべりだす
    console.log('喋るかも')
    if (userInputVoice !== '') {
      const _p = await this.natoriUttr(userInputVoice)
      promiseList.push(_p)
    }
    console.log('喋り終わり')
    return Promise.all(promiseList)
  }
  async natoriUttr (recognitionText) {
    let p = []
    for (let word in this.hookWord) {
      const proba = recognitionText.length / levenshtein(word, recognitionText)
      console.log('word: ' + word + '  ' + proba + '%')
      if (recognitionText.includes(word) || proba >= 3) {
        console.log(this.hookWord[word])
        // 相槌が行われていればそれを止める
        if (this.isAizuti) {
          this.aizutiAudio.pause()
          this.isAizuti = false
        }
        // フックしたさなボタンを喋らせる
        // 現時点だと名取さなが何人も生まれてしまうため，喋っているかどうかのフラグが必要
        let _p = await this.hookWord[word].play()
        p.push(_p)
      }
    }
    return Promise.all(p)
  }
  append (word, myAudio) {
    if (myAudio instanceof AudioWithList) {
      this.hookWord[word] = myAudio
    }
  }
  // promise系
  // 認識結果が帰って来た時
  recognitionResultPromise () {
    const res = new Promise((resolve, reject) => {
      this.recognition_.onresult = (e) => {
        let results = e.results[0]
        // 認識した結果が最終結果なら
        if (results.isFinal) {
          resolve(results[0].transcript)
        } else {
          // 認識途中なら相槌を打つ
          if (!this.isAizuti) {
            this.isAizuti = true
            this.aizutiAudio.play().then(() => {
              this.isAizuti = false
            })
          }
        }
      }
      this.recognition_.onerror = (e) => {
        if (e.error === 'no-speech') resolve('')
        else reject(e)
      }
    })
    console.log(res)
    return res
  }
  // 音声認識が終了した時
  recognitionOnendPromise () {
    return new Promise((resolve, reject) => {
      this.recognition_.onend = () => {
        resolve(true)
      }
      this.recognition_.onerror = (e) => {
        reject(e)
      }
    })
  }
}

export default DiagramFlow
