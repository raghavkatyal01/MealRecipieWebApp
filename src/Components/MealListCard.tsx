import { FC } from 'react'
import { MealType } from '../redux/Models/Models'

interface MealListProps {
  mealList:MealType[]
}

const MealListCard: FC<MealListProps> = ({mealList}) => {
  console.log("m",mealList)
  return <div className='flex flex-row   items-center shadow-lg justify-center flex-wrap gap-2'>
{mealList?.map((item)=>{
  return <div className='flex flex-col  border-2 justify-center items-center shadow-lg gap-2 p-2 rounded-xl'>
    <img src={item?.strMealThumb} className="max-w-52" alt="" />
    <p className='text-xl font-bold text-red-950'>{item?.strMeal}</p>
    <p className='text-md'>{item?.strCategory}</p>
    <button className='w-64 p-2 bg-orange-600 rounded-2xl hover:bg-orange-700'>View Details</button>
  </div>
})}
  </div>
}

export default MealListCard