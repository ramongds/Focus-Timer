import state from"./state.js"
import * as timer from "./timer.js"
import * as elements from"./elements.js"
import { updateDisplay } from "./timer.js"
import* as sound from "./sounds.js"

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle("running")
    timer.countDown()
    sound.buttonPressAudio.play()
}

export function set(){
    elements.minutes.setAttribute("contenteditable", true)
    elements.minutes.focus()
    sound.buttonPressAudio.play()
}

export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove("running")
    timer.updateDisplay()
}

export function toggleMusic(){
    state.isMute = document.documentElement.classList.toggle("music-on")
    if(state.isMute){
        sound.bgAudio.play()
        return
    }

    sound.bgAudio.pause()
}