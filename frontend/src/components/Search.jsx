import React from 'react'

const Search = ({search,setSearch}) => {
  return (
      <div className=' relative '>
          <input onChange={(e) => setSearch(e.target.value)} className='bg-blue-600 absolute right-0 rounded-2xl pl-2  border-black border-2 w-40 mt-2 mr-1' type='search' placeholder='Enter the city name' />
      </div>
  )
}

export default Search