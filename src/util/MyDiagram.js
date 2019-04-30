/* eslint-disable no-undef */
import AudioQue from '@/util/MyAudio.js'
class DiagramFlow {
  constructor () {
    // eslint-disable-next-line no-undef
    // eslint-disable-next-line no-use-before-define
    const SpeechRecognition = webkitSpeechRecognition || SpeechRecognition
    this.recognition_ = new SpeechRecognition()
    this.hookWord = {}
    this.isContinue = true
    this.isStart = false
  }
  async play () {
    await this._play()
    this.recognition_.onend = () => {
      console.log(this)
      this._play()
    }
  }
  async _play () {
    let p
    try {
      // 音声処理を開始
      this.recognition_.start()
      // 認識結果を返す
      const userInputVoice = await this.recognitionResultPromise()
      console.log(userInputVoice)
      // stop
      this.recognition_.stop()
      // 返答があったら
      if (userInputVoice !== '') {
        for (let word in this.hookWord) {
          console.log('word: ', word)

          if (!userInputVoice.indexOf(word)) {
            await this.hookWord[word].playContinue()
          }
        }
      }
      p = new Promise((resolve) => { resolve(true) })
    } catch (e) {
      p = new Promise((resolve) => { resolve(false) })
    }
    return p
  }
  append (word, urlList) {
    const audio = new AudioQue()
    for (let idx in urlList) {
      audio.append(urlList[idx])
    }
    this.hookWord[word] = audio
  }
  // promise系
  recognitionResultPromise () {
    const res = new Promise((resolve, reject) => {
      this.recognition_.onresult = (e) => {
        resolve(e.results[0][0].transcript)
      }
      this.recognition_.onerror = (e) => {
        if (e.error === 'no-speech') resolve('')
        else reject(e)
      }
    })
    return res
  }

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
