elem = document.getElementById("q")
const clonevpn = true
currentDisc = false

class Disc {
  constructor(rom) {
    this.rom = rom
  }
  Load() {
    globalThis.currentDisc = this.rom
  }
  toString() {
    return this.rom
  }
}

const disc = new Disc(`<button id="aq" onclick="playdiscv()">load</button><video width="100%" height="56%" id="discVideo" poster="loading.jpg">
  <source src="disc1.mp4" type="video/mp4">
  
  This browser hates videos >:(
</video>`)

function startup(disc) {
  document.getElementById("idk").style.display = "block"
  elem.style.display = "none"
  document.getElementById("startup").play()
  document.getElementById("iq0").style.display = "block"
  
  bruh()
  
  globalThis.loadDisk = disc
}

function bruh() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

aqud = setInterval(function() {
    arud = document.getElementById("startup").ended
    if (arud) {
      clearInterval(aqud)
      init()
    }
})

isInit = false

function init() {
  if (loadDisk != undefined) {
    loadDisk.Load()
  }
  document.getElementById("startup").style.display = "none"
  if (!currentDisc) {
    document.getElementById("main").style.display = "block"
  } else {
    document.getElementById("disc").innerHTML = currentDisc
  }
  isInit = true
}
apud = setInterval(function() {
  if (isInit) {
    clock = new Date()
    clock2 = clock.toUTCString()
    document.getElementById("clock").innerHTML = clock2
  }
})
