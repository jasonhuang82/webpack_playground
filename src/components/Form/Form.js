import React, { Component } from 'react';
import style from './style.module.scss';
import sum from '../../utils/sum';

class Form extends Component {
    renderTitle = async () => {
        const res = await (new Promise((resolve) => {
            setTimeout(resolve, 3000);
        })).then(() => 'RESPONSE');

        console.log('res', res);
    }

    render() {
        this.renderTitle();
        console.log(sum(1, 2));
        return (
            <form>
                <label
                    htmlFor="name"
                    className={style.title}
                >
                    姓名
                </label>
                <input id="name" type="text" />
            </form>
        );
    }
}

export default Form;
