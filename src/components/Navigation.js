import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

export class Navigation extends Component {
    render() {
        return (
            <Navbar bg="info" expand="lg">
                <Navbar.Brand className="text-white" href="/Audio-Mixer">
                    SOUNDAPP
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link className="d-inline p-2 text-white" href="https://elvin-hwang.github.io/Audio-Mixer/#/commands">
                            Commands
                        </Nav.Link>
                        <Nav.Link className="d-inline p-2 text-white" href="https://elvin-hwang.github.io/Audio-Mixer/#/dsl">
                            Our DSL
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
