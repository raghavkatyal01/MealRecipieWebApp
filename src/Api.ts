import axios from "axios"
import { MealType } from "./redux/Models/Models"

export const GetRecipieByName=async (q:string)=>{
    const res=await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s="+q)

    return res.data["meals"]?.map((item:MealType)=> item)
}
