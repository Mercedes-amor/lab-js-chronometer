
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
    },1000)
  }

  getMinutes() {
    let minutes =Math.floor(this.currentTime/60)
    return minutes
  }

  getSeconds() {
    let seconds=0;
    
    if (this.currentTime < 60) {
    return this.currentTime
    }
    if (this.currentTime >= 60) {
    seconds = this.currentTime % 60
    return seconds  
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
   
   return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`  
  }
}
