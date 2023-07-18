class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId =setInterval (() => {
      this.currentTime++;
      if (typeof printTimeCallback === "function"){
      printTimeCallback()
    }
    },10)
  }

  getMinutes() {
    let minutes =Math.floor(this.currentTime/6000)
    return minutes
  }

  getSeconds() {
    let seconds=0;
    let calcMinut=0
    
    if (this.currentTime < 100) {
    return 0
    }

    else if (this.currentTime >= 100 && this.currentTime <6000) {
      seconds = Math.floor(this.currentTime/100)
      return seconds
      }

    else if (this.currentTime >= 6000) {
    calcMinut = this.currentTime % 6000;
    seconds = Math.floor(calcMinut/100)
    return seconds  
    }
  }

  getCentiseconds() {
    let centiSeconds=0;
    
    if (this.currentTime < 100) {
    return this.currentTime
    }
    if (this.currentTime >= 100) {
    centiSeconds = this.currentTime % 100
    return centiSeconds  
    }
  }
  

  computeTwoDigitNumber(value) {
    let twoDigit;
    twoDigit = value.toString()
    if (twoDigit.length < 2) {
    return "0"+ twoDigit
    }
    else {
    return twoDigit
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`
  }
}
