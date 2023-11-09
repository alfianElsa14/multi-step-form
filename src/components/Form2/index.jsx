import React, { useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl';
import Switch from '@mui/material/Switch';
import { useDispatch } from 'react-redux';


import { setStep, setPrice } from '@pages/Home/actions';
import arcade from '../../assets/images/icon-arcade.svg'
import advance from '../../assets/images/icon-advanced.svg'
import pro from '../../assets/images/icon-pro.svg'

import style from './style.module.scss'

function Form2({ step, price }) {
    const dispatch = useDispatch()
    const [selectedBox, setSelectedBox] = useState(null);

    const handleNextStep = () => {
        dispatch(setStep(step + 1))
    }

    const handlePrevStep = () => {
        dispatch(setStep(step - 1))
    }

    const handleBoxClick = (boxIndex, boxPrice) => {
        if (selectedBox === boxIndex) {
            setSelectedBox(null);
            dispatch(setPrice(0));
        } else {
            setSelectedBox(boxIndex);
            dispatch(setPrice(boxPrice))
        }
    };

    useEffect(() => {
        dispatch(setPrice(price));
    }, [dispatch, price]);

    console.log(price, "<<< di form2");
    return (
        <div className={style.formContent}>
            <div className={style.title}>Select your plan</div>
            <div className={style.message}><FormattedMessage id="app_your_plan" /></div>
            <div className={style.content}>
                <div className={style.boxContainer}>
                    <div className={`${style.box} ${selectedBox === 0 && style.selected}`} onClick={() => handleBoxClick(0, 9)} >
                        <div className={style.boxItem}>
                            <img src={arcade} alt="" />
                            <div>
                                <div className={style.monthly}>Arcade</div>
                                <div className={style.price}>$9/mo</div>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.box} ${selectedBox === 1 && style.selected}`} onClick={() => handleBoxClick(1, 12)} >
                        <div className={style.boxItem}>
                            <img src={advance} alt="" />
                            <div>
                                <div className={style.monthly}>Advance</div>
                                <div className={style.price}>$12/mo</div>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.box} ${selectedBox === 2 && style.selected}`} onClick={() => handleBoxClick(2, 15)}>
                        <div className={style.boxItem}>
                            <img src={pro} alt="" />
                            <div>
                                <div className={style.monthly}>Pro</div>
                                <div className={style.price}>$15/mo</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.choice}>
                    <p>monthly</p>
                    <Switch className={style.switch} defaultChecked />
                    <p>Yearly</p>
                </div>
                <div className={style.button}>
                    <button onClick={handlePrevStep} className={style.goBack}>Go Back</button>
                    <button onClick={handleNextStep}>Next Step</button>
                </div>
            </div>
        </div>
    )
}

export default Form2