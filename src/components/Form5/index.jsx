import React from 'react'
import { FormattedMessage } from 'react-intl';

import thank from '../../assets/images/icon-thank-you.svg'

import style from './style.module.scss'

function Form5() {
    return (
        <div className={style.content}>
            <div>
                <img src={thank} alt="" />
            </div>
            <div className={style.isi}>
                <div className={style.header}><FormattedMessage id="app_your_thanks" /></div>
                <div className={style.word}><FormattedMessage id="app_your_word" /></div>
            </div>
        </div>
    )
}

export default Form5