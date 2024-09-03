import { FC } from 'react'
import Navbar from './Navbar'
import SearchBar from './SearchBar'

interface HomePageProps {
  
}

const HomePage: FC<HomePageProps> = ({}) => {
  return <>
    <div className='min-h-screen flex flex-col gap-5 '   
    style={{
    backgroundImage: `url('https://img.freepik.com/free-photo/ingredients-cabbage-carrot-pie-cabbage-carrots-eggs-flour-milk-butter-spices-white-background_127032-2819.jpg?size=626&ext=jpg&ga=GA1.1.295506174.1706011369&semt=ais_hybrid')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
        <Navbar />
        <SearchBar/>
    </div>
  </>
}

export default HomePage