import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { removeFromPastes, updateToPastes } from '../redux/PasteSlice'
import toast from 'react-hot-toast'
import { WhatsappShareButton } from 'react-share'


const Paste = () => {
  const paste = useSelector((state) => state.paste.pastes)
  console.log(paste)

  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch()

  const filteredData = paste.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase()));

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId))
  }



 

  return (
    <div>
      <input
        className="p-2 rounded-2xl min-w-[600px mt-5 border bg-gray-800 placeholder:text-white hover:border-blue-400 focus:border-blue-400 focus:outline-none"
        type='text' placeholder='search here' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />



      <div>
        {
          filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
              <div className='rounded-2xl p-4 mt-4 min-w-[500px] border placeholder:text-white bg-gray-800 hover:bg-gray-900  ' key={paste?._id}>
                <div className='flex justify-between'>
                  <div className='text-3xl font-bold font-mono'>
                    <h4>{paste.title}</h4>
                  </div>

                  <div className='flex gap-1 justify-evenly text-sm'>
                    <button className='rounded-xl bg-gray-600   px-3 hover:bg-blue-500'>
                      <a href={`/?pasteId=${paste?._id}`}>
                        Edit
                      </a>
                    </button>
                    <button className='rounded-xl bg-gray-600 hover:bg-pink-500  px-3 '>
                      <a href={`/pastes/${paste?._id}`}>
                        view
                      </a>
                    </button>
                    <button className='rounded-xl bg-gray-600 hover:bg-gray-800  px-3  hover:bg-red-500 '
                      onClick={() => handleDelete(paste?._id)}>
                      Delete
                    </button>
                    <button className='rounded-xl bg-gray-600  px-3  hover:bg-amber-400 '
                      onClick={() => {
                        navigator.clipboard.writeText(paste?.content)
                        toast.success("copied to clipboard")
                      }}>
                      Copy
                    </button>
                    <button className='rounded-xl bg-gray-600 hover:bg-green-400  px-3 '>
                      <WhatsappShareButton
                        url={`https://tutorend.com`}
                        title={`\n\n title :${paste?.title}\n\n Content: ${paste?.content}\n\n`}
                

                      >
                        Share
                      </WhatsappShareButton>
                    </button>
                  </div>
                </div>
                <div className='mt-4 mb-4 text-xl font-semibold font-sans'>
                  {paste.content}
                </div>


                <div className='text-sm text-gray-400 relative left-[65%]'>
                  {paste.createdAt}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Paste
