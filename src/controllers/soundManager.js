// https://sampleswap.org/ <- has a wide sample of sounds, should discuss what to put in

// https://codepen.io/Rumyra/pen/qyMzqN/ <- pretty useful guide to see how AudioContext works
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API <- documentation
const AudioContext = window.AudioContext || window.webkitAudioContext
export const audioCtx = new AudioContext()

// Singleton class
// Need a UI Component for this class, the table and play/pause
class SoundManager {
    constructor() {
        if (!SoundManager.soundManager) {
            this.sounds = {} // Dictionary of {name, Sound}
            this.playlist = [] // Array of sound sources
            this.finishedPlaying = [];
            SoundManager.soundManager = this
        }
    }

    addSound(sound) {
        this.sounds[sound.name] = sound
    }

    endedHandler(event) {
        this.finishedPlaying.push(true);
    }

    refreshPlaylist() {
        this.playlist = [];
        this.finishedPlaying = [];
        Object.keys(this.sounds).map(key => {
            let sound = this.sounds[key]
            let buffer = sound.soundBuffer
            let source = audioCtx.createBufferSource()
            source.buffer = buffer
            source.playbackRate.value = sound.soundMods.speed
            source.onended = this.endedHandler.bind(this);
            source.connect(sound.gainNode).connect(audioCtx.destination)
            this.playlist.push(source);
        });
    }

    playSounds() {
        this.refreshPlaylist();
        for (const sound of this.playlist) {
            sound.start();
        }
    }

    stopSounds() {
        // TODO Make this work https://stackoverflow.com/questions/31644060/how-can-i-get-an-audiobuffersourcenodes-current-time
        for (const sound of this.playlist) {
            sound.stop();
        }
    }

    isPlaying() {
        return this.finishedPlaying.length != this.playlist.length;
    }

    removeSound(name) {
        if (this.sounds[name]) {
            delete this.sounds[name]
            return true
        }
        return false
    }

    clearSounds() {
        this.sounds = {}
    }
}

const soundManager = new SoundManager()

export default soundManager
