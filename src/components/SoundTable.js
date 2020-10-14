import React, { Component } from 'react'
import soundManager from '../controllers/soundManager'
import { Line } from 'react-lineto'
import './styles.css'

class SoundTable extends Component {
    constructor(props) {
        super(props)

        this.state = { soundLines: [] }
        this.containerRef = React.createRef()
        this.getRectsInterval = undefined
    }

    componentDidMount() {
        this.getRectsInterval = setInterval(() => {
            const containerRect = this.containerRef.current.getBoundingClientRect()
            this.setState({
                soundLines: this.getSoundLines(containerRect),
            })
        }, 10) // This determines how often the polling occurs in ms
    }

    componentWillUnmount() {
        clearInterval(this.getRectsInterval)
    }

    getSoundLines(containerRect) {
        // console.log(containerRect);

        // bottom: 1117.078125
        // height: 827.5625
        // left: 473.4375
        // right: 1073.421875
        // top: 289.515625
        // width: 599.984375
        // x: 473.4375
        // y: 289.515625

        // The distance from the top that it's scrolled from
        let scrollYOffset =
            window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop

        // Some examples of lines
        let line1 = (
            <div key="1" style={{ position: 'absolute' }}>
                <Line
                    x0={containerRect.left + 2}
                    y0={containerRect.top + scrollYOffset + 150}
                    x1={containerRect.left + 100}
                    y1={containerRect.top + scrollYOffset + 150}
                    borderColor="blue"
                    borderWidth={5}
                />{' '}
            </div>
        )
        let line2 = (
            <Line
                key="2"
                x0={550}
                y0={400}
                x1={580}
                y1={400}
                borderColor="white"
                borderWidth={5}
                borderStyle="outset"
            />
        )

        // Each sound has a div, and each div has multiple lines
        return Object.keys(soundManager.sounds).map(key => (
            <SoundLine sound={soundManager.sounds[key]} canvas={containerRect} key={key}/>
        ))
        return [line1, line2]
    }

    renderLines() {
        return Array(15)
            .fill(null)
            .map((el, i) => <VerticalLine left={i * 6.7} key={i} />)
    }

    render() {
        return (
            <div className="soundTable">
                <SoundLabels soundList={soundManager.sounds} />
                <div className="linesContainer" ref={this.containerRef}>
                    <div className="soundLabelPadding" />
                    {this.renderLines()}
                    {this.state.soundLines}
                </div>
            </div>
        )
    }
}

const VerticalLine = ({ left }) => {
    let index = parseInt((left / 6.7) * 4)
    return (
        <div className="verticalLine" style={{ left: `${left}%` }}>
            <p className="time"> {index}</p>
        </div>
    )
}

const SoundLine = ({ sound, canvas }) => {
    let lineData = getData(sound, canvas)
    return (
        <div className="soundLineRow">
            {lineData.map(data => (
                <Line
                    key="2"
                    x0={data.x0}
                    y0={data.y0}
                    x1={data.x1}
                    y1={data.y1}
                    borderColor={sound.color}
                    borderWidth={5}
                    borderStyle="outset"
                />
            ))}
        </div>
    )
}

const SoundLabels = ({ soundList }) => {
    return (
        <div className="soundLabelContainer">
            <div className="soundLabelPadding">Time</div>
            {Object.keys(soundList).map(key => (
                <div key={key} className="soundLabel">{key}</div>
            ))}
            <div className="soundLabel">CPSC</div>
            <div className="soundLabel">410</div>
            <div className="soundLabel">PROJECT</div>
            <div className="soundLabel">HO</div>
            <div className="soundLabel">HO</div>
            <div className="soundLabel">HO</div>
            <div className="soundLabel">HO</div>
            <div className="soundLabel">HO</div>
            <div className="soundLabel">HO</div>
            <div className="soundLabel">HO</div>
            <div className="soundLabel">HO</div>
            <div className="soundLabel">HO</div>
            <div className="soundLabel">HO</div>
            <div className="soundLabel">HO</div>
            <div className="soundLabel">HO</div>
            <div className="soundLabel">HO</div>
            <div className="soundLabel">HO</div>
            <div className="soundLabel">HO</div>
            <div className="soundLabel">MERRY</div>
            <div className="soundLabel">CHRISTMAS</div>
        </div>
    )
}

// TODOTODOTODOTODO
function getData(sound, canvas) {
    let scrollYOffset =
        window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    let data = { x0: 0, y0: 0, x1: 0, y1: 0 }
    // console.log(sound)
    // console.log(canvas)
    return []
}

export default SoundTable
