import { applyMiddleware, combineReducers, createStore } from "redux";
import RecipieDataReducer from "./SubReducer/RecipieData";
import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from "redux-saga";
import { takeEvery } from "redux-saga/effects";
import { CHANGE_QUERY_ACTION, GET_RECIPIE_DETAIL, SEARCH_ACTION } from "./Action/MealSearchAction";
import { GetRecipie, GetRecipieDetail } from "./Saga/RecipieList";
const reducer=combineReducers(
    {RecipieData:RecipieDataReducer,

    }
)
function* rootSaga(){
    yield takeEvery(SEARCH_ACTION,GetRecipie)
    yield takeEvery(GET_RECIPIE_DETAIL,GetRecipieDetail)
}
const sagaMiddleware = createSagaMiddleware()
const Store=createStore(reducer,composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)




export type MainState=ReturnType<typeof reducer>
export default Store




