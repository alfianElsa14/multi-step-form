import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';

import { setInfo, setStep } from '@pages/Home/actions';

import style from './style.module.scss'

function Form1({ step, info }) {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const handleNextStep = () => {
        let valid = true;

        if (!name) {
            setNameError('Name is required');
            valid = false;
        } else {
            setNameError('');
        }


        if (!email) {
            setEmailError('Email is required');
            valid = false;
        } else {
            setEmailError('');
        }


        if (!phone) {
            setPhoneError('Phone number is required');
            valid = false;
        } else {
            setPhoneError('');
        }

        if (valid) {
            const updatedInfo = { ...info, name, email, phone };
            dispatch(setInfo(updatedInfo));
            dispatch(setStep(step + 1));
        }
    }

    return (
        <div className={style.formContent}>
            <div className={style.title}>Personal Info</div>
            <div className={style.message}><FormattedMessage id="app_personal_info" /></div>
            <div className={style.form}>
                <label htmlFor=""><FormattedMessage id="app_personal_name" required /></label>
                {nameError && <div className={style.error}>{nameError}</div>}
                <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)} />
                <label htmlFor=""><FormattedMessage id="app_personal_email" required /></label>
                {emailError && <div className={style.error}>{emailError}</div>}
                <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="" ><FormattedMessage id="app_personal_phone" required /></label>
                {phoneError && <div className={style.error}>{phoneError}</div>}
                <input type="number" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className={style.next}>
                <button onClick={handleNextStep}>Next Step</button>
            </div>
        </div>
    )
}

export default Form1