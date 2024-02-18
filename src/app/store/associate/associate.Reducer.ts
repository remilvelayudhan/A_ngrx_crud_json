import { createReducer, on } from "@ngrx/store";
import { associateState } from "./associate.State";
import { addAssociateSuccess, deleteAssociateSuccess, getassociatesuccess, loadAssociateFail, loadAssociateSuccess, updateassociatesuccess } from "./associate.Action";



const _AssociateReducer = createReducer(associateState,
    on(loadAssociateSuccess, (state, action) => {
        return {
            ...state,
            list: action.list
        }
    }),

    on(loadAssociateFail, (state, action) => {
        return {
            ...state,
            errorMessage: action.errormessage
        }
    }),
    on(addAssociateSuccess, (state, action) => {
        const _maxId =Math.max(...state.list.map(item => item.id));
        const _newdata= {...action.associateObj, id: _maxId+1 }
        return {
            ...state,
            list: [...state.list, _newdata],
            errorMessage:''
        }
    }),

    on(deleteAssociateSuccess, (state, action) => {
        const _newdata = state.list.filter(item => item.id !== action.id)
        return {
            ...state,
            list: _newdata,
            errorMessage:''
        }
    }),

    on(getassociatesuccess, (state, action) => {
       
        return {
            ...state,
            associateObj:action.obj,
            errorMessage:''
        }
    }),
    on(updateassociatesuccess, (state, action) => {
        const _newdata = state.list.map(o => {
            return o.id === action.inputdata.id ? action.inputdata : o
        })
        return {
            ...state,
            list: _newdata,
            errormessage: ''
        }
    }),

    
)

export function AssociateReducer(state: any, action: any) {
    return _AssociateReducer(state, action);
}