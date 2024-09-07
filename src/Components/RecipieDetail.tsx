import { FC, useEffect } from 'react'

import { MainState } from '../redux/Store'
import { MealList, MealSelector } from '../redux/Selector/RecipieSelector'
import { connect, ConnectedProps } from 'react-redux'
import { withRouter, WithRouterProps } from '../Hoc/withRouter'
import { IoArrowBack } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { GetRecipieDetailAction } from '../redux/Action/MealSearchAction'
import Loading from './Loading'

type RecipieDetailProps =WithRouterProps&connected&{
  
}

const RecipieDetail: FC<RecipieDetailProps> = ({MealList,params, GetRecipieDetailAction}) => {
 
  const id=params.Id;

    useEffect(()=>{
     
      GetRecipieDetailAction(id)
      
    },[])
    if(!MealList){
      return <Loading/>
    }
  const IngredientsList: string[] = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient: string = MealList[`strIngredient${i}`];
    if (ingredient) {
      IngredientsList.push(ingredient);
    }
  }
  
  
  return<>
  <div className=' h-screen w-screen bg-gray-300'>
  <Link to='/'><IoArrowBack className='text-3xl '/></Link>
  <div className='  flex flex-row justify-center mt-8 items-center'>
  <div className='flex flex-row max-w-5xl rounded-xl justify-center gap-2 items-center border shadow-2xl'>
    <div className='w-1/2'>
    <img src={MealList.strMealThumb} className="w-full p-2 object-cover"alt="" />
    </div>
  <div className='w-1/2 flex flex-col self-start p-2 gap-2'>
  
    <p className='text-2xl font-semibold'> {MealList.strMeal}</p>
    <p><span className='font-bold'>Country  </span> {MealList.strArea}</p>
    <p><span className='font-bold'>Category  </span> {MealList.strCategory}</p>
    <h1 className='font-bold text-lg '>Process To Make</h1>
    <p className='text-gray-700 '>{MealList?.strInstructions}</p>

  </div>
  </div>
  
  </div >
  <div className='flex flex-row justify-center mt-4'>
  <div className='flex flex-col gap-2'>
  <h1 className='text-3xl self-center'>Ingredients List</h1>
  <div className='flex flex-row gap-4'>
   {IngredientsList.map((item)=>{
    return <p className=''>{item}</p>
   })}
   </div>
   </div>
  </div>
  </div>
  </> 
}
 const mapStateToProps=(state:MainState,ownProps:WithRouterProps)=>{
  const id=ownProps.params.Id
  return {
  
  MealList:MealSelector(state)[id]&&MealSelector(state)[id]
}}
const mapDispatchToProps={
  GetRecipieDetailAction:GetRecipieDetailAction
}
const connector=connect(mapStateToProps,mapDispatchToProps)
type connected=ConnectedProps<typeof connector>
export default withRouter(connector(RecipieDetail))