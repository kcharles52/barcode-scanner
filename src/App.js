import React, { Component } from 'react'
import Scanner from './Scanner'
import Result from './Result'

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scanning: false,
            results: []
        }
    }

    _scan = () => {
        this.setState({ scanning: !this.state.scanning })
    }

    _onDetected = (result) => {
        this.setState({ results: this.state.results.concat([result]) })
    }

    render() {

        return (
            <div></div>
        );
    }
}
