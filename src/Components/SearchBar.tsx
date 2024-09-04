import { FC, useState } from 'react'
import { changeQueryAction, searchAction } from '../redux/Action/MealSearchAction'
import { connect, ConnectedProps } from 'react-redux'
import { MainState } from '../redux/Store'
import { QuerySelector } from '../redux/Selector/RecipieSelector'


type SearchBarProps =conectedProps&{
  
}

const SearchBar: FC<SearchBarProps> = ({changeQueryAction,query,searchAction}) => {

 const DispatchAction=()=>{
  searchAction(query)
}
  return <div className='flex  hover:scale-105  flex-col self-center gap-2  border-2 rounded-lg shadow-2xl mt-5'>
    <h1 className='text-xl p-1 font-bold text-white'>Search Recipe</h1>
    <div className='flex flex-row gap-3 p-2'>
        <input type="text " onChange={(e)=>changeQueryAction(e.target.value)} className='border-2 border-black rounded-xl w-72 p-2'/> 
        <button className=' w-32  bg-orange-700 hover:-translate-y-1  hover:bg-orange-900 rounded-xl' onClick={DispatchAction}>Search</button>
    </div>
    
  </div>
}
const mapDispatchToProps={
  changeQueryAction:changeQueryAction,
  searchAction:searchAction
  
}
export const mapStateToProps=(state:MainState)=>({
  query:QuerySelector(state),
})

const connector=connect(mapStateToProps,mapDispatchToProps)
type conectedProps=ConnectedProps<typeof connector>
export default connector(SearchBar)