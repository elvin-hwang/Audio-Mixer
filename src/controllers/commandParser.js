import { addSound, removeSound, restartPlaylist } from './commandController'

export function processCommand(command) {
    if (command.startsWith('Add')) {
        addSound(command.replace('Add', '').trim())
    } else if (command.startsWith('Remove')) {
        let input = command.replace('Remove', '').trim()
        removeSound(parseSoundName(input))
    } else if (command.startsWith('Restart')) {
        command = command.replace('Restart', '').trim()
        if (command) {
            throw 'Additional Parameter(s) Found in Restart Command: ' + command
        }
        restartPlaylist()
    } else {
        throw 'Invalid command found: ' + command
    }
    return
}

export function parseFirstInfo(data) {
    let infoList = data.split(' ')
    let soundID = ''
    let soundName = ''
    let soundPos = -1

    if (infoList.length != 5 || infoList[1].trim() != 'as' || infoList[3] != 'at') {
        throw 'Invalid Parameter in Add: ' + data
    }
    soundID = parseSoundName(infoList[0].replace('sound_', '').trim())
    soundName = parseSoundName(infoList[2])
    if (!isNaN(infoList[4])) {
        soundPos = parseFloat(infoList[4])
    }
    if (soundPos < 0 || soundPos >= 60) {
        throw 'Invalid Parameter in Add: ' + data
    }
    return { soundID, soundPos, soundName }
}

/*
    Parses the sound id given a SOUND DSL
*/
function parseSoundName(info) {
    var letters = /^[A-Za-z0-9]+$/
    if (!info.match(letters)) {
        throw 'Invalid Sound ID specified: ' + info
    }
    return info
}
