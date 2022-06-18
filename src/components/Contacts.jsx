import React from 'react'

const Contacts = () => {
  return (
    <div name='contacts' className='h-screen w-full bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' actions='' className='flex flex-col max-w-[700px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-rose-500 text-amber-400'>Contact</p>
            <p className='text-amber-400 py-4'>email</p>
        </div>
        <input className='bg-[#0ccd6f6] p-2' type='text' placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccs6f6]' type='email' placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] my-4 p-2' name='message' row='10' placeholder='Message'>
            YUP
        </textarea>
        <button className='text-amber-100 border-2 hover:bg-rose-500 hover:border-amber-500 px-4 py-3my-8 mx-auto flex items-center'>
            YUP
        </button>
      </form>
    </div>
  )
}

export default Contacts
