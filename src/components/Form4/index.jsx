import React from 'react'
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';

import { setStep } from '@pages/Home/actions';

import style from './style.module.scss'

function Form4({ step, price, add }) {
    const dispatch = useDispatch()

    const handleNextStep = () => {
        dispatch(setStep(step + 1))
    }


    const handlePrevStep = () => {
        dispatch(setStep(step - 1))
    }

    const calculateTotalMonthly = () => {
        return add.reduce((total, el) => total + el.monthly, 0);
    }

    const totalMonthly = calculateTotalMonthly();

    const overallTotalMonthly = price + totalMonthly;

    console.log(price, add, "<< di form4");
    return (
        <div className={style.formContent}>
            <div className={style.title}>Finishing up</div>
            <div className={style.message}><FormattedMessage id="app_your_finishing" /></div>
            <div className={style.content}>
                <div className={style.monthly}>
                    <div className={style.left}>
                        <div>Arcade(monthly)</div>
                        <div className={style.change}>change</div>
                    </div>
                    <div className={style.right}>
                        <p>{`$${price}/mo`}</p>
                    </div>
                </div>
                {
                    add.map((el) => (
                        <div className={style.monthly}>
                            <div className={style.leftBawah}>
                                <div className={style.titleMonth}>{el.title}</div>
                            </div>
                            <div className={style.rightBawah}>
                                <p>{`$${el.monthly}/mon`}</p>
                            </div>
                        </div>
                    ))
                }
                <div className={style.total}>
                    <div className={style.leftTotal}>
                        <div className={style.titleTotal}>Total (per month)</div>
                    </div>
                    <div className={style.rightTotal}>
                        <p>{`+$${overallTotalMonthly}/mo`}</p>
                    </div>
                </div>
                <div className={style.button}>
                    <button onClick={handlePrevStep} className={style.goBack}>Go Back</button>
                    <button onClick={handleNextStep}>Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default Form4