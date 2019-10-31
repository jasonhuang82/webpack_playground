import React, { Component } from 'react'
import Form from 'components/Form';
import LogoImg from 'images/CATCHPLAY_40p.png';
export default class App extends Component {
    render() {
        return (
        <div>
            <img src={LogoImg} alt=""/>
            <Form/>
        </div>
        )
    }
}
