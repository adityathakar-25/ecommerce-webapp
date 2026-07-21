import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event)=>{
        event.preventDefault();
    }

  return (
    <div className='text-center mb-16'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
            Stay updated with our latest drops, exclusive deals, and style tips.
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border rounded-full pl-3'>
            <input className='w-full sm:flex-1 outline-none py-3' type='email' placeholder='Enter your email' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4 rounded-r-full'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox