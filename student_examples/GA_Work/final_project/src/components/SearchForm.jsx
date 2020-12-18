import React, { Component } from 'react'

export default class SearchForm extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {

    //     }
    // }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor='search'>Search shows:</label>
                    <input type='text' id='search' name='search'></input>
                    <button type='submit' class='btn submit-btn'>Submit</button>
                </form>
            </div>
        )
    }
}
