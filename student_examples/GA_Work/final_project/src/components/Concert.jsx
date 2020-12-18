import React, { Component } from 'react'

export default class Concert extends Component {
    render() {
        return (
            <div>
                <div className='content'>
                    <a href='https://archive.org/details/gd73-03-24.sbd.bertha-ashley.25508.sbeok.shnf' target='_blank'>{this.props.date}</a> 
                    <p>{this.props.venue}</p>
                    <p>{this.props.location}</p>
                </div>
            </div>
        )
    }
}
