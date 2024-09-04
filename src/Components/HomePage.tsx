import { FC } from 'react'
import Navbar from './Navbar'
import SearchBar from './SearchBar'

import { connect, ConnectedProps } from 'react-redux'
import { MealList, QuerySelector } from '../redux/Selector/RecipieSelector'
import MealListCard from './MealListCard'
import { MainState } from '../redux/Store'

type HomePageProps=conectedProps& {
  
}

const HomePage: FC<HomePageProps> = ({MealList}) => {
  
  return <>
    <div className='min-h-screen flex flex-col gap-5 bg-opacity-0'   
    style={{
    backgroundImage: `url('https://img.freepik.com/free-photo/ingredients-cabbage-carrot-pie-cabbage-carrots-eggs-flour-milk-butter-spices-white-background_127032-2819.jpg?size=626&ext=jpg&ga=GA1.1.295506174.1706011369&semt=ais_hybrid')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
        <Navbar />
        <SearchBar/>
        <MealListCard mealList={MealList}/>
    </div>
  </>
}
const mapStateToProps=(state:MainState)=>({
  MealList:MealList(state),
  
})

const connector=connect(mapStateToProps,undefined)
type conectedProps=ConnectedProps<typeof connector>
export default connector(HomePage)