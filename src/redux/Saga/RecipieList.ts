import { call, put } from "redux-saga/effects";
import { GetRecipieByName, GetRecipieDetailInfo } from "../../Api";
import { Action } from "../Models/Models";
import { updateMeal } from "../Action/MealSearchAction";




export function* GetRecipie(action:Action<string>):Generator<any,any,any>{
    const data=yield call(GetRecipieByName,action.payload||"");
    yield put(updateMeal(data))
}
export function* GetRecipieDetail(action:Action<string>):Generator<any,any,any>{
       const data= yield call(GetRecipieDetailInfo,action.payload||"")
       yield put(updateMeal(data))
}