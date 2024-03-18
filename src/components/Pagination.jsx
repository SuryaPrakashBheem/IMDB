import React from 'react'

function Pagination({Next,Previous,PageNumber}) {
  return (
    <div className='flex gap-10 justify-center w-full h-[7vh] p-2 my-5 bg-gray-400 text-xl'>
        <div onClick={Previous}><i class="fa-solid fa-arrow-left"></i></div>
        <div className='font-bold'>{PageNumber}</div>
        <div onClick={Next}><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination