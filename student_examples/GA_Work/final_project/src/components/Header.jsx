import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <h1>Ben's Picks</h1>
                <nav><a href='https://archive.org/' target='_blank'>Internet Archive</a> <a href='https://archive.org/details/GratefulDead' target='_blank'>Grateful Dead</a> collection (over 15,000 items!)</nav>
            </div>
        )
    }
}
