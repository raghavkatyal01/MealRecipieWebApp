import { FC } from 'react'

interface SearchBarProps {
  
}

const SearchBar: FC<SearchBarProps> = ({}) => {
  return <div className='flex flex-col self-center gap-2  border-2 shadow-2xl mt-5'>
    <h1 className='text-xl p-1 font-bold'>Search Recipe</h1>
    <div className='flex flex-row gap-3 p-2'>
        <input type="text " className='border-2 border-black rounded-xl w-72 p-2'/> 
        <button className=' w-32 bg-orange-700 rounded hover:bg-orange-900 rounded-xl'>Search</button>
    </div>
  </div>
}

export default SearchBar