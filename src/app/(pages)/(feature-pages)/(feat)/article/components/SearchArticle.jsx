import React from 'react'

const SearchArticle = () => {
  return (
    <div>
        <input className='w-[300px] h-10 p-3 text-sm border-gray-400 border-2 rounded-full focus:outline-none focus:border-primary' type="text" placeholder='Apa yang sedang kamu cari?' />
    </div>
  )
}

export default SearchArticle