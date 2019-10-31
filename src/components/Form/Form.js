import React, { Component } from "react";
import style from './style.module.scss';
class Form extends Component {
    constructor() {
        super();
    }

    renderTitle = async() => {
        const res = await (new Promise(resolve => {
            setTimeout(resolve, 3000);;
        })).then(res => 'RESPONSE')
        console.log('res', res)
    }
    render() {
        this.renderTitle()
        return (
            <form>
                <label className={style.title}>姓名</label>
                <input type="text"/>
            </form>
        );
    }
}
export default Form;