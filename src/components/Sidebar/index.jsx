import React from 'react'
import { FormattedMessage } from 'react-intl';

import style from './style.module.scss'

function Sidebar({ step }) {
    return (
        <div className={style.sidebar}>
            <div className={style.routes}>
                {
                    step === 1 ?
                        <div className={style.numberOn}>
                            1
                        </div> :
                        <div className={style.number}>
                            1
                        </div>
                }
                <div className={style.step}>
                    step 1 <span className={style.stepList}>
                        YOUR INFO
                    </span>
                </div>
            </div>
            <div className={style.routes}>
                {
                    step === 2 ?
                        <div className={style.numberOn}>
                            2
                        </div> :
                        <div className={style.number}>
                            2
                        </div>
                }
                <div className={style.step}>
                    step 2 <span className={style.stepList}>
                        SELECT PLAN
                    </span>
                </div>
            </div>
            <div className={style.routes}>
                {
                    step === 3 ?
                        <div className={style.numberOn}>
                            3
                        </div> :
                        <div className={style.number}>
                            3
                        </div>
                }
                <div className={style.step}>
                    step 3 <span className={style.stepList}>
                        ADD-ONS
                    </span>
                </div>
            </div>
            <div className={style.routes}>
                {
                    step === 4 ?
                        <div className={style.numberOn}>
                            4
                        </div> :
                        <div className={style.number}>
                            4
                        </div>
                }
                <div className={style.step}>
                    step 4 <span className={style.stepList}>
                        SUMMARY
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar