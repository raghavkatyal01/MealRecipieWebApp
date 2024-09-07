import { ActionCreator, MealType } from "../Models/Models"


export const CHANGE_QUERY_ACTION="CHANGE_QUERY_ACTION"
export const changeQueryAction:ActionCreator<string>=(q:string)=>({
    type:CHANGE_QUERY_ACTION,
    payload:q,

})

export const SEARCH_ACTION="SEARCH_ACTION"
export const searchAction:ActionCreator<string>=(s:string)=>({
    type:SEARCH_ACTION,
    payload:s,

})


export const UPDATE_MEAL="UPDATE_MEAL"
export const updateMeal:ActionCreator<MealType[]>=(m:MealType[])=>({
    type:UPDATE_MEAL,
    payload:m,

})



export const GET_RECIPIE_DETAIL="GET_RECIPIE_DETAIL"
export const GetRecipieDetailAction:ActionCreator<string>=(id:string)=>({
    type:GET_RECIPIE_DETAIL,
    payload:id,

})


