import React from 'react'
import { use } from 'react';
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/PasteSlice';
import { useEffect } from 'react';

const Home = () => {

  const [title, setTitle] = useState("")
  const [value, setValue] = useState("")
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId")
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes)

  
    useEffect(() => {
      console.log(pasteId);
     if(pasteId){
      const paste = allPastes.find((p)=>p._id === pasteId)
      setTitle(paste.title)
      setValue(paste.content)
     }
    },[pasteId])

  function createPaste() {
    const Paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString()
    }

    if (pasteId) {
      dispatch(updateToPastes(Paste))
    } else {
      dispatch(addToPastes(Paste))
    }

    setTitle('')
    setValue('')
    setSearchParams({})
  }

  return (
    <div >
      <div className='flex flex-row gap-7'>
        <input
          className='p-1 rounded-2xl mt-2 w-[66%] pl-5 border bg-gray-800 placeholder:text-white hover:border-blue-400 focus:border-blue-400 focus:outline-none'
          type="text" placeholder='enter title here...' value={title} onChange={(e) => setTitle(e.target.value)} />

        <button className='p-2 rounded-xl mt-2 bg-white text-black' onClick={createPaste}>
          {
            pasteId ? "Update My Paste " : "Create My Paste"
          }
        </button>
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
          value={value}
          onChange={(e) => { setValue(e.target.value) }}
          rows={20} />
      </div>
    </div>
  )
}

export default Home
