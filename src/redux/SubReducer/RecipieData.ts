import { produce } from "immer";
import { AnyAction } from "redux";
import { MealType } from "../Models/Models";
import { CHANGE_QUERY_ACTION, UPDATE_MEAL} from "../Action/MealSearchAction";

export type State={
    MealList:{[key:string]:MealType},
   
    query:string,
}
const initialValue:State={
    MealList:{},
    query:"",

}


function RecipieDataReducer(State=initialValue,action:AnyAction):State{
    switch(action.type){
        case UPDATE_MEAL:
            const apiData=action.payload as MealType[]
        
            return produce(State,(draft)=>{
                const normalizedata= apiData?.reduce((acc:{[key:string]:MealType},curr:MealType)=>{
                   acc[curr.idMeal]=curr
                   return acc
                },{})
              
                
                draft.MealList=normalizedata||{};
               
            })
            case CHANGE_QUERY_ACTION:
                return produce(State,(draft)=>{
                    draft.query=action.payload as string
                })
          

        default:
            return State;
    }
}

export default RecipieDataReducer


