import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectHomeState = (state) => state.home || initialState;

export const selectStep = createSelector(selectHomeState, (state) => state.step)
export const selectInfo = createSelector(selectHomeState, (state) => state.info)
export const selectPrice= createSelector(selectHomeState, (state) => state.price)
export const selectAdd = createSelector(selectHomeState, (state) => state.add)

