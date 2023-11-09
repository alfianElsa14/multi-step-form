import React from 'react'
import { FormattedMessage } from 'react-intl';

import Sidebar from '@components/Sidebar';
import Form1 from '@components/Form1';
import Form2 from '@components/Form2';
import Form3 from '@components/Form3';
import Form4 from '@components/Form4';
import Form5 from '@components/Form5';


import style from './style.module.scss'



function Card({ step, info, price, add }) {
    return (
        <div className={style.cardContainer}>
            <div className={style.content}>
                <Sidebar step={step}/>
                <div className={style.formContainer}>
                    {
                        step === 1 ? <Form1 step={step} info={info}/> : step === 2 ? <Form2 step={step} price={price} /> : step === 3 ? <Form3 step={step} add={add} /> : step === 4 ? <Form4 step={step} price={price} add={add} /> : step === 5 ? <Form5 step={step} price={price} add={add} /> : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Card