import React from 'react'
import { use } from 'react';
import { useState } from 'react'
import { useSearchParams,useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/PasteSlice';
import { useEffect } from 'react';


const ViewPaste = () => {

  const {id} = useParams();
  const allPastes = useSelector((state) => state.paste.pastes)

  const paste = allPastes.find((p)=>p._id === id)

  return (
     <div className=''>
      <div className='flex flex-row gap-7'>
        <input
          className='p-1 rounded-2xl mt-2 w-[66%] pl-5 border placeholder:text-white bg-gray-800 hover:border-blue-400 focus:border-blue-400 focus:outline-none'
          type="text" placeholder='enter title here...' value={paste.title} onChange={(e) => setTitle(e.target.value)} disabled/>

       
      </div>

      <div className='mt-8 px-[1px] bg-gray-500 rounded-xl flex flex-col'>
        <div className='w-[100%] h-6 px-1 bg-gray-500 rounded-xl flex gap-2 items-center pl-2'>
          <span className='rounded-full w-4 h-4 bg-red-400'></span>
          <span className='rounded-full w-4 h-4 bg-orange-400'></span>
          <span className='rounded-full w-4 h-4 bg-green-400'></span>
        </div>
        <textarea
          className='rounded-2xl p-4  min-w-[500px] border placeholder:text-white bg-gray-900 '
          placeholder='enter content here...'
          value={paste.content}
          onChange={(e) => { setValue(e.target.value) }}
          rows={15} disabled />
      </div>
    </div>
  )
}

export default ViewPaste
