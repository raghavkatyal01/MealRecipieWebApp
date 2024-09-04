export type MealType={
    idMeal:string,
    strMeal:string,
    strCategory:string,
    strArea:string,
    strMealThumb:string,
    strInstruction:string,
}

export type Action<T=any>={
    type:string,
    payload?:T,
}
export type ActionCreator<T=undefined>=(...args:any)=>Action<T>