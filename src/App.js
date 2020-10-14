import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Commands from './components/Commands'
import { Navigation } from './components/Navigation'
import DSLPage from './components/DSLPage'
import style from 'bootstrap/dist/css/bootstrap.css'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navigation />
                <div className="App-header">
                    <Switch>
                        <Route path="/Audio-Mixer" component={Commands} exact />
                        <Route path="/Audio-Mixer/dsl" component={DSLPage} />
                        <Route path="/Audio-Mixer/commands" component={Commands} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App