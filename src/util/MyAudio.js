const type = Object.prototype.toString
class AudioWithList {
  constructor (payload) {
    this.audio_ = new Audio()
    this.isStart_ = false
    // 再生リストをためておくやつ
    this.audioList_ = []
    this.append(payload)
  }
  // url: strをリストに追加する
  _appendStr (url) {
    if (url !== undefined && url !== null && url !== '') {
      this.audioList_.push(url)
    }
  }
  // url: listをリストに追加する
  _appendList (urlList) {
    this.audioList_ = this.audioList_.concat(urlList)
  }
  append (payload) {
    if (type.call(payload) === type.call('')) {
      this._appendStr(payload)
    } else if (type.call(payload) === type.call([])) {
      this._appendList(payload)
    }
  }
  play () {

  }
  pause () {
    if (this.isStart_) {
      this.audio_.pause()
      this.isStart_ = false
    }
  }
  audioOnendPromise () {
    const p = new Promise((resolve, reject) => {
      this.audio_.addEventListener('ended', () => {
        resolve()
      })
    })
    return p
  }
}

class AudioQue extends AudioWithList {
  async _play (url) {
    this.audio_.src = url
    this.audio_.play()
  }
  async play () {
    let p = []
    if (!this.isStart_) {
      this.isStart_ = true
      for (let idx in this.audioList_) {
        this.audio_.src = this.audioList_[idx]
        this.audio_.play()
        let _p = await this.audioOnendPromise()
        this.audio_ = new Audio()
        p.push(_p)
      }
    }
    this.isStart_ = false
    return Promise.all(p)
  }
}

class AudioRandom extends AudioWithList {
  async play () {
    let stat = null
    if (!this.isStart_ && this.audioList_.length > 0) {
      const url = this.fetchRandomFromList(this.audioList_)
      this.isStart_ = true
      this.audio_.src = url
      this.audio_.play()
      stat = await this.audioOnendPromise()
      this.isStart_ = false
    }
    return Promise.resolve(stat)
  }
  fetchRandomFromList (audioList) {
    const idx = Math.floor(Math.random() * audioList.length)
    return audioList[idx]
  }
}

export { AudioWithList, AudioQue, AudioRandom }
