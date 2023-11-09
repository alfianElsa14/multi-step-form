import React, { useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';

import { setStep, setAdd } from '@pages/Home/actions';

import style from './style.module.scss'

function Form3({ step, add, price }) {
    const dispatch = useDispatch()

    const handleNextStep = () => {
        dispatch(setStep(step + 1))
    }

    const handlePrevStep = () => {
        dispatch(setStep(step - 1))
    }

    const addsOnData = [
        {
            id: 1,
            title: 'Online Service',
            monthly: 1,
            yearly: 10,
        },
        {
            id: 2,
            title: 'Larger storage',
            monthly: 2,
            yearly: 10,
        },
        {
            id: 3,
            title: 'Customizable Profile',
            monthly: 2,
            yearly: 10,
        },
    ]

    const handleCheckboxChange = (title) => {
        const currentAdd = Array.isArray(add) ? add : [];
        const selectedAdd = addsOnData.find(add => add.title === title);
        const isAddExists = currentAdd.some(item => item.title === title);

        if (!isAddExists) {
            dispatch(setAdd([...currentAdd, selectedAdd]));
        } else {
            const updatedAdds = currentAdd.filter(item => item.title !== title);
            dispatch(setAdd(updatedAdds));
        }
    }
    console.log(add, "<<< di form 3");

    return (
        <div className={style.formContent}>
            <div className={style.title}>Pick add-ons</div>
            <div className={style.message}><FormattedMessage id="app_your_adds" /></div>
            <div className={style.content}>
                <div className={style.boxContainer}>
                    <div className={style.box}>
                        <input
                            type="checkbox"
                            onChange={() => handleCheckboxChange('Online Service')}
                        />
                        <div className={style.label}>
                            <div className={style.header}>Online Service</div>
                            <div>Access to multiplayer games</div>
                        </div>
                        <p>+$1/mo</p>
                    </div>
                    <div className={style.box}>
                        <input
                            type="checkbox"

                            onChange={() => handleCheckboxChange('Larger storage')}
                        />
                        <div className={style.label}>
                            <div className={style.header}>Larger storage</div>
                            <div>Extra 1TB of cloud save ...............</div>
                        </div>
                        <p>+$2/mo</p>
                    </div>
                    <div className={style.box}>
                        <input
                            type="checkbox"

                            onChange={() => handleCheckboxChange('Customizable Profile')}
                        />
                        <div className={style.label}>
                            <div className={style.header}>Customizable Profile</div>
                            <div>Custom theme on your profile</div>
                        </div>
                        <p>+$2/mo</p>
                    </div>
                </div>
                <div className={style.button}>
                    <button onClick={handlePrevStep} className={style.goBack}>Go Back</button>
                    <button onClick={handleNextStep}>Next Step</button>
                </div>
            </div>

        </div>
    )
}

export default Form3