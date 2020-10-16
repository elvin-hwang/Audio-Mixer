import TrumpMillionDollar from '../sounds/trump-A-Million-Dollars.wav'
import TrumpAmerica from '../sounds/trump-America.wav'
import TrumpBigger from '../sounds/trump-bigger.wav'
import TrumpRich from '../sounds/trump-Im-Really-Rich.wav'

import Atmosphere from '../sounds/atmosphere.wav'
import AtmosphereHigh from '../sounds/atmosphereHigh.wav'
import BuildUp from '../sounds/buildup.wav'
import Buong from '../sounds/buong.wav'
import Drop from '../sounds/drop.wav'
import ElectroChorus from '../sounds/electroChorus.wav'
import Hat from '../sounds/hat.wav'
import HighChorus from '../sounds/HighChorus.wav'
import Kick from '../sounds/kick.wav'
import LofiDrum from '../sounds/lofiDrum.wav'
import MidChorus from '../sounds/MidChorus.wav'
import Organ from '../sounds/organ.wav'

import PianoBackground from '../sounds/PianoBackground.wav'
import PianoChorus from '../sounds/PianoChorus.wav'
import ShakerLoop from '../sounds/shakerLoop.wav'
import Snare from '../sounds/snare.wav'
import SnareBuild from '../sounds/snareBuild.wav'
import SynthChorus from '../sounds/SynthChorus.wav'
import Wobble from '../sounds/Wobble.wav'


import { audioCtx } from './soundManager'

// When adding new sounds, try to keep id to simple strings
export const displaySounds = {
    TrumpMillionDollar: new Audio(TrumpMillionDollar),
    TrumpAmerica: new Audio(TrumpAmerica),
    TrumpBigger: new Audio(TrumpBigger),
    TrumpRich: new Audio(TrumpRich),
    Atmosphere: new Audio(Atmosphere),
    AtmosphereHigh: new Audio(AtmosphereHigh) ,
    BuildUp: new Audio(BuildUp),
    // Buong: new Audio(Buong),
    Drop: new Audio(Drop),
    // ElectroChorus: new Audio(ElectroChorus),
    HighChorus: new Audio(HighChorus),
    Hat: new Audio(Hat),
    Kick: new Audio(Kick),
    Snare: new Audio(Snare),
    LofiDrum: new Audio(LofiDrum),
    MidChorus: new Audio(MidChorus),
    Organ: new Audio(Organ),
    
    // PianoBackground: new Audio(PianoBackground),
    // PianoChorus: new Audio(PianoChorus),
    // ShakerLoop: new Audio(ShakerLoop),
    SnareBuild: new Audio(SnareBuild),
    SynthChorus: new Audio(SynthChorus),
    Wobble: new Audio(Wobble),
}

const allSounds = {
    TrumpMillionDollar: TrumpMillionDollar,
    TrumpAmerica: TrumpAmerica,
    TrumpBigger: TrumpBigger,
    TrumpRich: TrumpRich,
    Atmosphere: Atmosphere,
    AtmosphereHigh: AtmosphereHigh ,
    BuildUp: BuildUp,
    Buong: Buong,
    Drop: Drop,
    ElectroChorus: ElectroChorus,
    Hat: Hat,
    HighChorus: HighChorus,
    Kick: Kick,
    LofiDrum: LofiDrum,
    MidChorus: MidChorus,
    Organ: Organ,
    
    PianoBackground: PianoBackground,
    PianoChorus: PianoChorus,
    ShakerLoop: ShakerLoop,
    Snare: Snare,
    SnareBuild: SnareBuild,
    SynthChorus: SynthChorus,
    Wobble: Wobble,
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
            console.log(error);
            return this.setUpAudio();
        })
    }

    getGainNode() {
        const gainNode = audioCtx.createGain()
        gainNode.gain.value = this.soundMods.volume / 100
        return gainNode
    }
}
