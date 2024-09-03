import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage'
import RecipieDetail from './Components/RecipieDetail'


interface AppProps {
  
}

const App: FC<AppProps> = ({}) => {
  return (
    <Routes>
      <Route  index element={<HomePage/>}/>
      <Route path="/RecipieDetail/:Id" element={<RecipieDetail/>}/>
    
    </Routes>
  )
}

export default App