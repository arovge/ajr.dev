import React, { Component } from 'react';
import { render } from 'react-dom';

class Home extends Component {
    render() {
        return (
            <h1>Hello world!</h1>
        )
    }
}

render(<Home />, document.getElementById('root'));
