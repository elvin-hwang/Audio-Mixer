import TrumpChina from '../sounds/trump-China.wav'
import TrumpMillionDollar from '../sounds/trump-A-Million-Dollars.wav'
import TrumpAmerica from '../sounds/trump-America.wav'
import TrumpBigger from '../sounds/trump-bigger.wav'
import TrumpRich from '../sounds/trump-Im-Really-Rich.wav'
import ShipSound from '../sounds/ship.wav'
import CompressedElectro from '../sounds/compressedElectro.wav'
import OneFiveElectro from '../sounds/oneFiveElectro.wav'
import Snare from '../sounds/snare.wav'
import Dance from '../sounds/dance.wav'
import LoudElectro from '../sounds/loudElectro.wav'

import { audioCtx } from './soundManager'

// When adding new sounds, try to keep id to simple strings
export const displaySounds = {
    China: new Audio(TrumpChina),
    MillionDollar: new Audio(TrumpMillionDollar),
    America: new Audio(TrumpAmerica),
    Bigger: new Audio(TrumpBigger),
    Rich: new Audio(TrumpRich),
    Ship: new Audio(ShipSound),
    Electro1: new Audio(CompressedElectro),
    Electro2: new Audio(OneFiveElectro),
    Electro3: new Audio(LoudElectro),
    Snare: new Audio(Snare),
    Dance: new Audio(Dance),
}

const allSounds = {
    China: TrumpChina,
    MillionDollar: TrumpMillionDollar,
    America: TrumpAmerica,
    Bigger: TrumpBigger,
    Rich: TrumpRich,
    Ship: ShipSound,
    Electro1: CompressedElectro,
    Electro2: OneFiveElectro,
    Electro3: LoudElectro,
    Snare: Snare,
    Dance: Dance,
}

const load = require('audio-loader')
const util = require('audio-buffer-utils')

export class Sound {
    constructor(id, pos, name, mods) {
        this.id = id
        this.pos = pos
        this.name = name
        this.soundMods = mods
        this.gainNode = this.getGainNode()
        this.color = 'hsl(' + Math.random() * 360 + ', 100%, 75%)'
        this.setUpAudio()
            .then(result => {
                this.soundBuffer = result
            })
            .catch(error => {
                throw 'Error while setting up Audio: ' + error
            })
    }

    setUpAudio() {
        let file = null
        Object.keys(allSounds).map(key => {
            if (key.toLowerCase() == this.id.toLowerCase()) {
                this.id = key;
                file = allSounds[key]
            }
        })

        if (!file) throw 'Invalid sound found: ' + this.id

        return load(file).then(buffer => {
            if (this.soundMods.length) {
                if (this.soundMods.interval) {
                    // pad/trim buffer with time depending on speed and duration of the audio
                    // Ex Input: 2 second buffer, interval 5 seconds, speed 2x
                    // calculate new buffer duration, x = buffer.duration + (interval * speed - buffer.duration)
                    let newLength = buffer.duration + this.soundMods.interval * this.soundMods.speed - buffer.duration
                    buffer = util.resize(buffer, buffer.sampleRate * newLength)
                }
                // repeat the modified/unmodified buffer for x number of times, where x = ceiling((length / buffer.duration) * speed)
                // resize the buffer to x, where x = length * speed
                let repeat = Math.ceil((this.soundMods.length / buffer.duration) * this.soundMods.speed)
                buffer = util.repeat(buffer, repeat)
                buffer = util.resize(buffer, buffer.sampleRate * this.soundMods.length * this.soundMods.speed)
            }
            // Shift the audio sound by x seconds from the left, where x = (this.pos * speed)
            let leftShift = this.pos * this.soundMods.speed
            if (leftShift) {
                let leftPad = audioCtx.createBuffer(1, audioCtx.sampleRate * leftShift, audioCtx.sampleRate)
                buffer = util.concat(leftPad, buffer)
            }

            // If the buffer duration is over x seconds, where x = (60 * speed), trim down to x seconds.
            let totalDuration = 60 * this.soundMods.speed
            if (buffer.duration > totalDuration) buffer = util.resize(buffer, buffer.sampleRate * totalDuration)

            return buffer
        }).catch(error => {
            return this.setUpAudio();
        })
    }

    getGainNode() {
        const gainNode = audioCtx.createGain()
        gainNode.gain.value = this.soundMods.volume / 100
        return gainNode
    }
}
