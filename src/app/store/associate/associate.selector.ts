import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AssociateModel } from "src/app/model/associate";



const getassociatestate = createFeatureSelector<AssociateModel>('associate');

export const getassociatelist = createSelector(getassociatestate, (state) => {
    return state.list;
})


export const getassociate = createSelector(getassociatestate, (state) => {
    return state.associateObj;
})