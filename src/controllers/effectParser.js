export function parseEffects(effects) {
    let soundMods = {
        length: null,
        interval: null,
        volume: 100,
        speed: 1.0,
    }
    // need to process volume and speed before loop
    for (let effect of effects) {
        soundMods = parseEffect(effect, soundMods)
    }
    return soundMods
}

function parseEffect(effect, mods) {
    let tokens = effect.trim().split(' ')
    if (tokens.length == 0 || tokens.length == 1) {
        throw 'Invalid Effects: ' + effect
    }
    switch (tokens[0].trim()) {
        case 'length':
            if (tokens.length != 2 && tokens.length != 4) {
                throw 'Invalid Parameters in Length: ' + tokens
            }
            mods.length = getFloat(tokens[1])
            if (tokens.length == 4) {
                mods.interval = getFloat(tokens[3])
                if (mods.interval >= 60 || mods.interval <= 0) {
                    throw 'Invalid Parameters in Interval: ' + tokens;
                }
            }
            if (mods.length > 60 || mods.length <= 0) {
                throw 'Invalid Parameters in Length: ' + tokens
            }
            break
        case 'volume':
            let vol = parseInt(tokens[1])
            if (tokens.length != 2 || vol < 0 || vol >= 300) {
                throw 'Invalid Parameters in Volume: ' + tokens
            }
            mods.volume = vol
            break
        case 'speed':
            if (tokens.length != 2) {
                console.log(tokens)
                throw 'Invalid Parameters in Speed: ' + tokens
            }
            mods.speed = getFloat(tokens[1])
            if (mods.speed <= 0 || mods.speed >= 3) {
                console.log(tokens)
                throw 'Invalid Parameters in Speed: ' + tokens
            }
            break
        default:
            throw 'Invalid Effect Type: ' + tokens
    }
    return mods
}

function getFloat(val) {
    try {
        return parseFloat(val)
    } catch (e) {
        throw 'Error while parsing float value: ' + val
    }
}
