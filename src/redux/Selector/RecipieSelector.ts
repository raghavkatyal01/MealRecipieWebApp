import { createSelector } from "reselect";
import { MainState } from "../Store";


export const stateSelector=(state:MainState)=>{
    return state.RecipieData
}
export const MealSelector=createSelector(stateSelector,(state)=>{
    return state.MealList
})

export const MealList=createSelector(MealSelector,(list)=>{

    return Object.keys(list).map((id)=>list[id])

})
export const QuerySelector=createSelector(stateSelector,(item)=>{

    return item.query

})
