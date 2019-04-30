class AudioQue {
  constructor () {
    this.audio_ = new Audio()
    this.audioQue_ = []
    this.isPlay = false
  }
  append (url) {
    if (url === '' && url === null && url === undefined) {
      console.log('error')
      return null
    } else {
      this.audioQue_.push(url)
    }
  }
  async playContinue () {
    let states = false
    let idx = 0
    while (this.audioQue_.length !== idx) {
      states = this.play(idx)
      idx++
      if (!states) {
        break
      }
      this.isPlay = true
      await this.audioStopPromise()
      this.isPlay = false
    }
    return new Promise((resolve, reject) => {
      if (states) {
        resolve(states)
      } else {
        reject(states)
      }
    })
  }
  play (idx) {
    if (!this.isPlay) {
      this.audio_.src = this.audioQue_[idx]
      this.audio_.play()
      return true
    } else {
      return false
    }
  }
  parse () {
    if (this.isPlay) {
      this.audio_.pause()
      this.isPlay = false
    }
  }
  audioStopPromise () {
    return new Promise((resolve, reject) => {
      this.audio_.addEventListener('ended', () => {
        resolve('OK')
      })
    })
  }
}

export default AudioQue
