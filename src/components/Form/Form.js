import React, { Component } from "react";
import style from './style.module.scss';
class Form extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <form>
                <label className={style.title}>姓名</label>
                <input type="text"/>
            </form>
        );
    }
}
export default Form;