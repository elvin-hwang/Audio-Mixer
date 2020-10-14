import { Figure } from 'react-bootstrap'
import DSL from './dsl.png'
import React from 'react'
import './styles.css'

function DSLPage() {
    return (
        <div className="inputform">
            <Figure class="figurepic">
                <Figure.Image src={DSL} />
                <Figure.Caption>DSL Example</Figure.Caption>
            </Figure>
        </div>
    )
}
export default DSLPage
