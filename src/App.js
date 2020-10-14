import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Commands from './components/Commands'
import { Navigation } from './components/Navigation'
import DSLPage from './components/DSLPage'
import style from 'bootstrap/dist/css/bootstrap.css'

function App() {
    return (
        <BrowserRouter basename="/Audio-Mixer">
            <div className="App">
                <Navigation />
                <div className="App-header">
                    <Switch>
                        <Route path="/" component={Commands} exact />
                        <Route path="/dsl" component={DSLPage} exact />
                        <Route path="/commands" component={Commands} exact/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
