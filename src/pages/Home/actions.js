import { SET_ADD, SET_INFO, SET_PRICE, SET_STEP } from "./constants"

export const setStep = (step) => ({
    type: SET_STEP,
    step
})

export const setInfo = (info) => ({
    type: SET_INFO,
    info
})

export const setPrice = (price) => ({
    type: SET_PRICE,
    price
})

export const setAdd = (add) => ({
    type: SET_ADD,
    add
})
