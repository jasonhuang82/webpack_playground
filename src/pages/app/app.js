import React, { Component } from 'react';
import Form from 'components/Form';
import LogoImg from 'images/CATCHPLAY_40p.png';
import sum from 'utils/sum';

class App extends Component {
    renderForm = () => <Form />

    render() {
        console.log(sum(1, 2));
        return (
            <div>
                <img src={LogoImg} alt="" />
                { this.renderForm() }
            </div>
        );
    }
}

export default App;
