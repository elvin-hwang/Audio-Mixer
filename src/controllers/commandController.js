import { processCommand, parseFirstInfo } from './commandParser'
import { parseEffects } from './effectParser'
import soundManager from './soundManager'
import { Sound } from './soundController'

export function executeCommands(commands) {
    // Split each command based on separator
    let commandList = commands.split(';')
    for (let cmd of commandList) {
        cmd = cmd.trim()
        if (cmd) processCommand(cmd)
    }
}

/*
    Add sound with the given user input
*/
export function addSound(input) {
    let effects = input.split(',')
    let soundInfo = parseFirstInfo(effects.shift()) // returns {soundID, soundPos, soundName}
    let soundMods = parseEffects(effects) // Object soundMods: { length, interval, volume, speed }

    let sound = new Sound(soundInfo.soundID, soundInfo.soundPos, soundInfo.soundName, soundMods)
    soundManager.addSound(sound)
}

/*
    Removes sound with id from the playlist
*/
export function removeSound(id) {
    if (!soundManager.removeSound(id)) throw 'Invalid ID in Remove Sound: ' + id
}

/*
    Resets the whole thingamajig
*/
export function restartPlaylist() {
    soundManager.clearSounds()
}
